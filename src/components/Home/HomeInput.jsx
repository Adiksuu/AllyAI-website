import { faArrowUp, faDice, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
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
        const currentChat = `${models.find(a => a.name === model).symbole}${Math.floor(Math.random() * 999999999)}`

        await _sendMessage(model, message, setMessage, e, currentChat, [], setLoading, [])
        navigate(`/chat/${currentChat}`, { state: { loading: true } });
    }

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
        <form className="input" onSubmit={(e) => handleNewChat(e)}>
            <textarea ref={textareaRef} disabled={prompts >= maxModelPrompts || loading} type="text" onKeyDown={handleKeyDown} placeholder={prompts >= maxModelPrompts ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} value={message} onChange={(e) => handleInput(e)} />
            <div className="send_options">
                <label onClick={() => _generateRandom(setMessage)} ><FontAwesomeIcon icon={faDice} /></label>
                <button type='submit' disabled={message.trim().length === 0 || prompts >= maxModelPrompts || loading}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
        </form>
    )
}
