import { auth, database } from "../api/database/connect"

function _loadMessages(messages, path) {
    const model = 'ALLY-2'
    const chat = database.ref(`chats/${auth.currentUser.uid}/${model}/${path}/`)
    chat.on('value', (snapshot) => {
        if (!snapshot.exists()) return

        const chatArray = []
        snapshot.forEach((childSnapshot) => {
            const message = {
                text: childSnapshot.val().message,
                date: childSnapshot.val().time,
                author: childSnapshot.val().author
            }

            chatArray.push(message)
        })
        messages(chatArray)
    })

}

export { _loadMessages }