import React, { useEffect, useState } from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'
import ChatInput from '../components/Chat/ChatInput'
import { useLocation, useParams } from 'react-router-dom'

export default function Chat() {
    const location = useLocation();
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(location.state?.loading || false)
    const [model] = useState(location.state?.model)
    const { id } = useParams();

    useEffect(() => {
        if (model === 'Ally-Imagine' && history.length === 2) {
            setLoading(false)
        } else if (history.length === 4) setLoading(false)
    }, [history])

    return (
        <section className="chat">
            <Navbar id={id} />
            <Messages setHistory={setHistory} id={id} loading={loading} />
            <ChatInput currentChat={id} history={history} setLoading={setLoading} loading={loading} />
        </section>
    )
}
