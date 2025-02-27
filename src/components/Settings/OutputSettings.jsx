import React, { useEffect, useRef, useState } from "react";
import { _getSettings, _setSettings } from "../../functions/_getSettings";
import { languages } from "../../api/languages/languagesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { tone as tones } from "../../api/languages/tone";

export default function OutputSettings() {
    const [temperature, setTemperature] = useState("Loading...");
    const [length, setLength] = useState("Loading...");
    const [selecting, setSelecting] = useState(false)
    const [language, setLanguage] = useState('auto')
    const [tone, setTone] = useState('neutral')
    const [rules, setRules] = useState('')
    const [selectingTone, setSelectingTone] = useState(false)
    const textareaRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await _getSettings();

            setTemperature(data.temperature.toString());
            setLength(data.length.toString());
            setLanguage(data.language);
            setRules(data.rules);
            setTone(data.tone);
        };
        fetchData();
    }, []);

    function handleSelectLanguage(lang) {
        if (lang === language) return
        setLanguage(lang)
        setSelecting(false)
    }
    function handleSelectTone(lang) {
        if (lang === tone) return
        setTone(lang)
        setSelectingTone(false)
    }

    const handleToggleSelecting = () => {
        setSelecting(!selecting)
    }
    const handleToggleSelectingTone = () => {
        setSelectingTone(!selectingTone)
    }

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleInput = (e) => {
        setRules(e.target.value);
        adjustTextareaHeight();
    };


    function Language({ lang }) {
        return (
            <div className={`language${lang === language && selecting ? ' primary' : ''}`} onClick={() => handleSelectLanguage(lang)}>
                <span>{lang}</span>
                {lang === language ? <button onClick={() => handleToggleSelecting()}><FontAwesomeIcon icon={faChevronDown} /></button> : null}
            </div>
        )
    }
    function Tone({ lang }) {
        return (
            <div className={`language${lang === tone && selectingTone ? ' primary' : ''}`} onClick={() => handleSelectTone(lang)}>
                <span>{lang}</span>
                {lang === tone ? <button onClick={() => handleToggleSelectingTone()}><FontAwesomeIcon icon={faChevronDown} /></button> : null}
            </div>
        )
    }

    return (
        <div className="container">
            <h2>Output Settings</h2>
            <div className="list">
                <span>Temperature</span>
                <p>
                    Temperature controls the randomness of the output. Use
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
                    Values can range from [1024, 16384]
                </p>
                <input
                    type="text"
                    placeholder="Values can range from [1024, 16384]."
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>
            <div className="list">
                <span>Output Tone</span>
                <p>Control the tone of the messages you receive</p>
                <div className="select_language">
                    <Tone lang={tone} key={'neutral'} />
                    {selectingTone ? <div className="lang_list">
                        {tones.filter(lang => lang !== tone).map((lang, index) => (
                            <Tone lang={lang} key={index} />
                        ))}
                    </div> : null}
                </div>
            </div>
            <div className="list">
                <span>Custom Instructions</span>
                <p>Provide your own rules that AllyAI will follow in each of your chats</p>
                <div className="rules">
                    <textarea ref={textareaRef} value={rules} onChange={handleInput} maxLength={300} type="text" placeholder="Your instructions..."></textarea>
                    <span>{300 - rules.length}</span>
                </div>
                <button
                    onClick={() =>
                        _setSettings(
                            temperature,
                            length,
                            setTemperature,
                            setLength,
                            language,
                            setLanguage,
                            rules, setRules,
                            tone, setTone
                        )
                    }
                >
                    SAVE SETTINGS
                </button>
            </div>
        </div>
    );
}
