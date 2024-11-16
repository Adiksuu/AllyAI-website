import React, { useState } from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'
import ChatInput from '../components/Chat/ChatInput'
import { useParams } from 'react-router-dom'

export default function Chat() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams();

    return (
        <section className="chat">
            <Navbar />
            <Messages setHistory={setHistory} id={id} loading={loading} />
            <ChatInput currentChat={id} history={history} setLoading={setLoading} loading={loading} />
        </section>
    )
}
