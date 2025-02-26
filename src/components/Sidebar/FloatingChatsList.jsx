import { faArrowUpZA, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FloatingChatsList({
    searching,
    setSearching,
    chatsList,
    setActivate,
}) {
    const navigate = useNavigate();
    const [sort, setSort] = useState("");

    const handleBlurred = () => {
        setActivate(false);
    };

    const openChat = (chat) => {
        handleBlurred();
        navigate(`/chat/${chat.path}`, {
            state: { loading: false, model: chat.model },
        });
    };

    function Chat({ chat }) {
        return (
            <div className="chat" onClick={() => openChat(chat)}>
                <p>
                    {chat.firstMessage} <span>{chat.model}</span>
                </p>
            </div>
        );
    }

    const filteredChats = chatsList.filter(
        (chat) =>
            chat.firstMessage
                .toLowerCase()
                .includes(searching.trim().toLowerCase()) &&
            chat.model.toLowerCase().includes(sort.trim().toLowerCase())
    );

    return (
        <>
            <div onClick={() => handleBlurred()} className="blurred-bg"></div>
            <div className="floating_chats">
                <div className="top">
                    <div className="leftside">
                        <span>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input
                            type="text"
                            value={searching}
                            placeholder="Search for chats..."
                            onChange={(e) => setSearching(e.target.value)}
                        />
                    </div>
                    <div className="rightside">
                        <span>
                            <FontAwesomeIcon icon={faArrowUpZA} />
                        </span>
                        <input
                            type="text"
                            value={sort}
                            placeholder="Filter by model"
                            onChange={(e) => setSort(e.target.value)}
                        />
                    </div>
                </div>
                {filteredChats.length > 0 ? (
                    <div className="list">
                        {filteredChats.reverse().map((chat, index) => (
                            <Chat chat={chat} key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="bottom">
                        <div className="text">
                            <p>Oops, we couldn't find what you're looking for now</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
