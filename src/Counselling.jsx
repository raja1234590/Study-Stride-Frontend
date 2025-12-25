import React from "react";
import "./Counselling.css";
import { FaCheck, FaTimes, FaWhatsapp, FaMoneyBillWave } from "react-icons/fa";

function Counselling() {
  return (
    <div className="counselling-container">
      <h1 className="page-title">Complete EAMCET Guidance</h1>
      <p className="subtitle">
        Choose the right plan for your preparation journey and get expert support.
      </p>

      <div className="plans-grid">
        {/* Premium Plan */}
        <div className="plan-card premium">
          <div className="plan-header">
            <h2 className="plan-title">Premium Plan</h2>
            <p className="plan-price">₹1000 / 2 Months</p>
          </div>

          <ul className="plan-features">
            <li><FaCheck className="tick" /> 1:1 Phone Call Guidance</li>
            <li><FaCheck className="tick" /> Weekly Sessions</li>
            <li><FaCheck className="tick" /> Access to PYQs</li>
            <li><FaCheck className="tick" /> Seat Allotment Guidance</li>
            <li><FaCheck className="tick" /> Tips to Crack EAMCET (50+)</li>
          </ul>

          <div className="payment-info">
            <p><FaWhatsapp className="icon" /> WhatsApp: <b>6309718310</b></p>
            <p><FaMoneyBillWave className="icon" /> Pay via <b>PhonePe / GPay</b></p>
            <p>📸 Send screenshot to <b>6309718310</b></p>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="plan-card basic">
          <div className="plan-header">
            <h2 className="plan-title">Basic Plan</h2>
            <p className="plan-price">₹500 / 1 Month</p>
          </div>

          <ul className="plan-features">
            <li><FaTimes className="cross" /> 1:1 Phone Call Guidance</li>
            <li><FaTimes className="cross" /> Weekly Sessions</li>
            <li><FaCheck className="tick" /> Access to PYQs</li>
            <li><FaCheck className="tick" /> Seat Allotment Guidance</li>
            <li><FaCheck className="tick" /> Tips to Crack EAMCET (50+)</li>
          </ul>

          <div className="payment-info">
            <p><FaWhatsapp className="icon" /> WhatsApp: <b>6309718310</b></p>
            <p><FaMoneyBillWave className="icon" /> Pay via <b>PhonePe / GPay</b></p>
            <p>📸 Send screenshot to <b>6309718310</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counselling;
