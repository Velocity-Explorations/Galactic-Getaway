import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext.tsx";
import { PageDataResponse } from "../utils/types.ts";

const PlanetDetailPage = () => {
  const { planetName } = useParams();
  const ctx = useAppContext();
  const navigate = useNavigate();

  const planet = ctx.planets.find((p) => p.name.toLowerCase() === planetName);

  const { isPending, error, data } = useQuery({
    queryKey: ["planet", planetName],
    queryFn: () =>
      fetch(
        `http://127.0.0.1:8000/page_data?planet=${planet?.name}&age=${ctx.age}`
      ).then((res) => res.json() as Promise<PageDataResponse | undefined>),
  });

  console.log(data);

  if (isPending || data === undefined) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!planet) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="black"
      >
        <IconButton onClick={() => navigate(-1)} color="inherit">
          <ArrowBack />
          <Typography variant="button" sx={{ marginLeft: "8px" }}>
            Return
          </Typography>
        </IconButton>
        <Typography variant="h5" color="error">
          Planet not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        backgroundColor: "black",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Return Button */}
      <Box sx={{ position: "absolute", top: "2rem", left: "2rem" }}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{ color: "white", borderColor: "white" }}
        >
          Return
        </Button>
      </Box>

      {/* Planet Image */}
      <Box
        sx={{
          width: 450,
          height: 450,
          backgroundImage: `url(${planet.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          boxShadow: "0 0 25px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      {/* Planet Details Container */}
      <Box
        sx={{
          width: "40%",
          textAlign: "left",
          padding: "2rem",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          {planet.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.description}
        </Typography>
        <Box sx={{ marginTop: "1rem" }}>
          {data.questions.map((question) => (
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                marginBottom: "1rem",
              }}
              fullWidth
            >
              {question}
            </Button>
          ))}
        </Box>
        <Button
          variant="outlined"
          sx={{ color: "white", borderColor: "white" }}
          fullWidth
        >
          Ask a Question
        </Button>
      </Box>
    </Box>
  );
};

export default PlanetDetailPage;
