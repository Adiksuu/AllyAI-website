import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';

export default function FloatingChatsList({ searching, chatsList, setActivate }) {
    const navigate = useNavigate();

    const handleBlurred = () => {
        setActivate(false)
    }

    const openChat = (chat) => {
        handleBlurred()
        navigate(`/chat/${chat.path}`, { state: { loading: false, model: chat.model } })
    }

    function Chat({ chat }) {
        return (
            <div className="chat" onClick={() => openChat(chat)}>
                <p>{chat.firstMessage}</p>
            </div>
        );
    }

    return (
        <>
        <div onClick={() => handleBlurred()} className="blurred-bg"></div>
            <div className="floating_chats">
                <div className="top">
                    <p><FontAwesomeIcon icon={faSearch} /> {searching.trim()}</p>
                </div>
                <div className="list">
                    {chatsList
                        .filter(chat =>
                            chat.firstMessage.toLowerCase().includes(searching.trim().toLowerCase())
                        )
                        .map((chat, index) => <Chat chat={chat} key={index} />)}
                </div>
            </div>
        </>
    )
}
