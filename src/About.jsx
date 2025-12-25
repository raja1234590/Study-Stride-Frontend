import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  const offerings = [
    {
      title: "Previous Year Papers (PDFs)",
      desc: "Practice with real EAMCET exam questions from past years.",
      icon: "📘",
    },
    {
      title: "Recommended Books",
      desc: "Handpicked study resources & Amazon links for effective preparation.",
      icon: "📚",
    },
    
    {
      title: "Career Counselling",
      desc: "One-on-one guidance to choose the right path after EAMCET.",
      icon: "🎓",
    },
    {
      title: "Easy Payments",
      desc: "Secure and simple payment options for counselling & services.",
      icon: "💳",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>About Our EAMCET Platform</h1>
            <p>
              Welcome to <strong>StudyStride Solutions</strong>! We built this
              platform exclusively for <b>EAMCET aspirants</b> who are preparing
              for one of the most important entrance exams in Andhra Pradesh and
              Telangana.
            </p>
          </div>
          <div className="hero-image">
            <img src="/images/slider1.jpg" alt="Students Preparing" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple – to make your <b>EAMCET preparation
            smoother</b> by providing all the essential resources in one place,
            so you can focus only on your studies.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offers">
        <div className="offers-container">
          <h2>What We Offer</h2>
          <div className="offer-grid">
            {offerings.map((item, index) => (
              <div key={index} className="offer-card">
                <div className="offer-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="why-choose-container">
          <h2>Why Choose Us?</h2>
          <p className="choose-desc">
            We are not just another exam website – we’re students ourselves who
            know the challenges of EAMCET prep. That’s why we created a platform
            that’s practical, affordable, and student-friendly.
          </p>
        </div>
      </section>

      {/* Motto */}
      <section className="motto-section">
        <div className="motto-container">
          <h2>Our Motto</h2>
          <p>
            No student should feel lost while preparing for EAMCET. With the
            right guidance and resources, success is possible for everyone.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of successful students who achieved their dreams with
            our guidance.
          </p>
          <div className="cta-buttons">
            <Link to="/counselling" className="btn-primary">
              Book Counselling
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
