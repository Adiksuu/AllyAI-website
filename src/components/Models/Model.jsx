import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { models } from '../../api/models/modelsList';

export default function Model({ model, prompts }) {
    return (
        <div className={`model${model?.disabled ? ' disabled' : ''}`}>
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
