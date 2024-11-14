import { faComments, faGear, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function OtherButtons() {
    const buttons = [
        {
            text: "Models",
            icon: faLayerGroup,
            path: '/models'
        },
        {
            text: "Chats",
            icon: faComments,
            path: '/chats',
            disabled: true
        },
        {
            text: "Settings",
            icon: faGear,
            path: '/settings',
            disabled: true
        },
    ];

    function OtherButton({ button }) {
        return (
        <li><Link className={button?.disabled ? 'disabled' : ''} to={button.path}><FontAwesomeIcon icon={button.icon} /> {button.text}</Link></li>
        )
    }

    return <ul className="others">{buttons.map((button, index) => <OtherButton button={button} key={index} />)}</ul>;
}
