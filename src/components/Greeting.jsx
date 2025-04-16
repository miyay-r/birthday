import React from "react";
import { useNavigate } from "react-router-dom";
import "./Greeting.css";

const Greeting = () => {
  const navigate = useNavigate();

  return (
    <div className="greeting-wrapper">
      <div className="greeting-card">
        <h1>🎉 HBD 🎉 </h1>
        <h2>– JweLL –</h2>
        <button className="btn-ucapan" onClick={() => navigate("/ucapan")}>
          Open
        </button>
      </div>
    </div>
  );
};

export default Greeting;
