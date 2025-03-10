import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../../api/database/connect";
import { _userLogout } from "../../functions/_userLogout";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { themes } from "../../api/other/themes";
import { _setUserTheme } from "../../functions/_getUserTheme";
import { useEffect, useState } from "react";
import {
    _checkUnlockedTheme,
    _unlockEventTheme,
} from "../../functions/_unlockTheme";

export default function UserSettings({ isPremium }) {
    const [themesList, setThemesList] = useState([themes[0]]);

    useEffect(() => {
        const checkThemes = async () => {
            const unlockedThemes = await Promise.all(
                themes.map(async (theme) => {
                    if (themesList.find((t) => t.name === theme.name))
                        return null;

                    const unlocked = await _checkUnlockedTheme(theme.name);
                    return unlocked ? theme : null;
                })
            );

            setThemesList([
                themes[0],
                ...unlockedThemes.filter((theme) => theme !== null),
            ]);
        };

        checkThemes();
    }, []);

    function StripeButton() {
        return (
            <stripe-buy-button
                buy-button-id="buy_btn_1Qc57XP2S3Dculr8dq3ppuby"
                publishable-key="pk_live_51Qc4feP2S3Dculr8fK4R12r5FZeWzaH0xG52XVPQpJ9FAH3jaTsB73HFtJm34MqyNuzCE7TjAdKkfwn1yelhw21400xAygROAl"
                customer-email={auth.currentUser.email}
                success-url="https://ally-ai.lol/success?session_id={CHECKOUT_SESSION_ID}"
                cancel-url="https://ally-ai.lol/settings"
            ></stripe-buy-button>
        );
    }

    function Theme({ theme }) {
        return (
            <div
                onClick={() => _setUserTheme(theme.name)}
                className="theme"
                style={{ backgroundImage: `url(${theme.logo})` }}
            >
                <span className="theme-name" style={{ color: theme.color }}>
                    {theme.name}
                </span>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>User settings</h2>
            <div className="list">
                <span>Premium account</span>
                <p>
                    Get access to additional features before the premiere by
                    enabling access to the experimental features tab. Unlimited
                    prompts and more
                </p>
                {!isPremium ? (
                    <StripeButton />
                ) : (
                    <div className="checkbox checkbox-wide">
                        PREMIUM ENABLED <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                )}
            </div>
            {themesList.length > 0 && (
                <div className="list">
                    <span>Appearance</span>
                    <p>
                        Change the look of the entire site interface, including
                        the Ally logo
                    </p>
                    <div className="themes">
                        {themesList.map((theme, index) => (
                            <Theme key={index} theme={theme} />
                        ))}
                    </div>
                </div>
            )}
            <div className="list">
                <span>Logout</span>
                <p>
                    Log out of your account to prevent unwanted authorization,
                    you will not be automatically logged in the next time you
                    visit the site
                </p>
                <button onClick={() => _userLogout()}>LOGOUT</button>
            </div>
        </div>
    );
}
