import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { models } from '../../api/models/modelsList';
import { useNavigate } from 'react-router-dom';

export default function Model({ model, prompts }) {
    const navigate = useNavigate()

    const handleNewChat = () => {
        navigate(`/`, { state: { model: model.name } });
    }

    return (
        <div className={`model${model?.disabled ? ' disabled' : ''}`} onClick={() => handleNewChat()}>
            <div className="leftside">
                <span>
                    <FontAwesomeIcon icon={model.icon} />
                </span>
            </div>
            <div className="rightside">
                <h2>{model.name}</h2>
                <p>{model.description}</p>
                <span>{prompts[model.name.toUpperCase()]}/{models.find(a => a.name === model.name).dailyLimit} prompts</span>
            </div>
        </div>
    );
}
