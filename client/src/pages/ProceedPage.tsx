import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext.tsx";

const ProceedPage = () => {
  const navigate = useNavigate();
  const ctx = useAppContext();

  const handlePlanetClick = (planetName: string) => {
    navigate(`/planet/${planetName.toLowerCase()}`);
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
            sx={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
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
