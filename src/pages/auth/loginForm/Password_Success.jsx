import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Sucess } from "../../../assets/Sucess.svg";

const DiamondIcon = styled("div")({
  width: "40px",
  height: "40px",
  backgroundColor: "#FF1493",
  transform: "rotate(45deg)",
});

export default function Password_Success() {
  const navigate = useNavigate();
  return (
    <>
      <Box className="templateForm__inner --verification --successMessage">
        <div className="templateForm__brand">
          <Sucess />
        </div>
        <h3 className="templateForm__title">
          Password aggiornata correttamente!
        </h3>
        <Button
          className="loginBtn"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#4CAF50",
            "&:hover": {
              bgcolor: "#45a049",
            },
            textTransform: "none",
          }}
          onClick={() => navigate("/")}
        >
          Accedi
        </Button>
      </Box>
    </>
  );
}
