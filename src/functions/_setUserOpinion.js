import { auth, database } from "../api/database/connect"

const _setUserOpinion = (opinion) => {
    database.ref(`users/${auth.currentUser.uid}/`).update({ opinion: opinion })
}

export { _setUserOpinion }