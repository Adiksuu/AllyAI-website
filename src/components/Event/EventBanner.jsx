import React from 'react'
import eventBanner from '../../assets/images/event-banner.png'
import { _unlockEventTheme } from '../../functions/_unlockTheme'

export default function EventBanner({ quests, eventTheme }) {
    const handleClaimTheme = () => {
        if (quests[0].completed >= quests[0].required && quests[1].completed >= quests[1].required && quests[2].completed >= quests[2].required) {
            _unlockEventTheme()
        }
    }

  return quests !== undefined ? (
    <div className="event-banner">
        <div className="leftside">
            <img src={eventBanner} alt="event-banner" loading="lazy"  />
        </div>
        <div className="rightside">
            <div className="info">
                <h1>Welcome to the Event Page</h1>
                <p>Complete the tasks below and claim <span style={{ color: `${eventTheme.color}` }}>{eventTheme.name}</span> theme for free!</p>
            </div>
            <div className="buttons">
                <button className={quests[0].completed >= quests[0].required && quests[1].completed >= quests[1].required && quests[2].completed >= quests[2].required ? "" : "locked"} onClick={() => handleClaimTheme()}>Claim</button>
            </div>
        </div>
    </div>
  ) :   <div className="event-banner">
            <div className="leftside">
                <img src={eventBanner} alt="event-banner" loading="lazy"  />
            </div>
            <div className="rightside">
                <div className="info">
                    <h1>Welcome to the Event Page</h1>
                    <p>There are no any event yet!</p>
                </div>
            </div>
        </div>
}
