import { auth, database } from "../api/database/connect";
import { isBlacklistMessage } from "../api/gemini/blacklist";
import { defaultHistory } from "../api/gemini/defaultHistory";

function _loadMessages(messages, path, setHistory) {
    const model = 'ALLY-2';
    const chat = database.ref(`chats/${auth.currentUser.uid}/${model}/${path}/`);

    return new Promise((resolve, reject) => {
        chat.on('value', (snapshot) => {
            if (!snapshot.exists()) {
                resolve('back');
                return;
            }

            const chatArray = [];
            const historyArray = [];

            snapshot.forEach((childSnapshot) => {
                const message = {
                    text: childSnapshot.val().message,
                    date: childSnapshot.val().time,
                    author: childSnapshot.val().author,
                    loading: childSnapshot.val().loading || false,
                    username: childSnapshot.val().username,
                    key: childSnapshot.key
                };
                if (!isBlacklistMessage(childSnapshot.val().message) && childSnapshot.val().message !== 'I cannot reply to this message at the moment') {
                    const history_data = {
                        role: childSnapshot.val().author === 'user' ? 'user' : 'model',
                        parts: [{ text: childSnapshot.val().message }]
                    };
                    historyArray.push(history_data);
                }

                chatArray.push(message);
            });

            // Dodanie defaultHistory na sam koniec
            historyArray.push(...defaultHistory);

            messages(chatArray);
            setHistory(historyArray);
            resolve('success');
        });
    });
}

export { _loadMessages };
