import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage.tsx";
import ProceedPage from "./pages/ProceedPage.tsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.tsx";
import { PlanetProvider } from "./context/PlanetContext.tsx";
import theme from "./theme.ts";
import "./global.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlanetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proceed" element={<ProceedPage />} />
            <Route path="/planet/:planetName" element={<PlanetDetailPage />} />
          </Routes>
        </Router>
      </PlanetProvider>
    </ThemeProvider>
  );
};

export default App;
