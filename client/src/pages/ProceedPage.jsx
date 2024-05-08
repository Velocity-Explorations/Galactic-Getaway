import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePlanets } from "../context/PlanetContext.jsx";

const ProceedPage = () => {
  const navigate = useNavigate();
  const planets = usePlanets();

  const handlePlanetClick = (planetName) => {
    navigate(`/planet/${planetName.toLowerCase()}`);
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Select a Planet
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
        >
          {planets.map((planet) => (
            <Box
              key={planet.name}
              sx={{
                width: planet.size,
                height: planet.size,
                backgroundColor: planet.color,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "15px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => handlePlanetClick(planet.name)}
            >
              <Typography variant="caption" color="white">
                {planet.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProceedPage;
