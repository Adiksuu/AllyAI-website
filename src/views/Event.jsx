import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { _getThemeByName, themes } from '../api/other/themes'
import { _getUserTheme } from '../functions/_getUserTheme'
import EventPage from '../components/Event/EventPage'

export default function Event() {
    const [theme, setTheme] = useState(themes[0])

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await _getUserTheme()
            setTheme(_getThemeByName(theme))
        }
        loadTheme()
    }, [])

  return (
    <>
        <Sidebar />
        <section className="event" style={{ '--theme-color': theme.color, '--theme-rgba': theme.border }}>
            <EventPage />
        </section>
    </>
  )
}
