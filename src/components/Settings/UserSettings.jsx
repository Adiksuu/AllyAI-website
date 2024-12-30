// import React, { useState } from 'react'
import { _userLogout } from '../../functions/_userLogout'
// import { _upgradeAccount } from '../../functions/_upgradeAccount'

export default function UserSettings() {
    // const [isPremium, setIsPremium] = useState(false)

  return (
    <div className="container">
        <h2>User settings</h2>
        {/* <div className="list">
            <span>Premium account</span>
            <p>Get access to additional features before the premiere by enabling access to the experimental features tab. Unlimited prompts and more</p>
            <div onClick={() => _upgradeAccount(isPremium, setIsPremium)} className={`checkbox checkbox-wide ${!isPremium && ' active'}`}>{isPremium ? 'Cancel subscription' : 'Upgrade Account'}</div>
        </div> */}
        <div className="list">
            <span>Logout</span>
            <p>Log out of your account to prevent unwanted authorization, you will not be automatically logged in the next time you visit the site</p>
            <button onClick={() => _userLogout()}>LOGOUT</button>
        </div>
    </div>
  )
}
