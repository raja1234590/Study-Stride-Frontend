import React, { useState } from "react";
import axios from "axios";
import "./Counselling.css";

function Counselling() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    degree: "",
    email: "",
    phone: "",
    exam: "",
    day: "",
    time: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://study-stride-backend.vercel.app/api/counselling",
        formData, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Counselling request submitted successfully!");

      // ✅ Clear form
      setFormData({
        firstName: "",
        lastName: "",
        degree: "",
        email: "",
        phone: "",
        exam: "",
        day: "",
        time: "",
        comments: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="counselling-container">
      <h1 className="page-title">Counselling Request Form</h1>
      <p className="subtitle">
        Education-based platform for competitive exams
      </p>

      <form className="counselling-form" onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <input
          name="degree"
          placeholder="Degree (e.g. B.Tech, Intermediate)"
          value={formData.degree}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Gmail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="exam"
          value={formData.exam}
          onChange={handleChange}
          required
        >
          <option value="">Select Competitive Exam</option>
          <option value="JEE">JEE</option>
          <option value="EAMCET">EAMCET</option>
          <option value="COMEDK">COMEDK</option>
          <option value="MHTCET">MHTCET</option>
          <option value="BIPC / Medical">BIPC / Medical</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          required
        >
          <option value="">Select Day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          <option>5:30 PM</option>
          <option>6:00 PM</option>
          <option>6:30 PM</option>
          <option>7:00 PM</option>
          <option>7:30 PM</option>
          <option>8:00 PM</option>
          <option>8:30 PM</option>
        </select>

        <textarea
          name="comments"
          placeholder="Additional Comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
        />

        {/* ❌ Resume removed (Vercel limitation) */}

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Counselling;
