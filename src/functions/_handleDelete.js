import { auth, database } from "../api/database/connect"
import { models } from '../api/models/modelsList'

function _handleDelete(id, setBack) {
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase()
    database.ref(`chats/${auth.currentUser.uid}/${model}/${id}/`).remove().then(() => {
        setBack(true)
    })
}

function _deleteAllChats(setDeleted) {
    database.ref(`chats/${auth.currentUser.uid}`).remove().then(() => {
        setDeleted(true)
        setTimeout(() => {
            setDeleted(false)
        }, 1000)
    })
}

export { _handleDelete, _deleteAllChats }