import { auth, database } from "../api/database/connect"

const _loadQuests = async (quests, setQuests) => {
    const snapshot = await database.ref(`users/${auth.currentUser.uid}/`).once('value')

    const data = snapshot.val()
    console.log(data.prompts['ALLY-2'])

    const feedback = data.opinion ? 1 : 0
    const prompts = data.prompts['ALLY-2']
    const photos = data.prompts['ALLY-IMAGINE']

    const newQuests = quests.map((quest, index) => {
        switch (index) {
            case 0:
                return { ...quest, completed: feedback }
            case 1:
                return { ...quest, completed: prompts }
            case 2:
                return { ...quest, completed: photos }
            default:
                return quest
        }
    })

    setQuests(newQuests)
}

export { _loadQuests }