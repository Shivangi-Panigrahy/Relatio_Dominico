import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const WelcomeSection = () => {
  const [hoverStates, setHoverStates] = useState(Array(10).fill(false));

  const handleMouseEnter = (index) => {
    setHoverStates((prev) =>
      prev.map((hovered, i) => (i === index ? true : hovered))
    );
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prev) =>
      prev.map((hovered, i) => (i === index ? false : hovered))
    );
  };

  return (
    <>
      <Box className="welcomeBox">
        <Box className="welcomeBox__inner">
          <Typography component="h1" className="title">
            Ciao e bentornato!
          </Typography>
          <Typography className="subtitle" component="p">
            Siamo una piattaforma Italiana pensata per le PMI Italiane. Scopri
            come rendere più efficiente tuoi processi!
          </Typography>
        </Box>

        <ul className="gradientColor">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <div
                id={`item${index + 1}`}
                className={`span ${hoverStates[index] ? "active" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
        <div className="bgVactor"></div>
        <ul className="gradientColor hoverEffect">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>
              <div
                id={`parant${index + 1}`}
                className="hover"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              ></div>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default WelcomeSection;
