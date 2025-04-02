import { auth, database } from "../api/database/connect";
import { isBlacklistMessage } from "../api/gemini/blacklist";
import { invalidMessage } from "../api/models/invalidMessage";
import { _getDateTime } from "./_getDateTIme";
import { _getGeminiResponse } from "./_getGeminiResponse";
import { _getImagineResponse } from "./_getImagineResponse";
import { _getUsername } from "./_getUsername";
import { _getPrompts, _setPrompts } from "./_maxPrompts";

function clearInput(setMessage, setFile) {
    setMessage('')
    setFile([])
}

async function _sendMessage(model, message, setMessage, event, currentChat, history, setLoading, file, setFile, key, ratio = "1:1", isSearching) {
    if (event) event.preventDefault();

    if (message.trim() === '') return
    
    if (setMessage && setFile) clearInput(setMessage, setFile)
    if (setLoading) setLoading(true)
    
    const path = `chats/${auth.currentUser.uid}/${model.toUpperCase()}/${currentChat}`

    const snapshot = await database.ref(path).once('value')
    const ID = snapshot.numChildren()

    const messageID = ID.toString().padStart(6, '0')

    _setPrompts(model.toUpperCase(), await _getPrompts(model.toUpperCase()))
    if (!key) {
        const data = {
            message,
            author: 'user',
            time: _getDateTime(),
            username: await _getUsername(),
            file: file.length > 0 ? file.map(f => URL.createObjectURL(f)) : null,
            invalid: false
        }
        
        const ifImagineModel = model.toUpperCase() === 'ALLY-IMAGINE'
    
        database.ref(`${path}/message_${messageID}/`).set(data).then(async () => {
    
            const AIdata = {
                message: isBlacklistMessage(message) ? invalidMessage : ifImagineModel ? await _getImagineResponse(message, ratio) : await _getGeminiResponse(message, history, file, model.toUpperCase(), isSearching),
                username: 'Ally',
                author: 'ai',
                time: _getDateTime(),
                loading: true,
                invalid: isBlacklistMessage(message)
            }
    
            database.ref(`${path}/message_${(ID + 1).toString().padStart(6, '0')}/`).set(AIdata).then(() => {
                if (setLoading) setLoading(false)
            })
        })
    } else {
        const previousID = parseInt(key.replace('message_', '') - 1).toString().padStart(6, '0')

        const ifImagineModel = model.toUpperCase() === 'ALLY-IMAGINE'

        database.ref(`${path}/message_${previousID}/`).once('value').then(async (snapshot) => {
            const previousMessageText = snapshot.val().message

            const AIdata = {
                message: isBlacklistMessage(previousMessageText) ? invalidMessage : ifImagineModel ? await _getImagineResponse(previousMessageText, ratio) : await _getGeminiResponse(previousMessageText, history, file, model.toUpperCase()),
                username: 'Ally',
                author: 'ai',
                time: _getDateTime(),
                loading: true,
                invalid: isBlacklistMessage(previousMessageText)
            }

            database.ref(`${path}/${key}/`).update(AIdata).then(() => {
                if (setLoading) setLoading(false)
            })
        })
    }

}

export { _sendMessage }