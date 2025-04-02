const pluginConfig = {
    name: "Chat Suggestions",
    version: "1.0.0",
    description: "Display the chat suggestions (turn experimental settings on)",
    runPathname: "/chat/", 
    executePlugin: () => {
        const styles = document.createElement('style')
        styles.textContent = `
            .chat .messages .suggestions {
                display: flex;
            }
        `
        document.head.appendChild(styles)
    }
};
  
export default pluginConfig; 