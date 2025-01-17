import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auth } from '../../api/database/connect'
import { _userLogout } from '../../functions/_userLogout'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

export default function UserSettings({ isPremium }) {
    function StripeButton() {
        return (
            <stripe-buy-button
                buy-button-id="buy_btn_1Qc57XP2S3Dculr8dq3ppuby"
                publishable-key="pk_live_51Qc4feP2S3Dculr8fK4R12r5FZeWzaH0xG52XVPQpJ9FAH3jaTsB73HFtJm34MqyNuzCE7TjAdKkfwn1yelhw21400xAygROAl"
                customer-email={auth.currentUser.email}
                success-url="https://ally-ai.lol/success?session_id={CHECKOUT_SESSION_ID}"
                cancel-url="https://ally-ai.lol/settings">
            </stripe-buy-button>
        )
    }

  return (
    <div className="container">
        <h2>User settings</h2>
        <div className="list">
            <span>Premium account</span>
            <p>Get access to additional features before the premiere by enabling access to the experimental features tab. Unlimited prompts and more</p>
            {!isPremium ? <StripeButton /> : <div className="checkbox checkbox-wide">PREMIUM ENABLED <FontAwesomeIcon icon={faCheckCircle} /></div> }
        </div>
        <div className="list">
            <span>Logout</span>
            <p>Log out of your account to prevent unwanted authorization, you will not be automatically logged in the next time you visit the site</p>
            <button onClick={() => _userLogout()}>LOGOUT</button>
        </div>
    </div>
  )
}
