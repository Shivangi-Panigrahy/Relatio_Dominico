import React from "react";
import { Modal, Paper, IconButton, Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import "./Presenze.scss";

const AbsentModal = ({ open, handleClose }) => {
  const data = [
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
    {
      time: "09:00 - 13:30",
      name: "Matteo Vellone",
      status: "Assente",
      reason: "Malattia",
    },
  ];

  const handleChipClick = (event) => {
    const chip = event.target;
    if (chip.innerText === "Assente") {
      //   chip.innerText = "Presente";
      chip.style.backgroundColor = "#57C70080"; 
      chip.style.color = "#57C700";
    } 
     else if (chip.innerText === "Malattia") {
        chip.style.backgroundColor = "#57C70080"; 
        chip.style.color = "#57C700";
    } 
  };

  return (
    <Modal
      className="PresenzeModel absenseModel"
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-title"
    >
      <div className="PresenzeModel__inner">
        <IconButton
          onClick={() => handleClose(false)}
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
                backgroundColor:
                  item.status === "Assente" ? "#ffebee" : "transparent",
                p: 1.5,
                mb: 1,
              }}
              elevation={1}
            >
              <div className="PresenzeModel__box__content">
                <CircleIcon
                  sx={{
                    fontSize: 10,
                    color: item.status === "Assente" ? "#f44336" : "#8bc34a",
                  }}
                />
                <div>
                  <h4>{item.time}</h4>
                  <p>{item.name}</p>
                </div>
              </div>
              <div className="btnPart">
                <Chip
                  label={item.status}
                  size="small"
                  onClick={handleChipClick}
                  sx={{
                    backgroundColor:
                      item.status === "Assente" ? "#DB000033" : "#DB000033",
                    color: item.reason === "Assente" ? "" : "#DB0000",
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                  }}
                />
                {item.reason && (
                  <Chip
                    label={item.reason}
                    size="small"
                    onClick={handleChipClick}
                    sx={{
                      backgroundColor:
                        item.reason === "Malattia" ? "#e0e0e0" : "#10091933",
                      color: item.reason === "Malattia" ? "#100919" : "white",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                    }}
                  />
                )}
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AbsentModal;
