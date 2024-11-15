import React, { useEffect, useState } from 'react'
import Message from './Message'
import { _loadMessages } from '../../functions/_loadMessages'
import { useNavigate } from 'react-router-dom'

export default function Messages({ setHistory, id }) {
    const [messages, setMessages] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        const loadChat = async () => {
            const result = await _loadMessages(setMessages, id, setHistory)
            if (result === 'back') {
                navigate('/')
            }
        }
        loadChat()
    }, [id, navigate])

  return (
    <div className="messages">
        {messages.map((message, index) => <Message message={message} messagePath={id} key={index} />)}
    </div>
  )
}
