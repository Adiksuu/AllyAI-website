import { auth, database } from "../api/database/connect"

const _upgradeAccount = () => {
    database.ref(`users/${auth.currentUser.uid}`).update({ premium: true })
}

const _checkUserAccount = async () => {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')
    const isPremium = snapshot.val().premium || false

    return isPremium
}

export { _upgradeAccount, _checkUserAccount }