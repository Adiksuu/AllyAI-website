import { faDownload, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { _getPluginsList } from "../../functions/_getPluginsList";
import { _getPlugin, _savePlugin } from "../../functions/_pluginsManage";

export default function PluginsSettings() {
    const [plugins, setPlugins] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            setPlugins(await _getPluginsList());
        };
        fetch();
    }, []);

    function Plugin({ plugin }) {
        const installed = _getPlugin(plugin.name);

        const handlePluginToggle = async () => {
            _savePlugin(plugin.name);
            setPlugins(await _getPluginsList());
        };

        return (
            <div className="plugin">
                <div className="plugin__help">
                    <div className="plugin__icon">
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                    </div>
                    <div className="plugin__info">
                        <h3>
                            {plugin.name} · {plugin.version}
                        </h3>
                        <p className={plugin?.error ? 'error' : ''}>{plugin?.error ? plugin.error : plugin.description}</p>
                    </div>
                </div>
                <div className="plugin__manage">
                    <button
                        onClick={handlePluginToggle}
                        className={installed ? "installed" : ""}
                        disabled={plugin?.error}
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        {installed ? "Installed" : "Install"}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Plugins List</h2>
            <div className="list">
                <span>Plugins - Temporarily disabled</span>
                <p>
                    Install verified additional website plugins to improve the
                    Ally website experience
                </p>
                {/*<div className="plugins__list">*/}
                {/*    {plugins.map((plugin, i) => (*/}
                {/*        <Plugin key={i} plugin={plugin} />*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
