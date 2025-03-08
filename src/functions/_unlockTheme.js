import { auth, database } from "../api/database/connect";
import { themes } from "../api/other/themes";

const _unlockTheme = async (theme) => {
    if (theme === 'default') return;
    await database.ref(`users/${auth.currentUser.uid}/theme/`).update({ [theme]: true});
};

const _checkUnlockedTheme = async (theme) => {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/theme/`).once('value')

    if (!snapshot.val()) return false;
    return snapshot.val()[theme] || false;
}

const _unlockEventTheme = () => {
    const now = new Date().getTime()
    const eventTheme = themes.find(t => t.during && t.ends > now)
    
    if (!eventTheme) return;
    _unlockTheme(eventTheme.name)
}

export { _unlockTheme, _checkUnlockedTheme, _unlockEventTheme };
