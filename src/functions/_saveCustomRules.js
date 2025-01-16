import { auth, database } from "../api/database/connect"

const _saveCustomRules = (rules) => {
    database.ref(`users/${auth.currentUser.uid}/custom`).update({ rules: rules })
}

export { _saveCustomRules }