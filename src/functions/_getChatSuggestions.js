import { _getGeminiResponse } from "./_getGeminiResponse"

const _getChatSuggestions = async (history) => {
    const geminiResponse = await _getGeminiResponse(
        'Provide a list of 3 questions the user could ask (based on their question writing style) depending on the context of this conversation.',
        history,
        [],
        undefined
    );

    const suggestions = transformToArray(geminiResponse);

    return suggestions;
}

const transformToArray = (message) => {
    if (!message || typeof message !== 'string') return ['error'];

    const regex = /\d+\.\s/;
    const result = message.split(regex).filter(Boolean);
    return result.filter((_, index) => index !== 0);
}

export { _getChatSuggestions }