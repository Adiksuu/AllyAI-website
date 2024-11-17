export const _formatMessageText = (text) => {
    const splitBlocks = text.split(/```(.*?)```/gs);

    const formattedText = splitBlocks
        .map((chunk, index) => {
            if (index % 2 === 1) {
                return `<p>${chunk}</p>`;
            } else {
                return chunk.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            }
        })
        .join("");

    const escapedHTML = formattedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const restoredHTML = escapedHTML
        .replace(/&lt;strong&gt;/g, "<strong>")
        .replace(/&lt;\/strong&gt;/g, "</strong>")
        .replace(/&lt;p&gt;/g, "<p>")
        .replace(/&lt;\/p&gt;/g, "</p>");

    return restoredHTML;
};
