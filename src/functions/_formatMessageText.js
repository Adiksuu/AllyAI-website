export const _formatMessageText = (text) => {
    // Zamiana `**tekst**` na <strong>tekst</strong>
    const strongFormatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    // Escapowanie innych tagów HTML (zamiana < i > na &lt; i &gt;)
    const escapedHTML = strongFormatted.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    // Przywrócenie poprawnego renderowania tagów <strong>
    const restoredStrong = escapedHTML.replace(/&lt;strong&gt;/g, "<strong>").replace(/&lt;\/strong&gt;/g, "</strong>");
    
    return restoredStrong;
};
