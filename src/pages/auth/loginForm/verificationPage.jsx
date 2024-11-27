import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import mobileLogo from "../../../assets/mobileLogo.svg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Search } from "../../../assets/Sucess.svg";

const VerificationPage = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleVerificationCodeChange = (index, event) => {
    const newCode = [...verificationCode];
    newCode[index] = event.target.value;
    setVerificationCode(newCode);
  };

  const handleSubmit = () => {
    navigate("/dashboard/profitti");
    console.log("Verification code:", verificationCode.join(""));
  };

  return (
    <>
      <Box className="templateForm__inner --verification">
        <div className="templateForm__brand">
          <Search />
        </div>
        <h3 className="templateForm__title">Codice Correto</h3>
        <p>
          Ti abbiamo inviato un codice a 6 cifre per verificare la tua identità.
          Inserisci il codice qui per poter completare la procedura.
        </p>
        <Button
          className="loginBtn"
          variant="contained"
          color="success"
          onClick={handleSubmit}
          fullWidth
          sx={{
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#45a049",
            },
            borderRadius: 3,
          }}
        >
          Accedi
        </Button>
        <Box className="formLogin">
          <div
            className="formLogin__btn"
            variant="body2"
            color="#333333"
            onClick={() => navigate("/")}
          >
            <KeyboardArrowLeftIcon /> Torna al login
          </div>
        </Box>
      </Box>
    </>
  );
};

export default VerificationPage;
