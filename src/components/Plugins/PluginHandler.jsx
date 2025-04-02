import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { _getPluginsList } from "../../functions/_getPluginsList";
import { _getPlugin } from "../../functions/_pluginsManage";

const PluginHandler = () => {
    const location = useLocation();

    useEffect(() => {
        const loadAndExecutePlugins = async () => {
          try {
            const pluginFiles = import.meta.glob('/src/plugins/*.js');

            _getPluginsList()
    
            for (const path in pluginFiles) {
              if (pluginFiles.hasOwnProperty(path)) {
                try {
                  const module = await pluginFiles[path]();
                  const pluginConfig = module.default;
    
                  if (!pluginConfig || typeof pluginConfig !== 'object') {
                    continue; 
                  }
    
                  const { name, runPathname, executePlugin } = pluginConfig;
    
                  if (!runPathname || runPathname === "" || location.pathname.includes(runPathname)) {
                    if (executePlugin && typeof executePlugin === 'function') {
                        const installed = _getPlugin(name)
                        if (installed) {
                            executePlugin();
                        }
                    } else {
                    }
                  }
                } catch (importError) {}
              }
            }
          } catch (error) {
            console.error("Błąd podczas ładowania/wykonywania pluginów:", error);
          }
        };
    
        loadAndExecutePlugins();
      }, [location.pathname]);
};

export default PluginHandler;
