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
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const blob = await response.blob();

        // Konwersja `blob` na Base64
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Tworzymy ciąg w formacie `data:image/png;base64,`
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(new Error("Failed to convert blob to Base64"));
            };
            reader.readAsDataURL(blob);
        });
    } catch (err) {
        console.error("Error with Hugging Face API:", err.message);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
};

async function _getImagineResponse(message) {
    if (!message) return;
    return await query({ inputs: message });
}

export { _getImagineResponse };
