import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirthdayPage from "./components/BirthdayPage";
import UcapanCard from "./components/UcapanCard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
        <Route path="/ucapan" element={<UcapanCard />} />
      </Routes>
    </Router>
  );
}

export default App;
