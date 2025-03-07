import { auth, database } from "../api/database/connect";

const _getUserTheme = async () => {
    return await database
        .ref(`users/${auth.currentUser.uid}/theme/`)
        .once("value")
        .then((snapshot) => {
            if (!snapshot.val()) return "default"
            const theme = snapshot.val().theme;
            return theme || "default";
        });
};
const _setUserTheme = async (theme) => {
    await database.ref(`users/${auth.currentUser.uid}/theme/`).set({ theme });
    window.location.reload();
}

export { _getUserTheme, _setUserTheme };
