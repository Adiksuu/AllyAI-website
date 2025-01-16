import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { models } from '../../api/models/modelsList';
import { useNavigate } from 'react-router-dom';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function Model({ model, prompts, isPremium }) {
    const navigate = useNavigate()

    const handleNewChat = () => {
        navigate(`/chats`, { state: { model: model.name } });
    }

    function SettingsButton () {
        return (
            <button onClick={() => navigate('/settings', { state: { category: 'Experimental settings' } })} className="settings"><FontAwesomeIcon icon={faGear} /></button>
        )
    }

    return (
        <div className={`model${model?.disabled ? ' disabled' : ''}`}>
            <div className="leftside">
                <span>
                    <FontAwesomeIcon icon={model.icon} />
                </span>
            </div>
            <div className="rightside" onClick={() => handleNewChat()}>
                <h2>{model.name}</h2>
                <p>{model.description}</p>
                <span>{prompts[model.name.toUpperCase()]}/{!isPremium ? models.find(a => a.name === model.name).dailyLimit : 999} prompts</span>
            </div>
            {model?.experimental === true && <SettingsButton /> }
        </div>
    );
}
