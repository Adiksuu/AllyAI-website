import React, { useEffect, useState } from "react";
import { _getSettings, _setSettings } from "../../functions/_getSettings";
import { languages } from "../../api/languages/languagesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function OutputSettings() {
    const [temperature, setTemperature] = useState("Loading...");
    const [length, setLength] = useState("Loading...");
    const [selecting, setSelecting] = useState(false)
    const [language, setLanguage] = useState('auto')

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();

            setTemperature(data.temperature.toString());
            setLength(data.length.toString());
            setLanguage(data.language);
        };
        fetchData();
    }, []);

    function handleSelectLanguage(lang) {
        if (lang === language) return
        setLanguage(lang)
        setSelecting(false)
    }

    const handleToggleSelecting = () => {
        setSelecting(!selecting)
    }


    function Language({ lang }) {
        return (
            <div className={`language${lang === language && selecting ? ' primary' : ''}`} onClick={() => handleSelectLanguage(lang)}>
                <span>{lang}</span>
                {lang === language ? <button onClick={() => handleToggleSelecting()}><FontAwesomeIcon icon={faChevronDown} /></button> : null}
            </div>
        )
    }

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
                <span>Output Language</span>
                <p>Select the language in which you want to receive replies</p>
                <div className="select_language">
                    <Language lang={language} key={'English'} />
                    {selecting ? <div className="lang_list">
                        {languages.filter(lang => lang !== language).map((lang, index) => (
                            <Language lang={lang} key={index} />
                        ))}
                    </div> : null}
                </div>
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
                <button
                    onClick={() =>
                        _setSettings(
                            temperature,
                            length,
                            setTemperature,
                            setLength,
                            language,
                            setLanguage
                        )
                    }
                >
                    SAVE SETTINGS
                </button>
            </div>
        </div>
    );
}
