import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'
import { defaultHistory } from '../../api/gemini/defaultHistory'

export default function HomeInput() {
    const [message, setMessage] = useState('')
    const [currentChat] = useState(Math.floor(Math.random() * 999999999))
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleNewChat = async (e) => {
        await _sendMessage(message, setMessage, e, currentChat, [...defaultHistory], setLoading)
        navigate(`/chat/${currentChat}`)
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
