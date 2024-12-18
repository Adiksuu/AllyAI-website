import { GoogleGenerativeAI } from "@google/generative-ai";
import { KEY } from "../api/gemini/key";
import { models } from "../api/models/modelsList";
import { _getSettings } from "./_getSettings";
import { suggestionsRules } from "../api/gemini/suggestionsRules";

function initializeGenerativeModel(cModel, temperature, language, rules) {
    const API_KEY = KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    return genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: {
        temperature: temperature
    }, systemInstruction: `${language !== 'auto' ? `Always speek in ${language} language!` : ''}, Stick to these rules: ${rules} ${cModel ? `and ${models.find(a => a.name.toUpperCase() === cModel).defaultHistory}` : `and ${suggestionsRules}`}` });
}

function createChatSession(model, history) {
    return model.startChat({ history: [...history] });
}

const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

const sendMultimodalMessage = async (model, message, files, history) => {
    const imageParts = await Promise.all(
        files.map(async (file) => {
            const mimeType = file.type;
            const base64Data = await fileToBase64(file);
            return {
                inlineData: {
                    data: base64Data,
                    mimeType,
                },
            };
        })
    );

    const prompt = history.map((h) => h.message).join("\n") + "\n" + message;

    const result = await model.generateContentStream([prompt, ...imageParts]);

    let outputText = "";
    for await (const chunk of result.stream) {
        outputText += chunk.text();
    }

    return outputText || "No response generated.";
};


async function sendChatMessageWithRetry(chat, value, retries = 3, delay = 1000) {
    let attempt = 0;

    while (attempt < retries) {
        try {
            const result = await chat.sendMessage(value);
            return result.response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        } catch (error) {
            if (error.message.includes("503") && attempt < retries - 1) {
                console.warn(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
                await new Promise((resolve) => setTimeout(resolve, delay));
                attempt++;
            } else {
                console.error("Error sending message to Gemini API:", error);
                throw new Error("Failed to send message.");
            }
        }
    }
}

async function _getGeminiResponse(message, history, file, cModel) {
    try {
        const data = await _getSettings()
        const temperature = data.temperature || 1;
        const language = data.language || 'auto';
        const rules = data.rules || '';
        const model = initializeGenerativeModel(cModel, temperature, language, rules);

        if (file.length > 0) {
            const answer = await sendMultimodalMessage(model, message, file, history);
            return answer;
        } else {
            const chat = await createChatSession(model, history);
            const answer = await sendChatMessageWithRetry(chat, message);
            return answer;
        }
    } catch (error) {
        console.error("Error with Gemini API:", error);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
}

export { _getGeminiResponse };
