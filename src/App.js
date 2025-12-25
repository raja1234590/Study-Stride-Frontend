import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import AiChatbot from "./Aichatbot";
import Footer from "./components/Footer";

// Main Pages
import About from "./About";
import Contact from "./Contact";
import Counselling from "./Counselling";
import Resources from "./Resources";

// Auth Pages
import Login from "./pages/Authpages/Login";
import Signup from "./pages/Authpages/Signup";

import ForgotPassword from "./pages/Authpages/ForgotPassword";
import ResetPassword from "./pages/Authpages/ResetPassword";

// Subpages
import Books from "./pages/Subpages/Books";
import Pdf from "./pages/Subpages/Pdf";
import Pyq from "./pages/Subpages/Pyq";

// ProtectedRoute wrapper
import ProtectedRoute from "./ProtectedRoute";
import AuthRedirect from "./Authredirect";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home */}
        <Route path="/" element={<About />} />

        {/* ✅ Auth routes (blocked if logged in) */}
        <Route
          path="/signup"
          element={
            <AuthRedirect>
              <Signup />
            </AuthRedirect>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />

        {/* Public */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Protected */}
        <Route
          path="/counselling"
          element={
            <ProtectedRoute>
              <Counselling />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pdfs"
          element={
            <ProtectedRoute>
              <Pdf />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pyqs"
          element={
            <ProtectedRoute>
              <Pyq />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        {/* ✅ Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
      <AiChatbot />
      <Footer />
    </Router>
  );
}
export default App;