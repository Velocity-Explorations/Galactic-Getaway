import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const HomePage = () => {
  const navigate = useNavigate();
  const ctx = useAppContext();

  const handleProceed = () => {
    navigate(`/proceed`);
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
            value={ctx.age}
            onChange={(e) => ctx.setAge(parseInt(e.target.value))}
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
