import { auth, database } from "../api/database/connect";
import { isBlacklistMessage } from "../api/gemini/blacklist";
import { _getDateTime } from "./_getDateTIme";
import { _getGeminiResponse } from "./_getGeminiResponse";
import { _getUsername } from "./_getUsername";
import { _getPrompts, _setPrompts } from "./_maxPrompts";

function clearInput(setMessage, setFile) {
    setMessage('')
    setFile(null)
}

async function _sendMessage(model, message, setMessage, event, currentChat, history, setLoading, file, setFile) {
    if (event) event.preventDefault();

    if (message.trim().length === 0 || await _getPrompts() >= 50) return
    
    if (setMessage && setFile) clearInput(setMessage, setFile)
    setLoading(true)
    
    const path = `chats/${auth.currentUser.uid}/${model.toUpperCase()}/${currentChat}`

    const snapshot = await database.ref(path).once('value')
    const ID = snapshot.numChildren()

    const messageID = ID.toString().padStart(6, '0')

    const data = {
        message,
        author: 'user',
        time: _getDateTime(),
        username: await _getUsername()
    }

    database.ref(`${path}/message_${messageID}/`).set(data).then(async () => {
        _setPrompts(await _getPrompts() + 1)

        const AIdata = {
            message: isBlacklistMessage(message) ? 'I cannot reply to this message at the moment' : await _getGeminiResponse(message, history, file),
            username: 'Ally',
            author: 'ai',
            time: _getDateTime(),
            loading: true
        }

        database.ref(`${path}/message_${(ID + 1).toString().padStart(6, '0')}/`).set(AIdata).then(() => {
            setLoading(false)
        })
    })
}

export { _sendMessage }