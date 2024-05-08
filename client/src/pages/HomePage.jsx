import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const HomePage = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleProceed = () => {
    if (age) {
      navigate(`/proceed?age=${age}`);
    }
  };

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
          <Typography variant="h6" gutterBottom>
            Enter your age:
          </Typography>
          <TextField
            type="number"
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            sx={{ marginBottom: "1.5rem", width: "100%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleProceed}
            sx={{ width: "100%" }}
          >
            Proceed
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
