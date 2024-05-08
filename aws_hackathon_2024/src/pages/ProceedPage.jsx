import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const ProceedPage = () => {
  const params = new URLSearchParams(window.location.search);
  const age = params.get("age");

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
          <Typography variant="h5" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="h6">Your age is: {age}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProceedPage;
