import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext.tsx";
import "./global.css";
import HomePage from "./pages/HomePage.tsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.tsx";
import ProceedPage from "./pages/ProceedPage.tsx";
import theme from "./theme.ts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proceed" element={<ProceedPage />} />
            <Route path="/planet/:planetName" element={<PlanetDetailPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
