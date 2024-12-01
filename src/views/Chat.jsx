import React, { useEffect, useState } from 'react'
import Navbar from '../components/Chat/Navbar'
import Messages from '../components/Chat/Messages'
import ChatInput from '../components/Chat/ChatInput'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

export default function Chat() {
    const location = useLocation();
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(location.state?.loading || false);
    const { id } = useParams();

    useEffect(() => {
        navigate(`/chat/${id}`, { replace: true, state: null });
    }, [navigate, id]);

    useEffect(() => {
        if (history.length === 2) setLoading(false)
    })

    return (
        <section className="chat">
            <Navbar id={id} />
            <Messages setHistory={setHistory} id={id} loading={loading} history={history} setLoading={setLoading} />
            <ChatInput currentChat={id} history={history} setLoading={setLoading} loading={loading} />
        </section>
    );
}
