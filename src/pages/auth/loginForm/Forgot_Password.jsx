import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as Icpassword } from "../../../assets/ic-password.svg";
import { Box, TextField, Button } from "@mui/material";
import { validationSchemaForgotPassword } from "../../../validation/ValidationSchema";
import { useNavigate } from "react-router-dom";

export default function Forgot_Password() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaForgotPassword),
  });

  const onSubmit = (data) => {
    navigate("/password-reset");
    console.log(data);
  };

  return (
    <>
      <Box className="templateForm__inner --verification">
        <div className="templateForm__brand">
          <Icpassword />
        </div>
        <h3 className="templateForm__title">Hai dimenticato la password?</h3>
        <p>
          We&apos;ve sent a 6-digit confirmation email to your email.
          <br />
          Please enter the code below to verify your email.
        </p>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}>
          <TextField
            {...register("email")}
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            error={!!errors.email}
            helperText={errors.email?.message}
            placeholder="example@gmail.com"
            sx={{ mb: 3 }}
          />

          <Button
            className="loginBtn mt-0"
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
            <div
              className="formLogin__btn"
              href="login"
              variant="body2"
              sx={{
                textDecoration: "none",
                color: "text.secondary",
                display: "inline-flex",
                alignItems: "center",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => navigate("/")}
            >
              ← Torna al login
            </div>
          </Box>
        </Box>
      </Box>
    </>
  );
}
