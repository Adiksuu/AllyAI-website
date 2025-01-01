import { faCodeBranch, faCrown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NewFeatures({ isPremium, experimental }) {
    console.log(isPremium, experimental)

  return !isPremium ? (
    <div className="new_version">
        <div className="left"><FontAwesomeIcon icon={faCrown} /></div>
        <div className="right">
            <h3>Premium account available</h3>
            <p>Get access to additional features, unlimited prompts and more</p>
        </div>
    </div>
  ) : !experimental ? (
    <div className="new_version">
        <div className="left"><FontAwesomeIcon icon={faCodeBranch} /></div>
        <div className="right">
            <h3>New features available</h3>
            <p>Check out the latest features in the settings tab</p>
        </div>
    </div>
  ) : null
}
