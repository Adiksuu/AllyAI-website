import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import {
    faFaceAngry,
    faFaceFrown,
    faFaceKiss,
    faFaceMeh,
    faFaceSadTear,
    faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { _setUserOpinion } from "../../functions/_setUserOpinion";

export default function Opinion() {
    const opinions = [
        {
            text: "I love it!",
            emoji: faFaceKiss,
        },
        {
            text: "Pretty good",
            emoji: faFaceSmile,
        },
        {
            text: "It's okay",
            emoji: faFaceMeh,
        },
        {
            text: "Could be better",
            emoji: faFaceFrown,
        },
        {
            text: "Not great",
            emoji: faFaceSadTear,
        },
        {
            text: "Needs work",
            emoji: faFaceAngry,
        },
    ];

    const [uOpinion, setUOpinion] = useState("");

    function FeedbackButton({ opinion }) {
        return (
            <button onClick={() => {_setUserOpinion(opinion.text), setUOpinion(opinion.text)}}>
                <FontAwesomeIcon icon={opinion.emoji} /> {opinion.text}
            </button>
        );
    }

    return uOpinion === '' && (
        <div className="message">
            <div className="leftside">
                <img src={logo} alt="logo of user" />
            </div>
            <div className="rightside">
                <div className="info">
                    <h2>Ally</h2>
                    <span>17:40</span>
                </div>
                <p>Help us develop, give your own opinion about us</p>
                <div className="feedback">
                    <div className="feedback_buttons">
                        {opinions.map((fb, i) => (
                            <FeedbackButton opinion={fb} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
