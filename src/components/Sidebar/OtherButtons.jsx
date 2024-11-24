import { faComments, faGear, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function OtherButtons({ setActivate }) {
    const buttons = [
        {
            text: "Models",
            icon: faLayerGroup,
            path: '/models'
        },
        {
            text: "Settings",
            icon: faGear,
            path: '/settings',
            disabled: true
        },
        {
            text: "Chats",
            icon: faComments,
            path: '/chats',
        },
    ];

    function OtherButton({ button }) {
        return button.text !== 'Chats' ? (
            <li><Link className={button?.disabled ? 'disabled' : ''} to={button.path}><FontAwesomeIcon icon={button.icon} /> <p>{button.text}</p></Link></li>
        ) : <li className=""><a onClick={() => setActivate(true)}><FontAwesomeIcon icon={button.icon} /> <p>{button.text}</p></a></li>
    }

    return <ul className="others">{buttons.map((button, index) => <OtherButton button={button} key={index} />)}</ul>;
}
