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
  statusColor,
  isLast,
  isProfitti,
  isHighlighted,
  customStructure,
}) => {
  return (
    <div className="prfittiCard" style={{ backgroundColor: backgroundColor }}>
      {/* <div className="statusText__img">
        <IconComponent />
      </div> */}
      <div className="prfittiCard__content">
        <h4 style={{ color: statusColor }}>{status}</h4>
        {customStructure ? (
          <>
            <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
              {!matured ? (
                `${amount}` // Display amount if 'matured' is not present
              ) : (
                <>
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "16px",
                      fontFamily: '"Barlow", sans-serif',
                      width: "130px",
                      display: "block",
                    }}
                  >
                    {matured}
                  </span>
                  <span style={{ color: "#666666" }}>{message}</span>
                </>
              )}
            </p>
            <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  fontFamily: '"Barlow", sans-serif',
                  width: "130px",
                  display: "block",
                }}
              >
                {due}
              </span>
              <span style={{ color: "#666666" }}>{message2}</span>
            </p>
          </>
        ) : (
          <h3
            style={{
              color: color,
              // fontWeight: amount === "-350.043.56€" ? "700" : "400",
              fontWeight: isProfitti
                ? isHighlighted
                  ? "700"
                  : "400"
                : isHighlighted
                ? "700"
                : "400",
              fontFamily: '"Barlow", sans-serif',
              fontSize: "20px",
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
        )}
        <h5
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            justifyContent: "space-between",
          }}
        >
          {!matured && (
            <>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: "700",
                  color: "#160A2A",
                }}
              >
                {" "}
                <Dato_positivo /> {count}%{" "}
              </span>{" "}
              <span
                style={{ fontSize: "13px", fontFamily: '"Barlow", sans-serif' }}
              >
                Anno precedente
              </span>
            </>
          )}
        </h5>
      </div>
    </div>
  );
};

const ProfittiStatitics = ({ dataType, type, seven, isProfitti }) => {
  return (
    <Box className="FactureSection">
      <Grid container className="FactureSection__inner" spacing={2}>
        {dataType?.map((data, index) => (
          <Grid
            item
            xl={type ? 1.5 : seven ? 1.71 : index === 4 ? 4 : 2}
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
              statusColor={data.statusColor}
              isProfitti={isProfitti}
              isHighlighted={data?.isHighlighted}
              customStructure={data?.customStructure}
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
