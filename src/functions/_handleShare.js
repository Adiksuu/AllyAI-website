import { auth, database } from "../api/database/connect"
import { models } from "../api/models/modelsList"

const _handleShare = (id) => {
    const modelSymbole = window.location.pathname.at(6)
    const model = models.find(a => a.symbole === modelSymbole).name.toUpperCase()

    if (!model) return

    navigator.clipboard.writeText(`${window.location.origin}/chat/${id}from${auth.currentUser.uid}`)
}

const _createSharedChat = (id) => {
    const modelSymbole = window.location.pathname.at(6)
    const model = models.find(a => a.symbole === modelSymbole).name.toUpperCase()

    return new Promise((resolve, reject) => {
        if (!model) resolve('error')

        const fromUID = id.split('from')
        const fromPath = `chats/${fromUID[1]}/${model}/${fromUID[0]}`
        const toPath = `chats/${auth.currentUser.uid}/${model}/${fromUID[0]}`

        database.ref(fromPath).on('value', snapshot => {
            const data = snapshot.val()
            if (!data) resolve('error')

            database.ref(toPath).set(data).then(() => {
                resolve('back')
            })
        })
    })
}

export { _handleShare, _createSharedChat }