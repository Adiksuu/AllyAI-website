import { auth, database } from "../api/database/connect";
import { _getDateTime } from "./_getDateTIme";

function clearInput(setMessage) {
    setMessage('')
}

async function _sendMessage(message, setMessage, event, currentChat) {
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

    database.ref(`${path}/message_${messageID}/`).set(data)
}

export { _sendMessage }