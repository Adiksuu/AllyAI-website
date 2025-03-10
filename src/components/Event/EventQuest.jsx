import { event_quests } from '../../api/other/quests'

export default function EventQuest({ quests }) {
    function Quest({ quest, index }) {
        return (
            <div className="quest">
                <div className="info">
                    <p>{quest.text}</p>
                    <span>{quests[index].completed}/{quest.required}</span>
                </div>
                <div className="quest-stats">
                    <div className="progressbar">
                        <div className="progress" style={{ width: `${(quests[index].completed / quest.required) * 100}%` }}></div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className="event-quests">
        <div className="top">
            <h2>Event Quests</h2>
        </div>
        <div className="quests">
            {event_quests.map((quest, index) => {
                return <Quest key={index} quest={quest} index={index} />
            })}
        </div>
    </div>
  )
}
