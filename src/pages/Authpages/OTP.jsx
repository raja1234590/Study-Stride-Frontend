import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;

  if (!email) {
    return <p>Invalid request</p>;
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Enter valid 6-digit OTP");
      return;
    }

    // We verify OTP during reset-password call
    navigate("/reset-password", { state: { email, otp } });
  };

  return (
    <form onSubmit={handleVerifyOtp}>
      <h2>Verify OTP</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />

      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default VerifyOtp;
