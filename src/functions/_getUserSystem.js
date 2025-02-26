const _getUserSystem = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    switch (true) {
        case userAgent.includes("windows"):
            return "Windows";
        case userAgent.includes("linux"):
            return "Linux";
        default:
            return "";
    }
};

export { _getUserSystem };