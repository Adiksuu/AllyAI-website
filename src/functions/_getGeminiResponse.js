import { GoogleGenerativeAI } from "@google/generative-ai";
import { KEY } from "../api/gemini/key";
import { models } from "../api/models/modelsList";
import { _getCustomRules, _getSettings } from "./_getSettings";
import { suggestionsRules } from "../api/gemini/suggestionsRules";

function initializeGenerativeModel(cModel, temperature, language, rules, cRules, isSearching) {
    const API_KEY = KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    if (isSearching) {
        return genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            tools: [
                {
                    googleSearch: {}  // <-- Usunięcie dynamicRetrievalConfig
                }
            ],
            systemInstruction: `${language !== 'auto' ? `Always speak in ${language} language!` : ''}, Stick to these rules: ${rules} ${cModel ? `and ${models.find(a => a.name.toUpperCase() === cModel).defaultHistory}` : `and ${suggestionsRules}`}`
        });
    }

    if (cModel !== 'ALLY-CUSTOM') {
        return genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp", generationConfig: {
            temperature: temperature
        }, systemInstruction: `${language !== 'auto' ? `Always speek in ${language} language!` : ''}, Stick to these rules: ${rules} ${cModel ? `and ${models.find(a => a.name.toUpperCase() === cModel).defaultHistory}` : `and ${suggestionsRules}`}` });
    } else {
        return genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp", generationConfig: {
            temperature: temperature
        }, systemInstruction: `${language !== 'auto' ? `Always speek in ${language} language!` : ''}, Stick to these rules: ${rules} and ${cRules}` });
    }
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


async function sendChatMessageWithRetry(chat, value, retries = 3, delay = 1000, isSearching) {
    let attempt = 0;

    while (attempt < retries) {
        try {
            const result = await chat.sendMessage(value);
            if (!isSearching) {
                return result.response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
            } else {
                const groundingSupports = result.response.candidates[0]?.groundingMetadata?.groundingSupports || [];
                return groundingSupports.map(gs => gs.segment.text).join("\n") || "No response generated.";
            }
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

async function _getGeminiResponse(message, history, file, cModel, isSearching = false) {
    try {
        const data = await _getSettings()
        const cData = await _getCustomRules()
        const temperature = data.temperature || 1;
        const language = data.language || 'auto';
        const rules = `Always use ${data.tone} tone language!. ${data.rules}` || '';
        const cRules = cData.rules || ''
        const model = initializeGenerativeModel(cModel, temperature, language, rules, cRules, isSearching);

        if (file.length > 0) {
            const answer = await sendMultimodalMessage(model, message, file, history);
            return answer;
        } else {
            const chat = await createChatSession(model, history);
            const answer = await sendChatMessageWithRetry(chat, message, 3, 1000, isSearching);
            return answer;
        }
    } catch (error) {
        console.error("Error with Gemini API:", error);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
}

export { _getGeminiResponse };
