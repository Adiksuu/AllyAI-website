import { faArrowRightArrowLeft, faCodeBranch, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewFeatures({ isPremium, experimental, theme }) {
    const navigate = useNavigate()
    const [popup, setPopup] = useState(0)

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
        ) : (
            <Popup
                icon={faArrowRightArrowLeft}
                title="New update!"
                description="Change site appearance in the settings tab"
            />
        )
    ) : !experimental ? (
        <Popup
            icon={faCodeBranch}
            title="Experimental features"
            description="Try out the latest features in the settings tab"
        />
    ) : <Popup
            icon={faArrowRightArrowLeft}
            title="New update!"
            description="Change site appearance in the settings tab"
        />;
}
