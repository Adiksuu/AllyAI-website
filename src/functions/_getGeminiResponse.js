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

async function _getGeminiResponse(message, history) {
    try {
        const model = initializeGenerativeModel();
        const chat = createChatSession(model, history);
        const answer = await sendChatMessageWithRetry(chat, message);
        return answer;
    } catch (error) {
        console.error("Error with Gemini API:", error);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
}

export { _getGeminiResponse };
