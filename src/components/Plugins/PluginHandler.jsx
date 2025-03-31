import React, { useState, useEffect } from "react";

const PluginHandler = () => {
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        const loadPlugins = async () => {
            const pluginModules = {};

            try {
                // Używamy import.meta.glob do automatycznego znalezienia wszystkich pluginów
                const modules = import.meta.glob("/src/plugins/*.js");

                for (const path in modules) {
                    try {
                        const module = await modules[path]();
                        const pluginName = path
                            .split("/")
                            .pop()
                            .replace(".js", "");

                        if (typeof module.default === "function") {
                            pluginModules[pluginName] = module.default;
                        } else {
                            console.warn(
                                `Plugin ${pluginName} nie eksportuje domyślnej funkcji.`
                            );
                        }
                    } catch (err) {
                        console.error(
                            `Błąd podczas ładowania pluginu ${path}:`,
                            err
                        );
                    }
                }

                setPlugins(Object.entries(pluginModules));
            } catch (error) {
                console.error("Błąd podczas ładowania pluginów:", error);
            }
        };

        loadPlugins();
    }, []);
};

export default PluginHandler;
