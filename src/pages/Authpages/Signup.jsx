import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://study-stride-backend.vercel.app/api/auth/signup",
        { email, password }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.dispatchEvent(new Event("storage"));
      }

      toast.success(res.data.message || "Signup successful!");
      navigate("/", { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error while signing up");
    }
  };

  return (
    <div className="auth-wrapper">
      {/* background blobs */}
      <div className="blob blue"></div>
      <div className="blob orange"></div>

      <div className="auth-card">
        <h2 className="auth-title">Signup</h2>

        <form onSubmit={handleSignup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Signup
          </button>

          <p className="link-text">
            Forgot your password?{" "}
            <Link to="/forgot-password">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
