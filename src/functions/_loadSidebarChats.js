import { auth, database } from "../api/database/connect";
import { models } from "../api/models/modelsList";

function _loadSidebarChats(chatsList, setChatsList) {
    const fetchChats = async () => {
        const newChatsList = [];

        for (const model of models) {
            const modelName = model.name;
            const snapshot = await database
                .ref(`chats/${auth.currentUser.uid}/${modelName.toUpperCase()}`)
                .once('value');

            if (!snapshot.exists()) continue;

            snapshot.forEach(childSnapshot => {
                const key = childSnapshot.key;
                const path = `chats/${auth.currentUser.uid}/${modelName.toUpperCase()}/${key}/`;

                database
                    .ref(`${path}/message_000000`)
                    .once('value')
                    .then(chat => {
                        const data = chat.val();

                        const chatObject = {
                            path: key,
                            model: modelName,
                            firstMessage:
                                data.message.trim().length >= 25
                                    ? `${data.message.trim().slice(0, 25)}...`
                                    : `${data.message.trim()}`,
                        };

                        newChatsList.push(chatObject);
                        setChatsList([...newChatsList]);
                    });
            });
        }
    };

    fetchChats();
}

export { _loadSidebarChats }