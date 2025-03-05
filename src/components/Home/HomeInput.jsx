import { faArrowUp, faDice, faFile, faGlobe, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'
import { models } from '../../api/models/modelsList'
import { _getPrompts } from '../../functions/_maxPrompts'
import { _generateRandom } from '../../functions/_generateRandom'
import { _checkUserAccount } from '../../functions/_upgradeAccount'

export default function HomeInput({ model }) {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [prompts, setPrompts] = useState(0)
    const textareaRef = useRef(null);
    const navigate = useNavigate()
    const [isPremium, setIsPremium] = useState(false);

    const [file, setFile] = useState([]);

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

    const handleNewChat = async (e) => {
        e.preventDefault();
        if (message.trim() === '') return

        setLoading(true);

        const date = Date.now()
        const currentChat = `${models.find(a => a.name === model).symbole}${date}`

        await _sendMessage(model, message, setMessage, e, currentChat, [], setLoading, file, setFile, undefined, ratio, searching)
        navigate(`/chat/${currentChat}`, { state: { loading: true } });
    }

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

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight - 20}px`;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleNewChat(e);
        }
    }

    const handleInput = (e) => {
        setMessage(e.target.value)
        adjustTextareaHeight()
    }

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts(model.toUpperCase()))
        }
        loadPrompts()
    }, [navigate])

    const maxModelPrompts = !isPremium ? models.find(a => a.name.toUpperCase() === model.toUpperCase()).dailyLimit : 999;

    return (
        <form className="input" onSubmit={(e) => handleNewChat(e)} onPaste={handlePaste}>
            <textarea ref={textareaRef} disabled={prompts >= maxModelPrompts || loading} type="text" onKeyDown={handleKeyDown} placeholder={prompts >= maxModelPrompts ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} value={message} onChange={(e) => handleInput(e)} />
            <div className="send_options">
                <div className="options">
                    <input id="upload" type="file" multiple accept="image/*" disabled={loading} onClick={() => file ? setFile([]) : null} onChange={handleFileUpload} />
                    {model.toUpperCase() === 'ALLY-2' ? (
                        <label onClick={() => setSearching(!searching)} className={`web ${searching ? 'uploaded' : ''}`}><FontAwesomeIcon icon={faGlobe} /> <span>Search</span></label>
                    ) : null}
                    {model.toUpperCase() === 'ALLY-IMAGINE' ? null : (
                        <>
                            <label className={file.length > 0 ? 'uploaded' : ''} htmlFor="upload">
                                {file.length > 0 ? <span>{file.length}</span> : null}
                                <FontAwesomeIcon icon={faFile} />
                            </label>
                            <label onClick={() => _generateRandom(setMessage)} ><FontAwesomeIcon icon={faDice} /></label>
                        </>
                    )}
                    {model.toUpperCase() === 'ALLY-IMAGINE' ? (
                        <label className="ratio" onClick={() => handleChangeRatio()}>{ratio}</label>
                    ) : null}

                </div>
                <button type='submit' disabled={message.trim().length === 0 || prompts >= maxModelPrompts || loading}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
        </form>
    )
}
