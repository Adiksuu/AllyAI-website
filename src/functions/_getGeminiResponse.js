import { GoogleGenerativeAI } from "@google/generative-ai";
import { KEY } from "../api/gemini/key";

// Funkcja do uzyskania odpowiedzi od modelu na podstawie wiadomości
function initializeGenerativeModel() {
    const API_KEY = KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    return genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

async function _getGeminiResponse(message) {
    try {
        // Pobranie modelu generatywnego
        const model = initializeGenerativeModel()
        
        // Użycie odpowiedniej metody do generowania odpowiedzi
        const result = await model.generateContent(message);
        
        // Sprawdzenie wyniku i zwrócenie odpowiedzi
        const text = result.response.candidates[0].content.parts[0].text;
        return text;
    } catch (error) {
        console.error('Error with Google Gemini API:', error);
        return 'Unfortunately, there was an error with the API.';
    }
}

export { _getGeminiResponse };
