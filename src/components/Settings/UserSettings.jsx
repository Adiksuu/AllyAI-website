import React from 'react'
import { _userLogout } from '../../functions/_userLogout'

export default function UserSettings() {
  return (
    <div className="container">
        <h2>User settings</h2>
        <div className="list">
            <span>Logout</span>
            <p>Log out of your account to prevent unwanted authorization.</p>
            <button onClick={() => _userLogout()}>LOGOUT</button>
        </div>
    </div>
  )
}
