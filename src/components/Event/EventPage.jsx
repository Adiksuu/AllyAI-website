import React, { useEffect, useState } from 'react'
import EventBanner from './EventBanner'
import EventQuest from './EventQuest'
import { event_quests } from '../../api/other/quests'
import { _loadQuests } from '../../functions/_loadQuests'
import { themes } from '../../api/other/themes'

export default function EventPage() {
    const [quests, setQuests] = useState(event_quests)

    const now = new Date().getTime()
    const eventTheme = themes.find(t => t.during && t.ends > now)

    useEffect(() => {
        _loadQuests(quests, setQuests)
    }, [])

  return eventTheme ? (
    <>
        <EventBanner quests={quests} />
        <EventQuest quests={quests} />
    </>
  ) : <EventBanner quests={undefined} />
}
