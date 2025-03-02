import { faArrowUp, faFile, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { _getPrompts } from '../../functions/_maxPrompts'
import { models } from '../../api/models/modelsList'
import { _checkUserAccount } from '../../functions/_upgradeAccount'

export default function ChatInput({ currentChat, history, setLoading, loading, message, setMessage }) {
    const [prompts, setPrompts] = useState(0);
    const [file, setFile] = useState([]);
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase();
    const [isPremium, setIsPremium] = useState(false);
    const [ratio, setRatio] = useState('1:1');
    const [searching, setSearching] = useState(false)

    const handleChangeRatio = () => {
        if (ratio === '1:1') {
            setRatio('16:9')
        } else if (ratio === '16:9') {
            setRatio('9:16')
        } else if (ratio === '9:16') {
            setRatio('4:3')
        } else if (ratio === '4:3') {
            setRatio('3:4')
        } else if (ratio === '3:4') {
            setRatio('1:1')
        }
    }

    useEffect(() => {
        const fetch = async () => {
            const data = await _checkUserAccount();
            setIsPremium(data);
        };
        fetch();
    }, []);

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts(model.toUpperCase()));
        };
        loadPrompts();
    }, [history]);

    const handleSendMessage = (e) => {
        if (loading) return;

        _sendMessage(model.toUpperCase(), message, setMessage, e, currentChat, history, setLoading, file, setFile, undefined, ratio, searching);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };

    const handleFileUpload = async (event) => {
        const uploadedFiles = event.target.files;
        if (uploadedFiles) {
            setFile(Array.from(uploadedFiles));
        } else {
            setFile(null);
        }
    };

    const handlePaste = (e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].type.startsWith('image/')) {
                const pastedImage = items[i].getAsFile();
                if (pastedImage) {
                    setFile((prevFiles) => [...prevFiles, pastedImage]);
                }
                break;
            }
        }
    };

    const maxModelPrompts = !isPremium ? models.find(a => a.name.toUpperCase() === model.toUpperCase()).dailyLimit : 999;

    return (
        <div className="input" onPaste={handlePaste}>
            <form className="content" onSubmit={(e) => handleSendMessage(e)}>
                <input id="upload" type="file" multiple accept="image/*" disabled={loading} onClick={() => file ? setFile([]) : null} onChange={handleFileUpload} />
                {model === 'ALLY-IMAGINE' ? null : (
                    <label className={file.length > 0 ? 'uploaded' : ''} htmlFor="upload">
                        {file.length > 0 ? <span>{file.length}</span> : null}
                        <FontAwesomeIcon icon={faFile} />
                    </label>
                )}
                {model === 'ALLY-IMAGINE' ? (
                    <label className="ratio uploaded" onClick={() => handleChangeRatio()}>{ratio}</label>
                ) : null}
                <textarea
                    disabled={loading || prompts >= maxModelPrompts}
                    onKeyDown={handleKeyDown}
                    type="text"
                    placeholder={
                        prompts >= maxModelPrompts
                            ? 'Prompts limit reached for today'
                            : loading
                            ? 'Wait for response...'
                            : 'Ask question'
                    }
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button disabled={loading || message.trim().length === 0 || prompts >= maxModelPrompts}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
                {model.toUpperCase() === 'ALLY-2' ? (
                        <label onClick={() => setSearching(!searching)} className={`${searching ? 'uploaded' : ''}`}><FontAwesomeIcon icon={faGlobe} /></label>
                ) : null}
            </form>
        </div>
    );
}
