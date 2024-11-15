import React, { useState } from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'
import ChatInput from '../components/Chat/ChatInput'
import { useParams } from 'react-router-dom'

export default function Chat() {
    const [history, setHistory] = useState([])
    const { id } = useParams();

    return (
        <section className="chat">
            <Navbar />
            <Messages setHistory={setHistory} id={id} />
            <ChatInput currentChat={id} history={history} />
        </section>
    )
}
