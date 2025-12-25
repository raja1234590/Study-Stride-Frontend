import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [showResources, setShowResources] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Central auth check
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined" && token !== "null") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();

    // 🔁 Sync across tabs
    const handleStorageChange = () => {
      checkAuth();
    };

    // 🔁 Sync in same tab (focus change)
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("focus", checkAuth);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("focus", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          StudyStride Solutions
        </Link>

        <div className="nav-menu">
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/counselling" className="nav-link">Counselling</NavLink>

          <div
            className="nav-item dropdown-wrapper"
            onMouseEnter={() => setShowResources(true)}
            onMouseLeave={() => setShowResources(false)}
          >
            <span className="nav-link">Resources ▾</span>
            {showResources && (
              <div className="dropdown-menu">
                <Link to="/books" className="dropdown-link">Books</Link>
                <Link to="/pdfs" className="dropdown-link">PDF Notes</Link>
                <Link to="/pyqs" className="dropdown-link">Previous Year Papers</Link>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="nav-link">Contact</NavLink>

          {/* ✅ Auth Buttons */}
          {!isLoggedIn ? (
            <div className="nav-auth">
              <NavLink to="/login" className="nav-link">Login</NavLink>
              <NavLink to="/signup" className="nav-link signup-btn">Signup</NavLink>
            </div>
          ) : (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
