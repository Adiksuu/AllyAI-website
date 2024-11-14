import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Model({ model }) {
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
            </div>
        </div>
    );
}
