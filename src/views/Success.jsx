import React, { useEffect, useState } from "react";
import { SECRET } from "../api/stripe/secret";
import { auth } from "../api/database/connect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { _upgradeAccount } from "../functions/_upgradeAccount";

export default function Success() {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("session_id");

        const verifyPayment = async () => {
            try {
                const response = await fetch(
                    `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${SECRET}`,
                        },
                    }
                );

                const sessionData = await response.json();

                if (sessionData.payment_status === "paid") {
                    setIsVerified(true);
                    _upgradeAccount()
                } else {
                    setIsVerified(false);
                }
            } catch (error) {
                console.error("Błąd weryfikacji płatności:", error);
            }
        };

        verifyPayment();
    }, []);

    return isVerified ? (
        <section className="success">
            <div className="success__container">
                <div className="success__icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h1>Payment was Successful!</h1>
                <p>Your payment has been successfully done.</p>
                <div className="success__details">
                    <div className="success__row">
                        <span>Total Payment</span>
                        <strong>PLN 15</strong>
                    </div>
                    <div className="success__row">
                        <span>Email</span>
                        <strong>{auth.currentUser.email}</strong>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className="success">
            <div className="success__container">
                <h1>Payment Failed!</h1>
                <p>Your payment has not been successfully done.</p>
            </div>
        </section>
    );
}
