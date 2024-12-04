import { models } from "../api/models/modelsList";
import { _sendMessage } from "./_sendMessage";

const _regenerateAnswer = (message, history, setLoading, setHistory) => {
    setHistory(prevData => 
        prevData.filter(item => item.parts[0]?.text !== message.text)
    );
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase();
    _sendMessage(model, message.text, null, null, window.location.pathname.slice(6), history, setLoading, message.file || [], null, message.key)
}

export { _regenerateAnswer }