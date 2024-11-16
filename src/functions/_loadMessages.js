import { auth, database } from "../api/database/connect";
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
            const historyArray = [...defaultHistory];
            snapshot.forEach((childSnapshot) => {
                const message = {
                    text: childSnapshot.val().message,
                    date: childSnapshot.val().time,
                    author: childSnapshot.val().author,
                    loading: childSnapshot.val().loading || false,
                    username: childSnapshot.val().username,
                    key: childSnapshot.key
                };
                const history_data = {
                    role: childSnapshot.val().author === 'user' ? 'user' : 'model',
                    parts: [{ text: childSnapshot.val().message }]
                };

                chatArray.push(message);
                historyArray.push(history_data);
            });

            messages(chatArray);
            setHistory(historyArray);
            resolve('success');
        });
    });
}

export { _loadMessages };
