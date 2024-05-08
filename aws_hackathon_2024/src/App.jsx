import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProceedPage from "./pages/ProceedPage.jsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.jsx";
import { PlanetProvider } from "./context/PlanetContext.jsx";

const App = () => {
  return (
    <PlanetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proceed" element={<ProceedPage />} />
          <Route path="/planet/:planetName" element={<PlanetDetailPage />} />
        </Routes>
      </Router>
    </PlanetProvider>
  );
};

export default App;
