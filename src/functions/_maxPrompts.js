import { auth, database } from "../api/database/connect";

async function _getPrompts(model) {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/prompts`).once('value');
    if (!snapshot.exists()) return 0
    
    return snapshot.val()[model];
}

function _setPrompts(model, prompts) {
    database.ref(`users/${auth.currentUser.uid}/prompts`).update({ [model]: prompts + 1 })
}

async function _resetPrompts() {
    const date = new Date();
    const updatedTime = date.getTime() + 24 * 60 * 60 * 1000;

    const snapshot = await database.ref(`users/${auth.currentUser.uid}/prompts/`).once('value')

    if (!snapshot.exists()) {
        database.ref(`users/${auth.currentUser.uid}/prompts`).update({ 'ALLY-2': 0, 'ALLY-LIE': 0, 'ALLY-IMAGINE': 0, 'ALLY-CUSTOM': 0, resetAt: updatedTime })
        return
    }

    if (date.getTime() > snapshot.val().resetAt) {
        database.ref(`users/${auth.currentUser.uid}/prompts`).update({ 'ALLY-2': 0, 'ALLY-LIE': 0, 'ALLY-IMAGINE': 0, 'ALLY-CUSTOM': 0, resetAt: updatedTime })
    }

}

export { _getPrompts, _setPrompts, _resetPrompts }