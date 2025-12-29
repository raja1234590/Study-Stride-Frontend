import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://study-stride-backend.vercel.app/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("storage"));

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
      {/* background blobs */}
      <div className="blob blue"></div>
      <div className="blob orange"></div>

      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        {/* ✅ Signup link added */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="/signup">Signup here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
