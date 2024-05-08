import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProceedPage from "./pages/ProceedPage.tsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.tsx";
import { PlanetProvider } from "./context/PlanetContext.tsx";

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
