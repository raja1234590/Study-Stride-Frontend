import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1>Contact & FAQs</h1>
        <p>We’re here to guide you through your Exam preparation journey.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2><FaQuestionCircle className="icon" /> Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Who should use this platform?</h3>
            <p>This platform is designed for students currently in 12th grade preparing for Engineering and Medical competitive exams.</p>
          </div>
          <div className="faq-item">
            <h3>What is counselling form is all about?</h3>
            <p>It is for the students who are interested in getting guidance for their career path and college selection.</p>
          </div>
          <div className="faq-item">
            <h3>How do i get contacted if i submit the form?</h3>
            <p>Our team will reach out to you within 24 hours after you submit the form.</p>
          </div>
          <div className="faq-item">
            <h3>Can subject-related doubts be clarified?</h3>
            <p>No, subject-specific doubts are not covered. However, you will have access to our chatbot for assistance.  
            It  is <strong>purely guidance-focused</strong>, covering preparation strategies and <strong>College Selection</strong>.</p>
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
