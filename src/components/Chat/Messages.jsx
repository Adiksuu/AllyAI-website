import React, { useEffect, useState } from 'react'
import Message from './Message'
import { _loadMessages } from '../../functions/_loadMessages'

export default function Messages({ history, setHistory }) {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        _loadMessages(setMessages, window.location.search.replace('?', ''), history, setHistory)
    }, [])

  return (
    <div className="messages">
        {messages.map((message, index) => <Message message={message} key={index} />)}
    </div>
  )
}
