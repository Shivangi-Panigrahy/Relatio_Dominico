import React, { useState } from "react";
import { useForm } from "react-hook-form";
import mail from "../../../assets/ic-email-inbox.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, TextField, Button, Link, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  code: yup
    .array()
    .of(yup.string().length(1, "Enter a single digit"))
    .min(6, "Enter all 6 digits"),
});

const CodeInput = styled(TextField)({
  width: "40px",
  "& input": {
    textAlign: "center",
    padding: "8px 0",
    fontSize: "1.2rem",
  },
});

const MailVerificationPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { code: Array(6).fill("") },
  });

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      setValue(`code[${index}]`, value);

      if (value && index < 5) {
        document.querySelector(`input[name=code-${index + 1}]`)?.focus();
      }
    }
  };

  const onSubmit = () => {
    navigate("/verification");
    console.log("Verification code:", code.join(""));
  };

  return (
    <>
      <Box className="templateForm__inner --verification">
        <div className="templateForm__brand">
          <img src={mail} alt="Logo" />
        </div>
        <h3 className="templateForm__title">Controlla la tua mail</h3>
        <p>
          Ti abbiamo inviato un codice a 6 cifre per verificare la tua identità.
          Inserisci il codice qui per completare la procedura.
        </p>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <Box className="otpCode">
            {code.map((digit, index) => (
              <CodeInput
                key={index}
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                inputProps={{ maxLength: 1, placeholder: "-" }}
                error={!!errors.code}
              />
            ))}
          </Box>
          <Typography style={{ color: "red" }}>
            {errors.code ? "È richiesto l' OTP" : ""}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="loginBtn"
            sx={{ bgcolor: "#4CAF50", "&:hover": { bgcolor: "#45a049" } }}
          >
            Accedi
          </Button>
          <Box className="formLogin">
            <Link
              href="#"
              variant="body2"
              color="#333333"
              sx={{ textDecoration: "none" }}
            >
              Non hai ricevuto il codice?{" "}
              <strong> Invia un altro codice</strong>
            </Link>
            <div className="formLogin__btn" onClick={() => navigate("/")}>
              <KeyboardArrowLeftIcon /> Torna al login
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MailVerificationPage;
