import { auth, database } from "../api/database/connect"

const _getSettings = async () => {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/settings/`).once('value')

    if (!snapshot.exists()) {
        const data = {
            temperature: 1.0,
            length: 8192,
            language: 'auto',
            rules: '',
            experimental: false,
            tone: 'neutral'
        }
        await database.ref(`users/${auth.currentUser.uid}/settings`).set(data)
        return data
    } else {
        const data = {
            temperature: snapshot.val().temperature || 1,
            length: snapshot.val().length || 8192,
            language: snapshot.val().language || 'auto',
            rules: snapshot.val().rules || '',
            experimental: snapshot.val().experimental || false,
            tone: snapshot.val().tone || 'neutral'
        }
        return data
    }
}

const _setSettings = (temperature, length, setT, setL, language, setLang, rules, setRules, tone, setTone) => {
    if (temperature >= 0 && temperature <= 2 && length > 0 && length <= 8192 && rules.length <= 300) {
        database.ref(`users/${auth.currentUser.uid}/settings/`).update({ temperature, length, language, rules, tone })
    } else {
        const data = {
            temperature: 1.0,
            length: 8192,
            language: 'auto',
            rules: '',
            tone: 'neutral'
        }
        database.ref(`users/${auth.currentUser.uid}/settings`).set(data)
        setT('1')
        setL('8192')
        setLang('auto')
        setRules('')
        setTone('neutral')
    }
}

export { _getSettings, _setSettings }