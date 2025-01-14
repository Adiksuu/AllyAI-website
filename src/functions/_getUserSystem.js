const _getUserSystem = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes("windows")) {
        return "windows";
    } else if (userAgent.includes("linux")) {
        return "linux";
    } else {
        return ""
    }
}

export { _getUserSystem }