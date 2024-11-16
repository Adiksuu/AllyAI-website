import React, { useEffect, useState } from 'react'
import Message from './Message'
import { _loadMessages } from '../../functions/_loadMessages'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

export default function Messages({ setHistory, id, loading }) {
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

    function LoadingEffect() {
        return (
            <div className={'message wait'}>
                <div className="leftside">
                    <img src={logo} alt="logo of user" />
                </div>
            </div>
        )
    }

  return (
    <div className="messages">
        {messages.map((message, index) => <Message message={message} messagePath={id} key={index} />)}
        {loading ? <LoadingEffect /> : null}
    </div>
  )
}
