import React from "react";
import { Box, Icon, Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./ProfittiStatitics.scss";
import { ReactComponent as Dato_positivo } from "../../assets/Dato_positivo.svg";

const useStyles = makeStyles(() => ({}));

const ProfittiCard = ({
  status,
  count,
  amount,
  color,
  background,
  matured,
  due,
  message,
  message2,
  backgroundColor,
}) => {
  return (
    <div className="prfittiCard" style={{ backgroundColor: backgroundColor }}>
      {/* <div className="statusText__img">
        <IconComponent />
      </div> */}
      <div className="prfittiCard__content">
        <h4>{status}</h4>
        <h3
          style={{
            color: color,
            fontWeight: amount === "-350.043.56€" ? "700" : "normal",
          }}
        >
          {!matured ? (
            `${amount}` // Display amount if 'matured' is not present
          ) : (
            <>
              {matured} {message} {due} {message2}
            </>
          )}
        </h3>
        <h5>
          {!matured && (
            <>
              <Dato_positivo /> {count}% <span>Anno precedente</span>
            </>
          )}
        </h5>
      </div>
    </div>
  );
};

const ProfittiStatitics = ({ dataType, type, seven }) => {
  return (
    <Box className="FactureSection mt-14">
      <Grid container className="FactureSection__inner" spacing={2}>
        {dataType?.map((data, index) => (
          <Grid
            item
            xl={
              type
                ? 1.5
                : seven
                ? 1.71 // Example: set xl to 6 if `seven` is true (adjust as needed)
                : index === 4
                ? 4
                : 2
            }
            md={index === 4 ? 8 : 4}
            xs={12}
          >
            <ProfittiCard
              status={data.status}
              count={data.count}
              amount={data.amount}
              color={data.color}
              background={data.background}
              matured={data.matured}
              due={data.due}
              message={data.message}
              message2={data.message2}
              backgroundColor={data.backgroundColor}
            />

            {/* {index < profittiData.length - 1 && (
              <div className={classes.divider}></div>
            )} */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfittiStatitics;
