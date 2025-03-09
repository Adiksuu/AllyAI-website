import { faCalendarDay, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { themes } from "../../api/other/themes";

export default function NewFeatures({ isPremium, theme }) {
    const navigate = useNavigate()
    const [popup, setPopup] = useState(0)
    const now = new Date().getTime()
    const eventTheme = themes.find(t => t.during && t.ends > now)

    useEffect(() => {
        const interval = setInterval(() => {
            setPopup(prevValue => prevValue === 1 ? 0 : 1)
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    function Popup({ icon, title, description }) {
        return (
            <div className="new_version" onClick={() => navigate('/settings')} >
                <div className="left" style={{ backgroundColor: theme.color }}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="right">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

    return !isPremium ? (
        popup === 0 ? (
            <Popup
                icon={faCrown}
                title="Premium account available"
                description="Get access to additional features, unlimited prompts and more"
            />
        ) : eventTheme ? (
            <Popup
                icon={faCalendarDay}
                title={eventTheme.description[0]}
                description={eventTheme.description[1]}
            />
        ) : null
    ) : eventTheme ? (
        <Popup
            icon={faCalendarDay}
            title={eventTheme.description[0]}
            description={eventTheme.description[1]}
        />
    ) : null
}
