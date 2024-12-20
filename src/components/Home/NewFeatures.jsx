import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NewFeatures() {
  return (
    <div className="new_version">
        <div className="left"><FontAwesomeIcon icon={faCodeBranch} /></div>
        <div className="right">
            <h3>New version available</h3>
            <p>Check out the latest features by enabling experimental features in the settings tab</p>
        </div>
    </div>
  )
}
