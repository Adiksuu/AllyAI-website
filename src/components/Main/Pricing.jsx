import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
    return (
        <section id="pricing" className="pricing">
            <h2>Pricing Plans</h2>
            <div className="pricing-cards">
                <div className="price-card popular">
                    <div className="popular-badge">Most Popular</div>
                    <div className="card-header">
                        <h3>Premium</h3>
                        <p className="price">
                            PLN 15<span>/forever</span>
                        </p>
                    </div>
                    <ul>
                        <li>All Free features</li>
                        <li>Unlimited prompts</li>
                        <li>Priority response time</li>
                        <li>Experimental features</li>
                    </ul>
                    <Link to={"/settings"} className="get-started">Try Premium</Link>
                </div>
            </div>
        </section>
    );
}
