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

  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (resume) data.append("resume", resume);

    try {
      await axios.post(
        "http://localhost:5000/api/counselling",
        data
      );
      alert("Counselling request submitted successfully!");
    } catch (err) {
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
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="degree" placeholder="Degree (e.g. B.Tech, Intermediate)" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Gmail" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />

        <select name="exam" onChange={handleChange} required>
          <option value="">Select Competitive Exam</option>
          <option value="JEE">JEE</option>
          <option value="EAMCET">EAMCET</option>
          <option value="COMEDK">COMEDK</option>
          <option value="MHTCET">MHTCET</option>
          <option value="BIPC / Medical">BIPC / Medical</option>
          <option value="Other">Other(B.Tech)</option>
        </select>

        <select name="day" onChange={handleChange} required>
          <option value="">Select Day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>

        <select name="time" onChange={handleChange} required>
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
          onChange={handleChange}
        />

        <label>Upload Resume (Optional)</label>
        <input type="file" onChange={(e) => setResume(e.target.files[0])} />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Counselling;
