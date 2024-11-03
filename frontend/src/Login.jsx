// src/App.jsx
import React, { useState } from "react";
import "./Login.css";
import "boxicons/css/boxicons.min.css";

function App() {
  const [isActive, setIsActive] = useState(false); // Controls the active form
  const [currentField, setCurrentField] = useState(0); // Tracks which fields to show

  // Toggle between Login and Register forms
  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsActive(true); // Show Register form
    setCurrentField(0); // Reset to first field
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsActive(false); // Show Login form
  };

  const handleScroll = (direction) => {
    if (direction === 'next' && currentField < 4) {
      setCurrentField(currentField + 1);
    } else if (direction === 'prev' && currentField > 0) {
      setCurrentField(currentField - 1);
    }
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      <div className="curved-shape"></div>
      <div className="curved-shape2"></div>

      {/* Login Form */}
      <div className={`form-box Login ${isActive ? "hidden" : ""}`}>
        <h2 className="animation" style={{ "--D": 0 }}>Login</h2>
        <form action="#">
          <div className="input-box animation" style={{ "--D": 1 }}>
            <input type="text" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box animation" style={{ "--D": 2 }}>
            <input type="password" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="input-box animation" style={{ "--D": 3 }}>
            <button className="btn" type="submit">Login</button>
          </div>
          <div className="regi-link animation" style={{ "--D": 4 }}>
            <p>
              Don't Have an account? <a href="#" onClick={handleRegisterClick}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className={`form-box Register ${isActive ? "" : "hidden"}`}>
        <h2 className="animation" style={{ "--li": 17 }}>Register</h2>
        <form action="#" className="scroll-form">
          {/** Display only two fields based on currentField */}
          {[
            { label: "Enter your Name", type: "text", required: true },
            { label: "Enter your Registration Number", type: "text", required: true },
            { label: "Enter your email", type: "text", required: true },
            { label: "Enter your branch", type: "text", required: true },
            { label: "Enter a username", type: "text", required: true },
            { label: "Enter a password", type: "password", required: true }
          ].slice(currentField, currentField + 2).map((field, index) => (
            <div key={index} className="input-box animation">
              <input type={field.type} required={field.required} />
              <label>{field.label}</label>
              <i className="bx bxs-user"></i>
            </div>
          ))}
          
          {/* Navigation Buttons */}
          {isActive && (
            <div className="navigation-buttons">
              {currentField > 0 && (
                <button type="button" onClick={() => handleScroll('prev')} className="nav-button">Previous</button>
              )}
              {currentField < 4 && (
                <button type="button" onClick={() => handleScroll('next')} className="nav-button">Next</button>
              )}
            </div>
          )}

          <div className="input-box animation">
            <button className="btn" type="submit">Register</button>
          </div>

          <div className="regi-link animation">
            <p>Existing User? <a href="#" onClick={handleLoginClick}>Sign In</a></p>
          </div>
        </form>
      </div>

      {/* Info Section for Login */}
      {!isActive && (
        <div className="info-content Login">
          <h2 className="animation" style={{ "--D": 0 }}>WELCOME BACK!</h2>
          <p className="animation" style={{ "--D": 1 }}>
            "The future depends on what you do today!"
          </p>
        </div>
      )}

      {/* Info Section for Register */}
      {isActive && (
        <div className="info-content Register">
          <h2 className="animation" style={{ "--li": 17 }}>HELLO THERE!</h2>
          <p className="animation" style={{ "--li": 18 }}>
            “Embark on Your Journey to Success; Sign Up and Soar to New Heights!”
          </p>
        </div>
      )}
    </div>
  );
}

export default App;