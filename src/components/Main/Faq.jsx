import { faCode, faListCheck, faMoneyBill, faPlay, faRobot, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Faq() {
    const faqs = [
        {
            question: "What is AllyAI?",
            answer: "AllyAI is an intelligent AI chatbot designed to assist with everyday tasks and answer questions effectively.",
            icon: faRobot
        },
        {
            question: "What features does AllyAI offer?",
            answer: "AllyAI offers a wide range of features, including text generation, image analysis, translation, and more.",
            icon: faListCheck
        },
        {
            question: "Is AllyAI free to use?",
            answer: "Basic functionalities of AllyAI may be available for free, however, some advanced features may require a subscription.",
            icon: faMoneyBill
        },
        {
            question: "How can I start using AllyAI?",
            answer: "To get started, simply visit the ally-ai.lol website and begin interacting with the chatbot.",
            icon: faPlay
        },
        {
            question: "Is AllyAI safe to use?",
            answer: "Yes, AllyAI is safe to use. We prioritize user privacy and data security.",
            icon: faShieldHalved
        },
        {
            question: "Who created AllyAI?",
            answer: "AllyAI was created and trained by CodeAdiksuu, a polish entusiast in programming.",
            icon: faCode
        }
    ];

    function FaqItem({ faq}) {
        return (
            <div className="faq-item">
                <div className="icon"><FontAwesomeIcon icon={faq.icon} /></div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
            </div>
        )
    }

  return (
    <section className="faq" id='faq'>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
            {faqs.map((faq, index) => <FaqItem key={index} faq={faq} />)}
        </div>
    </section>
  )
}
