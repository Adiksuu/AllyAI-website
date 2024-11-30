import React, { useEffect, useState } from "react";
import { _getSettings, _setSettings } from "../../functions/_getSettings";

export default function OutputSettings() {
    const [temperature, setTemperature] = useState("Loading...");
    const [length, setLength] = useState("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();

            setTemperature(data.temperature.toString());
            setLength(data.length.toString());
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Output Settings</h2>
            <div className="list">
                <span>Temperature</span>
                <p>
                    temperature controls the randomness of the output. Use
                    higher values for more creative responses, and lower values
                    for more deterministic responses. Values can range from
                    [0.0, 2.0].
                </p>
                <input
                    type="text"
                    maxLength={1}
                    placeholder="Values can range from [0.0, 2.0]."
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                />
            </div>
            <div className="list">
                <span>Output Length</span>
                <p>
                    Control how long the text of the displayed response can be.
                    Values can range from [1024, 8192]
                </p>
                <input
                    type="text"
                    placeholder="Values can range from [1024, 8192]."
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>
            <div className="save">
                <button
                    onClick={() =>
                        _setSettings(
                            temperature,
                            length,
                            setTemperature,
                            setLength
                        )
                    }
                >
                    SAVE SETTINGS
                </button>
            </div>
        </div>
    );
}
