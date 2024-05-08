import { Container, Typography, Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { usePlanets } from "../context/PlanetContext.tsx";

const PlanetDetailPage = () => {
  const { planetName } = useParams();
  const planets = usePlanets();

  const planet = planets.find((p) => p.name.toLowerCase() === planetName);

  if (!planet) {
    return (
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Typography variant="h5" color="error">
            Planet not found.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper elevation={3} sx={{ padding: "2rem", textAlign: "center" }}>
          <Box
            sx={{
              width: planet.size,
              height: planet.size,
              backgroundColor: planet.color,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h6" color="white">
              {planet.name}
            </Typography>
          </Box>
          <Typography variant="h5" gutterBottom>
            {planet.name}
          </Typography>
          <Typography variant="body1">{planet.description}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default PlanetDetailPage;
