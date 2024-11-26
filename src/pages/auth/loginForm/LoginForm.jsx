import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validationSchemaLogin } from "../../../validation/ValidationSchema";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaLogin),
  });
  const onSubmit = (data) => {
    console.log(data, "data");
    navigate("/mail-verification");
  };
  return (
    <Box className="templateForm__inner --verification">
      <h3 className="templateForm__title">Accedi con il tuo account</h3>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ "& > *": { mb: 2.5 } }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Indirizzo mail"
          variant="outlined"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <div
          className="passwordText"
          variant="body2"
          color="textSecondary"
          component="a"
          onClick={() => navigate("/forgot-password")}
        >
          password dimenticata?
        </div>
        <TextField
          fullWidth
          id="outlined-password"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: "#6C757D" }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          className="loginBtn"
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            bgcolor: "#66B62C",
            "&:hover": {
              bgcolor: "#589E25",
            },
          }}
        >
          Accedi
        </Button>
      </Box>
    </Box>
  );
};
export default LoginForm;
