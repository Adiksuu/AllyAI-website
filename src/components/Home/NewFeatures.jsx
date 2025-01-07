import { faCodeBranch, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NewFeatures({ isPremium, experimental }) {
    const navigate = useNavigate()

    function Popup({ icon, title, description }) {
        return (
            <div className="new_version" onClick={() => navigate('/settings')} >
                <div className="left">
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
        <Popup
            icon={faCrown}
            title="Premium account available"
            description="Get access to additional features, unlimited prompts and more"
        />
    ) : !experimental ? (
        <Popup
            icon={faCodeBranch}
            title="Experimental features"
            description="Try out the latest features in the settings tab"
        />
    ) : null;
}
