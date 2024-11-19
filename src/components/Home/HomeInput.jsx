import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'
import { models } from '../../api/models/modelsList'

export default function HomeInput({ model }) {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleNewChat = async (e) => {
        e.preventDefault();
        setLoading(true);
        const currentChat = `${models.find(a => a.name === model).symbole}${Math.floor(Math.random() * 999999999)}`

        await _sendMessage(model, message, setMessage, e, currentChat, [...models.find(a => a.name === model).defaultHistory], setLoading)
        navigate(`/chat/${currentChat}`, { state: { loading: true, model: model } });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleNewChat(e);
        }
    }

    return (
        <form className="input" onSubmit={(e) => handleNewChat(e)}>
            <input type="text" onKeyDown={handleKeyDown} placeholder='Write your question here...' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
