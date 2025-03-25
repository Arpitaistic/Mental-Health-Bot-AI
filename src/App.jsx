import React from "react";
import "./App.css";
import { FaComments } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
       <div className="wrapper"></div>
      <div className="background-animation"></div> {/* Animated Background */}
      <div className="welcome-card">
        <h1>
          Welcome to <span className="highlight">Mental Health AI</span>
        </h1>
        <p>Your personal AI-powered mental health assistant.</p>
        <button className="chat-button">
          <FaComments className="chat-icon" /> Chat Now
        </button>
      </div>
    </div>
  );
}

export default App;
