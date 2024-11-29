import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'
import { models } from '../../api/models/modelsList'
import { _getPrompts } from '../../functions/_maxPrompts'

export default function HomeInput({ model }) {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [prompts, setPrompts] = useState(0)
    const navigate = useNavigate()

    const handleNewChat = async (e) => {
        e.preventDefault();
        if (message.trim() === '') return

        setLoading(true);
        const currentChat = `${models.find(a => a.name === model).symbole}${Math.floor(Math.random() * 999999999)}`

        await _sendMessage(model, message, setMessage, e, currentChat, [], setLoading, [])
        navigate(`/chat/${currentChat}`, { state: { loading: true } });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleNewChat(e);
        }
    }

    useEffect(() => {
        const loadPrompts = async () => {
            setPrompts(await _getPrompts())
        }
        loadPrompts()
    }, [navigate])

    return (
        <form className="input" onSubmit={(e) => handleNewChat(e)}>
            <input disabled={prompts >= 50 || loading} type="text" onKeyDown={handleKeyDown} placeholder={prompts >= 50 ? 'Prompts limit reached for today': loading ? 'Wait for response...' : 'Ask question'} value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
