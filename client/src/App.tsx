import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext.tsx";
import HomePage from "./pages/HomePage.tsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.tsx";
import ProceedPage from "./pages/ProceedPage.tsx";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proceed" element={<ProceedPage />} />
          <Route path="/planet/:planetName" element={<PlanetDetailPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
