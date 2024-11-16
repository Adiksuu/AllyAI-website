import { auth, database } from "../api/database/connect";

async function _getUsername() {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}`).once('value');

    return snapshot.val().username;
}

export { _getUsername }