import React, { useEffect, useState } from "react";
import Navbar from "../components/Chat/Navbar";
import Messages from "../components/Chat/Messages";
import ChatInput from "../components/Chat/ChatInput";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { _getSettings } from "../functions/_getSettings";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Chat() {
    const location = useLocation();
    const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(location.state?.loading || false);
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [experimental, setExperimental] = useState(false);

    useEffect(() => {
        navigate(`/chat/${id}`, { replace: true, state: null });
    }, [navigate, id]);

    useEffect(() => {
        if (history.length === 2) setLoading(false);

        const fetch = async () => {
            const data = await _getSettings();

            setExperimental(data.experimental);
        };

        fetch()
    }, [history]);

    return (
        <>
            <Sidebar />
            <section className="chat">
                <Navbar id={id} experimental={experimental} />
                <Messages
                    message={message}
                    setMessage={setMessage}
                    setHistory={setHistory}
                    id={id}
                    loading={loading}
                    history={history}
                    setLoading={setLoading}
                    experimental={experimental}
                />
                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    currentChat={id}
                    history={history}
                    setLoading={setLoading}
                    loading={loading}
                />
            </section>
        </>
    );
}
