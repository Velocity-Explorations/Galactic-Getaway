import { Box, Typography } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.tsx";

const ProceedPage = () => {
  const navigate = useNavigate();
  const ctx = useAppContext();
  const planetsRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    planetsRefs.current.forEach((element) => {
      if (element) {
        anime({
          targets: element,
          scale: [0, 1],
          duration: 1000,
          delay: anime.stagger(100),
          easing: "easeOutExpo",
        });
      }
    });
  }, []);

  const handlePlanetClick = (planetName: string) => {
    const planetElement = planetsRefs.current.get(planetName);
    if (planetElement) {
      anime({
        targets: planetElement,
        scale: [1, 0],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => navigate(`/planet/${planetName.toLowerCase()}`),
      });
    }
  };

  const handleMouseEnter = (planetName: string) => {
    const planetElement = planetsRefs.current.get(planetName);
    if (planetElement) {
      anime({
        targets: planetElement,
        scale: 1.1,
        boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
        easing: "easeOutQuad",
        duration: 200,
      });
    }
  };

  const handleMouseLeave = (planetName: string) => {
    const planetElement = planetsRefs.current.get(planetName);
    if (planetElement) {
      anime({
        targets: planetElement,
        scale: 1,
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        easing: "easeOutQuad",
        duration: 200,
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          textAlign: "center",
          textTransform: "uppercase",
          color: "white",
          marginBottom: "2rem",
          fontFamily: "Michroma, sans-serif",
        }}
      >
        Galactic Gateway
      </Typography>

      {/* Planets Layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "2rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {ctx.planets.map((planet) => (
          <Box
            key={planet.name}
            ref={(el) => planetsRefs.current.set(planet.name, el)}
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
              "&:hover": {
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
              },
            }}
            onMouseEnter={() => handleMouseEnter(planet.name)}
            onMouseLeave={() => handleMouseLeave(planet.name)}
            onClick={() => handlePlanetClick(planet.name)}
          >
            <Box
              sx={{
                width: planet.size,
                height: planet.size,
                backgroundImage: `url(${planet.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                transition: "box-shadow 0.2s",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "0.5rem",
                textTransform: "uppercase",
                color: "white",
                fontFamily: "Jura, sans-serif",
              }}
            >
              {planet.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProceedPage;
