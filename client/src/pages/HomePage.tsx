// /Users/parissyoungblood/Documents/Velocity/Hackathon/AWS/client/src/pages/HomePage.tsx
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useLoadingContext } from "../context/LoadingContext";

const HomePage = () => {
  const navigate = useNavigate();
  const ctx = useAppContext();
  const { setLoading } = useLoadingContext();
  const paperRef = useRef<HTMLDivElement | null>(null);

  const handleProceed = () => {
    setLoading(true);
    const paper = paperRef.current;
    if (paper) {
      anime({
        targets: paper,
        translateY: {
          value: -window.innerHeight,
          duration: 800,
          easing: "easeInOutQuad",
        },
        scale: {
          value: [1, 0],
          duration: 800,
          easing: "easeInOutQuad",
        },
        complete: () => navigate(`/proceed`),
      });
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.4)",
        }}
      >
        <source src="/src/assets/video/site_intro.mp4" type="video/mp4" />
      </Box>

      <Paper
        elevation={3}
        ref={paperRef}
        sx={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "2px solid white",
          borderRadius: "8px",
          color: "white",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: "Michroma, sans-serif",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Galactic Gateway
        </Typography>

        <Typography variant="h6" gutterBottom>
          Enter your age:
        </Typography>
        <TextField
          type="number"
          label="Age"
          value={ctx.age}
          onChange={(e) => ctx.setAge(parseInt(e.target.value))}
          sx={{ marginBottom: "1.5rem", width: "100%", color: "white" }}
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleProceed}
          sx={{
            width: "100%",
            marginBottom: "1rem",
            borderColor: "white",
            color: "white",
            fontFamily: "Michroma, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Proceed
        </Button>
      </Paper>
    </Container>
  );
};

export default HomePage;
