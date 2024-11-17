import { auth, database } from "../api/database/connect";

async function _getPrompts() {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}`).once('value');

    return snapshot.val().prompts;
}

function _setPrompts(prompts) {
    const date = new Date();
    database.ref(`users/${auth.currentUser.uid}`).once('value').then((snapshot) => {
        const updatedTime = date.getTime() + 24 * 60 * 60 * 1000;
        const alreadyTime = snapshot.val().resetAt || updatedTime
        
        database.ref(`users/${auth.currentUser.uid}`).update({ prompts: prompts, resetAt: alreadyTime })
    })

}

async function _resetPrompts() {
    const date = new Date();

    const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')

    if (date.getTime() > snapshot.val().resetAt) {
        const updatedTime = date.getTime() + 24 * 60 * 60 * 1000;
        database.ref(`users/${auth.currentUser.uid}`).update({ prompts: 0, resetAt: updatedTime })
    }

}

export { _getPrompts, _setPrompts, _resetPrompts }