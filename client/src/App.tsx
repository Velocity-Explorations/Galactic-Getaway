// /Users/parissyoungblood/Documents/Velocity/Hackathon/AWS/client/src/App.tsx
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext.tsx";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import LoadingBar from "./components/LoadingBar";
import HomePage from "./pages/HomePage.tsx";
import PlanetDetailPage from "./pages/PlanetDetailPage.tsx";
import ProceedPage from "./pages/ProceedPage.tsx";
import theme from "./theme.ts";
import "./global.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LoadingProvider>
          <AppProvider>
            <Router>
              <LoadingBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/proceed" element={<ProceedPage />} />
                <Route
                  path="/planet/:planetName"
                  element={<PlanetDetailPage />}
                />
              </Routes>
            </Router>
          </AppProvider>
        </LoadingProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
