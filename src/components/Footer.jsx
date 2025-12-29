import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div>
          <h3>About Us</h3>
          <p>
            We provide Exam preparation resources, previous year papers, preparation books,
            and career guidance to help students succeed in their exams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/college-predictor">College Predictor</a></li>
            <li><a href="/counseling">Career Counseling</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact</h3>
          <p>venusvce77@gmail.com</p>
          <p>+91 6309718310</p>

          {/* Social Links */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fb
            </a>
            <a
              href="https://www.instagram.com/learnwithvenu?igsh=Y2pmaTR0dmxyNXRu"
              target="_blank"
              rel="noopener noreferrer"
            >
              In
            </a>
            <a
              href="https://www.youtube.com/@StudyStudio22015"
              target="_blank"
              rel="noopener noreferrer"
            >
              YT
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bottom-bar">
        © {new Date().getFullYear()} Study Stride Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}
