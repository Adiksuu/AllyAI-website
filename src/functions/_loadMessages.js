import { auth, database } from "../api/database/connect";
import { isBlacklistMessage } from "../api/gemini/blacklist";
import { invalidMessage } from "../api/models/invalidMessage";
import { models } from "../api/models/modelsList";

function _loadMessages(messages, path, setHistory) {
    const model = models.find(a => a.symbole === window.location.pathname.at(6)).name.toUpperCase()
    const chat = database.ref(`chats/${auth.currentUser.uid}/${model}/${path}/`);

    return new Promise((resolve, reject) => {
        chat.on('value', (snapshot) => {
            if (!snapshot.exists()) {
                resolve('back');
                return;
            }

            const chatArray = [];
            const historyArray = []
            
            snapshot.forEach((childSnapshot) => {
                const message = {
                    text: childSnapshot.val().message,
                    date: childSnapshot.val().time,
                    author: childSnapshot.val().author,
                    loading: childSnapshot.val().loading || false,
                    username: childSnapshot.val().username,
                    file: childSnapshot.val().file || null,
                    invalid: childSnapshot.val().invalid,
                    key: childSnapshot.key
                };
                if (!isBlacklistMessage(childSnapshot.val().message) && childSnapshot.val().message !== invalidMessage) {
                    const history_data = {
                        role: childSnapshot.val().author === 'user' ? 'user' : 'model',
                        parts: [{ text: childSnapshot.val().message }]
                    };
                    historyArray.push(history_data);
                }
                
                chatArray.push(message);
            });
            messages(chatArray);
            setHistory(historyArray);
            resolve('success');
        });
    });
}

export { _loadMessages };