import React from "react";
import {
  Box,
  Typography,
  Modal,
  Grid,
  Paper,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import "./Presenze.scss";
const PresenzeModal = ({ open, handleClose }) => {
  const data = [
    { time: "09:00 - 13:30", name: "Matteo Vellone", status: "Presente" },
    { time: "09:00 - 13:30", name: "Matteo Vellone", status: "Completo" },
    {
      time: "09:00 - 13:30",
      name: "Matteo Vellone",
      status: "Assente",
      reason: "Malattia",
    },
    {
      time: "09:00 - 13:30",
      name: "Matteo Vellone",
      status: "Assente",
      reason: "Malattia",
    },
    { time: "09:00 - 13:30", name: "Matteo Vellone", status: "Completo" },
    { time: "09:00 - 13:30", name: "Matteo Vellone", status: "Presente" },
    {
      time: "09:00 - 13:30",
      name: "Matteo Vellone",
      status: "Assente",
      reason: "Malattia",
    },
  ];

  return (
    <Modal
      className="PresenzeModel"
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
    >
      <div className="PresenzeModel__inner">
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "gray",
          }}
        >
          <CloseIcon />
        </IconButton>

        <h2 id="modal-title" className="PresenzeModel__title">
          Presenze del 28/11/2024
        </h2>
        <div className="PresenzeModel__body">
          {data.map((item, index) => (
            <Paper
              className="PresenzeModel__box"
              key={index}
              sx={{
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
                // p: 1.5,
                // mb: 1,
                backgroundColor:
                  item.status === "Completo"
                    ? "#e8f5e9"
                    : item.status === "Assente"
                    ? "#ffebee"
                    : "transparent",
              }}
              elevation={1}
            >
              <div className="PresenzeModel__box__content">
                <CircleIcon
                  sx={{
                    fontSize: 10,
                    color:
                      item.status === "Completo"
                        ? "#4caf50"
                        : item.status === "Assente"
                        ? "#f44336"
                        : "#8bc34a",
                  }}
                />
                <div>
                  <h4
                    sx={{
                      color: item.status === "Assente" ? "#f44336" : "black",
                    }}
                  >
                    {item.time}
                  </h4>
                  <p>{item.name}</p>
                </div>
              </div>
              <div>
                <Chip
                  label={item.status}
                  size="small"
                  sx={{
                    backgroundColor:
                      item.status === "Completo"
                        ? "#4caf50"
                        : item.status === "Assente"
                        ? "#f44336"
                        : "#d4edda",
                    color:
                      item.status === "Completo" || item.status === "Assente"
                        ? "white"
                        : "#388e3c",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    marginRight: item.reason ? 1 : 0,
                  }}
                />
                {item.reason && (
                  <Chip
                    label={item.reason}
                    size="small"
                    sx={{
                      backgroundColor: "#e0e0e0",
                      color: "#757575",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                    }}
                  />
                )}
              </div>
              {/* <Grid container alignItems="center" spacing={1}>
                <Grid item></Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: item.status === "Assente" ? "#f44336" : "black",
                    }}
                  >
                    {item.time}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "0.75rem", color: "gray" }}
                  >
                    {item.name}
                  </Typography>
                </Grid>
              </Grid> */}
            </Paper>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default PresenzeModal;
