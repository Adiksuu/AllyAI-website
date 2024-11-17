const _formatMessageText = (text) => {
    const replacedText = text.replace(/\.  (?=\S)/g, ".\n");
    return replacedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

export { _formatMessageText }