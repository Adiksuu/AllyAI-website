import React from "react";

export default function About() {
    return (
        <section id="about" className="about">
            <h2>About</h2>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="icon">🎨</div>
                    <h3>Customizable</h3>
                    <p>
                        Adjust tone, formality, and language style to your
                        preferences
                    </p>
                </div>
                <div className="feature-card">
                    <div className="icon">🤖</div>
                    <h3>Smart Learning</h3>
                    <p>
                        Adapts to your communication style and remembers your
                        preferences
                    </p>
                </div>
                <div className="feature-card">
                    <div className="icon">🔒</div>
                    <h3>Secure & Private</h3>
                    <p>Enterprise-grade security with end-to-end encryption</p>
                </div>
                <div className="feature-card">
                    <div className="icon">⚡</div>
                    <h3>Lightning Fast</h3>
                    <p>
                        Get instant responses powered by cutting-edge AI
                        technology
                    </p>
                </div>
            </div>
        </section>
    );
}
