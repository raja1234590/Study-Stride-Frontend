import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1>Contact & FAQs</h1>
        <p>We’re here to guide you through your EAMCET journey.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2><FaQuestionCircle className="icon" /> Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Who should take this mentorship?</h3>
            <p>This mentorship is designed for students currently in 12th grade preparing for EAMCET.</p>
          </div>
          <div className="faq-item">
            <h3>When should I enroll?</h3>
            <p>You can enroll at any time. The mentorship lasts for either <strong>2 months</strong> or <strong>1 month</strong> depending on your chosen plan, starting from the date of enrollment.</p>
          </div>
          <div className="faq-item">
            <h3>What is the refund policy?</h3>
            <p>Refunds are not applicable. Please enroll only if you are confident about joining the mentorship.</p>
          </div>
          <div className="faq-item">
            <h3>Can subject-related doubts be clarified?</h3>
            <p>No, subject-specific doubts are not covered. However, you will have access to our chatbot for assistance.  
            The mentorship is <strong>purely guidance-focused</strong>, covering preparation strategies and <strong>seat allotment (web options related doubts)</strong>.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          <FaWhatsapp className="icon" /> WhatsApp us:{" "}
          <a href="https://wa.me/6309718310" target="_blank" rel="noreferrer">
            6309718310
          </a>
        </p>
        <p>
          <FaEnvelope className="icon" /> Mail us:{" "}
          <a href="mailto:gnanaprakashkovuru007@gmail.com">
            venusvce77@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
