import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProceedPage from "./pages/ProceedPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proceed" element={<ProceedPage />} />
      </Routes>
    </Router>
  );
};

export default App;
