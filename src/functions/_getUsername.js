import { auth, database } from "../api/database/connect";

async function _getUsername(uid) {
    const snapshot = await database.ref(`users/${uid ? uid : auth.currentUser.uid}`).once('value');

    return snapshot.val().username;
}

export { _getUsername }