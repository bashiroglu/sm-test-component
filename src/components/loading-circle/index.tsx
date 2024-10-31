import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingCircle = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ height: "66px" }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingCircle;