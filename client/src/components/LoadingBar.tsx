// /Users/parissyoungblood/Documents/Velocity/Hackathon/AWS/client/src/components/LoadingBar.tsx
import { Box, Typography } from "@mui/material";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";
import { useLoadingContext } from "../context/LoadingContext";

const LoadingBar = () => {
  const { loading, setLoading } = useLoadingContext();
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading) {
      const progressBar = loadingRef.current;

      if (progressBar) {
        anime({
          targets: progressBar,
          scaleX: [0, 1],
          easing: "easeInOutQuad",
          duration: 3000,
        });
      }

      // Hide loading screen after 3 seconds
      setTimeout(() => setLoading(false), 5000);
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: 0.9,
      }}
    >
      <Typography
        variant="h4"
        color="white"
        mb={2}
        sx={{ fontFamily: "Michroma, sans-serif", textTransform: "uppercase" }}
      >
        Loading...
      </Typography>
      <Box
        ref={loadingRef}
        sx={{
          width: "50%",
          height: "8px",
          backgroundColor: "white",
          transformOrigin: "left",
          transform: "scaleX(0)",
        }}
      />
    </Box>
  );
};

export default LoadingBar;
