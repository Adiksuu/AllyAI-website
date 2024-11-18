import { GoogleGenerativeAI } from "@google/generative-ai";
import { KEY } from "../api/gemini/key";

function initializeGenerativeModel() {
    const API_KEY = KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    return genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });
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

const sendMultimodalMessage = async (model, message, file, history) => {
    const mimeType = file.type;
    const base64Data = await fileToBase64(file);

    const imagePart = {
        inlineData: {
            data: base64Data,
            mimeType,
        },
    };

    const prompt = history.map((h) => h.message).join("\n") + "\n" + message;

    const result = await model.generateContentStream([prompt, imagePart]);

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

async function _getGeminiResponse(message, history, file) {
    try {
        const model = initializeGenerativeModel();

        if (file) {
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
