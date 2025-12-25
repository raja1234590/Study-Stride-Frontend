import React from "react";
import { Link } from "react-router-dom";
import "./Resources.css";

function Resources() {
  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="dropdown">
        <button className="dropbtn">Select Resource</button>
        <div className="dropdown-content">
          <Link to="/books">Books</Link>
          <Link to="/pdfs">PDF Notes</Link>
          <Link to="/pyqs">Previous Year Papers</Link>
        </div>
      </div>
    </div>
  );
}

export default Resources;
