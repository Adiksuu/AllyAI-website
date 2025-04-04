import { faArrowUpZA, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { _timeConverter } from "../../functions/_timeConverter";

export default function FloatingChatsList({
    searching,
    setSearching,
    chatsList,
    setActivate,
}) {
    const [sort, setSort] = useState("");

    const handleBlurred = () => {
        setActivate(false);
    };

    const openChat = (chat) => {
        handleBlurred();
        window.location = `/chat/${chat.path}`;
    };

    function Chat({ chat }) {
        const time = _timeConverter(chat.path.slice(1))

        return (
            <div className="chat" onClick={() => openChat(chat)}>
                <p>
                    {chat.firstMessage} <span>{time}</span>
                </p>
            </div>
        );
    }

    const filteredChats = chatsList
    .filter(
        (chat) =>
            chat.firstMessage
                .toLowerCase()
                .includes(searching.trim().toLowerCase()) &&
            chat.model.toLowerCase().includes(sort.trim().toLowerCase())
    )
    .sort((a, b) => {
        const pathA = parseInt(a.path.slice(1));
        const pathB = parseInt(b.path.slice(1));
        return pathA - pathB;
    });

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
