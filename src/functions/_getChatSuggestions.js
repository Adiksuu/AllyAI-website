import { _getGeminiResponse } from "./_getGeminiResponse"

const _getChatSuggestions = async (history) => {
    const geminiResponse = await _getGeminiResponse(
        'Provide a list of 10 queries that the user could ask based on the context of this conversation.',
        history,
        [],
        undefined
    );

    const suggestions = transformToArray(geminiResponse);

    return suggestions;
}

const transformToArray = (message) => {
    if (!message || typeof message !== 'string') return ['blad'];

    const regex = /\d+\.\s/;
    const result = message.split(regex).filter(Boolean);
    return result
}

export { _getChatSuggestions }