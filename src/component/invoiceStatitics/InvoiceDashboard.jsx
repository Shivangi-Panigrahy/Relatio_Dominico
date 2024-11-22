import React from "react";
import { Box, Grid, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./InvoiceDashboard.scss";
import { ReactComponent as InsertDriveGray } from "../../assets/dashboardIcons/InsertDriveGray.svg";
import { ReactComponent as Saldate } from "../../assets/dashboardIcons/saldare.svg";
import { ReactComponent as Scadute } from "../../assets/dashboardIcons/Scadute.svg";
import { ReactComponent as Saldare } from "../../assets/dashboardIcons/saldare.svg";
import CircularProgress from "@mui/material/CircularProgress";
import { ReactComponent as CopyIcon } from "../../assets/CopyIcon.svg";

const useStyles = makeStyles(() => ({}));

const InvoiceCard = ({ status, count, amount, color, iconColor }) => {
  return (
    <div className="statusText">
      <div className="statusText__img">
        <CircularProgress variant="determinate" value={75}   style={{ color: iconColor }}  />
        <CopyIcon className="FileIcon"/>
      </div>
      <div className="statusText__content">
        <h4>{status}</h4>
        <h3 style={{ color: color }}>€{amount}</h3>
        <h5>
          {count} <span>Facture</span>
        </h5>
      </div>
    </div>
  );
};

const InvoiceDashboard = () => {
  const classes = useStyles();

  const invoiceData = [
    {
      status: "Totale Fatture ",
      count: 325,
      amount: "20.350.043.55€",
      color: "#100919",
      iconColor: "#100919",
    },
    {
      status: "Fatture Saldate ",
      count: 325,
      amount: "20.350.043.55€",
      color: "#57C700",
      iconColor: "#57C700",
    },
    {
      status: "Fatture  da saldare",
      count: 325,
      amount: "20.350.043.55€",
      color: "#FFA903",
      iconColor: "#FFA903",
    },
    {
      status: "Fatture Scadute ",
      count: 325,
      amount: "20.350.043.55€",
      color: "#DB0000",
      iconColor: "#DB0000",
    },
  ];

  return (
    <Box className="FactureSection">
      <Grid container className="FactureSection__inner" spacing={2}>
        {invoiceData.map((data, index) => (
          <Grid item lg={3} md={6} xs={12}>
            <InvoiceCard
              status={data.status}
              count={data.count}
              amount={data.amount}
              color={data.color}
              iconColor={data.iconColor}
            />
            {/* Divider only for the first three cards */}
            {index < invoiceData.length - 1 && (
              <div className={classes.divider}></div>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InvoiceDashboard;
