const query = async (data) => {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
            {
                headers: {
                    Authorization:
                        "Bearer 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",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch image");
        }

        const result = await response.blob();
        return URL.createObjectURL(result);
    } catch (err) {
        console.error("Error with Gemini API:", err.message);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
};

async function _getImagineResponse(message) {
    if (!message) return;
    return await query({ inputs: message });
}

export { _getImagineResponse };
