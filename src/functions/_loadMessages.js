import { auth, database } from "../api/database/connect"

function _loadMessages(messages, path, history, setHistory) {
    const model = 'ALLY-2'
    const chat = database.ref(`chats/${auth.currentUser.uid}/${model}/${path}/`)
    chat.on('value', (snapshot) => {
        if (!snapshot.exists()) return

        const chatArray = []
        const historyArray = []
        snapshot.forEach((childSnapshot) => {
            const message = {
                text: childSnapshot.val().message,
                date: childSnapshot.val().time,
                author: childSnapshot.val().author
            }
            const history_data = {
                role: childSnapshot.val().author === 'user' ? 'user' : 'model',
                parts: [{ text: childSnapshot.val().message }]
            }

            chatArray.push(message)
            historyArray.push(history_data)
        })
        messages(chatArray)
        setHistory(historyArray)
    })

}

export { _loadMessages }