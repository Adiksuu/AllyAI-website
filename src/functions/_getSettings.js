import { auth, database } from "../api/database/connect"

const _getSettings = async () => {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/settings/`).once('value')

    if (!snapshot.exists()) {
        const data = {
            temperature: 1.0,
            length: 8192,
            language: 'auto'
        }
        await database.ref(`users/${auth.currentUser.uid}/settings`).set(data)
        return data
    } else {
        const data = {
            temperature: snapshot.val().temperature || 1,
            length: snapshot.val().length || 8192,
            language: snapshot.val().language || 'auto'
        }
        return data
    }
}

const _setSettings = (temperature, length, setT, setL, language, setLang) => {
    if (temperature >= 0 && temperature <= 2 && length > 0 && length <= 8192) {
        database.ref(`users/${auth.currentUser.uid}/settings/`).update({ temperature, length, language })
    } else {
        const data = {
            temperature: 1.0,
            length: 8192,
            language: 'auto'
        }
        database.ref(`users/${auth.currentUser.uid}/settings`).set(data)
        setT('1')
        setL('8192')
        setLang('auto')
    }
}

export { _getSettings, _setSettings }