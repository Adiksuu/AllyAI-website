const _getPluginsList = async () => {
    let plugins = []
    try {
        const pluginFiles = import.meta.glob('/src/plugins/*.js');

        for (const path in pluginFiles) {
            if (pluginFiles.hasOwnProperty(path)) {
                try {
                    const module = await pluginFiles[path]();
                    const pluginConfig = module.default;

                    if (!pluginConfig || typeof pluginConfig !== 'object') {
                        continue;
                    }

                    const { name, version, description, runPathname, executePlugin } = pluginConfig;

                    if (executePlugin && typeof executePlugin === 'function') {
                        plugins.push(pluginConfig);
                    } else {
                        const error = `Plugin ${path} does not export a correct configuration.`;
                        const data = {
                            name, version, description, runPathname, executePlugin, error
                        }
                        plugins.push(data)
                    }
                } catch (importError) {}
            }
        }
    } catch (error) {
        console.error("Błąd podczas ładowania/wykonywania pluginów:", error);
    }
    return plugins
}

export { _getPluginsList }