import { auth, database } from "../api/database/connect"

function _handleDelete(id, setBack) {
    const model = 'ALLY-2'
    database.ref(`chats/${auth.currentUser.uid}/${model}/${id}/`).remove().then(() => {
        setBack(true)
    })
}

export { _handleDelete }