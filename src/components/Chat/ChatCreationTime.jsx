export default function ChatCreationTime({ chat }) {
    const time = new Date(parseInt(chat.slice(1)));

    const formattedDate = time.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="creation-time">
            <div className="line"></div>
            <div className="text">Chat created on {formattedDate}</div>
            <div className="line"></div>
        </div>
    );
}
