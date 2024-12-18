import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'
import { models } from '../../api/models/modelsList'
import { _getPrompts } from '../../functions/_maxPrompts'

export default function HomeInput({ model }) {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [prompts, setPrompts] = useState(0)
    const textareaRef = useRef(null);
    const navigate = useNavigate()

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
            setPrompts(await _getPrompts())
        }
        loadPrompts()
    }, [navigate])

    return (
        <form className="input" onSubmit={(e) => handleNewChat(e)}>
            <textarea ref={textareaRef} disabled={prompts >= 50 || loading} type="text" onKeyDown={handleKeyDown} placeholder={prompts >= 50 ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} value={message} onChange={(e) => handleInput(e)} />
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
