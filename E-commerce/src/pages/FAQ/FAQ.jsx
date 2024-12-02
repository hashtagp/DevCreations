import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const faqs = [
        {
            category: "Product and Ordering",
            questions: [
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods including credit cards, UPI, and bank transfers."
                },
                {
                    question: "How long does shipping take?",
                    answer: "Shipping usually takes between 3-7 business days, depending on your location."
                },
                {
                    question: "What is your return policy?",
                    answer: "We accept returns within 15 days of purchase. Items must be in their original condition."
                },
                {
                    question: "Can I change my order after it has been placed?",
                    answer: "Unfortunately, we cannot modify orders once they have been placed. However, you can cancel your order and place a new one."
                },
                {
                    question: "Can I track my order?",
                    answer: "Yes, you can track your order using the tracking number provided in your shipping confirmation email."
                },
            ]
        },
        {
            category: "Account and Login",
            questions: [
                {
                    question: "How do I reset my password?",
                    answer: "It's usually located near the login button or in the form itself. You'll be asked to enter the email address associated with your account. Once your identity is verified, you'll be prompted to create a new password."
                },
                {
                    question: "Why can't I log in?",
                    answer: "Check for typos in the email address or password, ensure correct capitalization, or try resetting the password."
                },
                {
                    question: "What are the benefits of creating an account?",
                    answer: "Creating an account allows faster checkout, order tracking, saved addresses, and personalized recommendations."
                },
                {
                    question: "What are your business hours?",
                    answer: "Our customer service team is available 24 hours."
                },
                {
                    question: "How can I contact customer support?",
                    answer: "You can contact our customer support via email at devcreationsblr@gmail.com"
                },
            ]
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq">
            <header>
                <h1>Frequently Asked Questions</h1>
            </header>
            {faqs.map((section, secIndex) => (
                <div key={secIndex} className="faq-container">
                    <h2>{section.category}</h2>
                    {section.questions.map((faq, index) => {
                        const overallIndex = `${secIndex}-${index}`;
                        return (
                            <div key={overallIndex}>
                                <button
                                    className={`collapsible ${activeIndex === overallIndex ? "active" : ""}`}
                                    onClick={() => toggleFAQ(overallIndex)}
                                >
                                    {faq.question}
                                </button>
                                <div
                                    className="faq-content"
                                    style={{ display: activeIndex === overallIndex ? "block" : "none" }}
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
