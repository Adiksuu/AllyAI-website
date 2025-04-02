import { ASPECT_RATIOS } from "../api/huggingface/aspectRatio";

const query = async (data) => {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
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

        const blob = await response.blob();

        // Konwersja `blob` na Base64
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // Tworzymy ciąg w formacie `data:image/png;base64,`
                resolve(reader.result);
            };
            reader.onerror = () => {
                reject(new Error("Failed to convert blob to Base64"));
            };
            reader.readAsDataURL(blob);
        });
    } catch (err) {
        console.error("Error with Hugging Face API:", err.message);
        return "Unfortunately, the server is overloaded. Please try again later.";
    }
};

async function _getImagineResponse(message, aspectRatio = "1:1") {
    if (!message) return;

    // Dodajemy parametry `width` i `height`, aby uzyskać proporcje 16:9.
    // Przykładowe wartości: 1024x576 (16:9).  Możesz dostosować te wartości
    // w zależności od potrzeb, zachowując proporcje 16:9.
    const { width, height } = ASPECT_RATIOS[aspectRatio];

    const options = {
        inputs: message,
        parameters: {
            width: width, // Szerokość
            height: height, // Wysokość
        },
    };

    return await query(options);
}

export { _getImagineResponse };