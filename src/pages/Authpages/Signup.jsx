import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        {
          email,
          password,
        }
      );

      
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);

       
        window.dispatchEvent(new Event("storage"));
      }

      toast.success(res.data.message || "Signup successful!");

      
      navigate("/", { replace: true });

    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error while signing up");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSignup} className="form">
        <h2 className="heading">Signup</h2>

        <input
          type="email"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />

        <button type="submit" className="button">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
