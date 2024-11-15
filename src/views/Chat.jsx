import React, { useState } from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'
import ChatInput from '../components/Chat/ChatInput'

export default function Chat() {
    const [history, setHistory] = useState([])
    const [currentChat] = useState(window.location.search.replace('?', ''))

    return (
        <section className="chat">
            <Navbar />
            <Messages history={history} setHistory={setHistory} />
            <ChatInput currentChat={currentChat} history={history} />
        </section>
    )
}
