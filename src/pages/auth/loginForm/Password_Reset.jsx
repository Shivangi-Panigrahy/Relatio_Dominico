import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  TextField,
  Button,
  Link,
  Paper,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { validationSchemaPasswordReset } from "../../../validation/ValidationSchema";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IcEmail } from "../../../assets/ic-email-sent.svg";

const CodeInput = styled(TextField)({
  width: "40px",
  "& input": {
    textAlign: "center",
    padding: "8px 0",
    fontSize: "1.2rem",
  },
});

// Yup validation schema

export default function PasswordReset() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchemaPasswordReset),
    defaultValues: {
      email: "demo@mimimi.cc",
      password: "",
      confirmPassword: "",
      code: Array(6).fill(""),
    },
  });

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      setValue(`code[${index}]`, value);

      if (value && index < 5) {
        const nextInput = document.querySelector(
          `input[name=code-${index + 1}]`
        );
        nextInput?.focus();
      }
    }
  };

  const onSubmit = (data) => {
    navigate("/password-success");
    console.log("Form submitted with data:", data);
  };

  return (
    <>
      <Box className="templateForm__inner --verification">
        <div className="templateForm__brand">
          <IcEmail />
        </div>
        <h3 className="templateForm__title">Richiesta andata a buon fine</h3>
        <p>
          Ti abbiamo inviato un mail sul tuo contenente un codice a 6 cifre.
          Verifica la tua mail e inserisci il codice qui.
        </p>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <TextField
            margin="normal"
            fullWidth
            defaultValue="demo@mimimi.cc"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            {...register("email")}
            sx={{ mb: 3 }}
          />

          <Box className="otpCode">
            {code.map((digit, index) => (
              <CodeInput
                key={index}
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                inputProps={{ maxLength: 1, placeholder: "-" }}
                error={!!errors.code}
                helperText={errors.code ? errors.code.message : ""}
              />
            ))}
          </Box>
          <Typography style={{ color: "red" }}>
            {errors.code ? "È richiesto l' OTP" : ""}
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            {...register("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Conferma Nuova Password"
            type={showConfirmPassword ? "text" : "password"}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
            {...register("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 3 }}
          />

          <Button
            className="loginBtn"
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mb: 2,
              bgcolor: "#4CAF50",
              "&:hover": {
                bgcolor: "#45a049",
              },
              textTransform: "none",
            }}
          >
            Accedi
          </Button>

          <Box className="formLogin">
            <Link href="#" sx={{ textDecoration: "none" }}>
              Non hai ricevuto il codice?{" "}
              <strong> Invia un altro codice</strong>
            </Link>
            <div className="formLogin__btn" onClick={() => navigate("/")}>
              ← Torna al login
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
