import { auth, database } from "../api/database/connect";
import { _getDateTime } from "./_getDateTIme";
import { _getGeminiResponse } from "./_getGeminiResponse";

function clearInput(setMessage) {
    setMessage('')
}

async function _sendMessage(message, setMessage, event, currentChat, history) {
    event.preventDefault();

    const model = 'ALLY-2'
    const path = `chats/${auth.currentUser.uid}/${model}/${currentChat}`

    const snapshot = await database.ref(path).once('value')
    const ID = snapshot.numChildren()

    const messageID = ID.toString().padStart(6, '0')

    const data = {
        message,
        author: 'user',
        time: _getDateTime()
    }

    clearInput(setMessage)

    database.ref(`${path}/message_${messageID}/`).set(data).then(async () => {
        const AIdata = {
            message: await _getGeminiResponse(message, history),
            author: 'ai',
            time: _getDateTime(),
            loading: true
        }
        database.ref(`${path}/message_${(ID + 1).toString().padStart(6, '0')}/`).set(AIdata)
    })
}

export { _sendMessage }