import React, { useState } from "react";
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

export default function Opinion({ rating, setDisplayFeedback }) {
    const [feedbackText, setFeedbackText] = useState("");
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

    const [uOpinion, setUOpinion] = useState(rating === 'like' ? opinions[0].text : opinions[3].text);

    function FeedbackButton({ opinion }) {
        return (
            <button className={opinion.text === uOpinion ? 'selected' : ''} onClick={() => {setUOpinion(opinion.text)}}>
                <FontAwesomeIcon icon={opinion.emoji} /> {opinion.text}
            </button>
        );
    }

    return (
        <div className="message">
            <div className="leftside">
                <img src={logo} alt="logo of user" loading="lazy"  />
            </div>
            <div className="rightside">
                <div className="top">
                    <p>Help us develop, give your own opinion about us</p>
                    <div className="feedback">
                        <div className="feedback_buttons">
                            {opinions.map((fb, i) => (
                                <FeedbackButton opinion={fb} key={i} />
                            ))}
                        </div>
                        <div className="feedback_area">
                            <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} maxLength={300} type="text" placeholder="What should we change..."></textarea>
                        </div>
                        <div className="feedback_confirm">
                            <button className="cancel" onClick={() => setDisplayFeedback(false)}>CANCEL</button>
                            <button onClick={() => {_setUserOpinion(`Selected: ${uOpinion}, Feedback: ${feedbackText}`); setDisplayFeedback(false)}}>SEND FEEDBACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
