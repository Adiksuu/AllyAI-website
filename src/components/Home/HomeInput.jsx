import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { _sendMessage } from '../../functions/_sendMessage'
import { useNavigate } from 'react-router-dom'

export default function HomeInput() {
    const [message, setMessage] = useState('')
    const [currentChat] = useState(Math.floor(Math.random() * 999999999))
    const navigate = useNavigate()

    const handleNewChat = async (e) => {
        await _sendMessage(message, setMessage, e, currentChat, [])
        navigate(`/chat/${currentChat}`)
    }

    return (
        <form className="input" onSubmit={(e) => handleNewChat(e)}>
            <input type="text" placeholder='Write your question here...' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}
