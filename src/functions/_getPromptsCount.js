import { auth, database } from "../api/database/connect";

async function _getPromptsCount() {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/prompts/`).once('value');
    const data = snapshot.val();

    if (!data) {
        return {
            'ALLY-2': 0,
            'ALLY-LIE': 0,
            'ALLY-IMAGINE': 0,
        };
    }

    const prompts = {
        'ALLY-2': data['ALLY-2'] || 0,
        'ALLY-LIE': data['ALLY-LIE'] || 0,
        'ALLY-IMAGINE': data['ALLY-IMAGINE'] || 0,
    };

    return prompts;
}


export { _getPromptsCount }