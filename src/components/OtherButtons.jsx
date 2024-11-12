import { faGear, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function OtherButtons() {
    const buttons = [
        {
            text: "Models",
            icon: faLayerGroup,
            path: '/models'
        },
        {
            text: "Settings",
            icon: faGear,
            path: '/settings'
        },
    ];

    function OtherButton({ button }) {
        return (
            <li><a href={button.path}><FontAwesomeIcon icon={button.icon} /> {button.text}</a></li>
        )
    }

    return <ul className="others">{buttons.map((button, index) => <OtherButton button={button} key={index} />)}</ul>;
}
