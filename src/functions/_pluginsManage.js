const _savePlugin = (pluginName) => {
    // Get existing plugins from localStorage or initialize empty array
    const existingPlugins = JSON.parse(localStorage.getItem("plugins") || "[]");

    // Add new plugin if it's not already in the list
    if (!existingPlugins.includes(pluginName)) {
        existingPlugins.push(pluginName);
    } else {
        // Remove plugin if it already exists
        const index = existingPlugins.indexOf(pluginName);
        existingPlugins.splice(index, 1);
    }
    // Save updated list back to localStorage
    localStorage.setItem("plugins", JSON.stringify(existingPlugins));
};

const _getPlugin = (pluginName) => {
    const existingPlugins = JSON.parse(localStorage.getItem("plugins") || "[]");

    return existingPlugins.includes(pluginName)
}

export { _savePlugin, _getPlugin };
