const pluginConfig = {
    name: "Fake message",
    version: "1.0.0",
    description: "Click on message to edit content",
    runPathname: "/chat/",
    executePlugin: () => {
        const interval = setInterval(() => {
            const messages = document.querySelectorAll(".message");

            if (!messages) return
            messages.forEach((message) => {
                message.querySelector('.message-content').contentEditable = true;
            });
            clearInterval(interval)
        }, 0)
    },
};

export default pluginConfig;
