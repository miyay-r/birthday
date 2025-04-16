import React from "react";
import Greeting from "./Greeting";
import Fireworks from "./Fireworks";
import "./BirthdayPage.css";

const BirthdayPage = () => {
  return (
    <div className="birthday-container">
      <Greeting />
      <Fireworks />
    </div>
  );
};

export default BirthdayPage;
