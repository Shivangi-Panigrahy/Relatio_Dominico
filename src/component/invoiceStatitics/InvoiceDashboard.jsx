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
const InvoiceCard = ({
  status,
  count,
  amount,
  color,
  iconColor,
  hr,
  subfix,
}) => {
  return (
    <div className="statusText">
      <div className="statusText__img">
        {!hr && (
          <>
            <CircularProgress
              variant="determinate"
              value={75}
              style={{ color: iconColor }}
            />
            <span className="text-value" style={{ color: iconColor }}>
              18%
            </span>
            {/* <CopyIcon className="FileIcon"/> */}
          </>
        )}
      </div>
      <div className="statusText__content">
        <h4>{status}</h4>
        {!hr && <h3 style={{ color: color }}>{amount}€</h3>}
        <h5>
          { count}{" "}
         
          <span>
            
            {count === ""
              || (hr && !subfix)
              ? " "
              : subfix && hr
              ? subfix
             
              : window.location.href.includes("/amministrazione/documenti")
                ? "Documenti"
                : window.location.href.includes("/cataloghi/servizi")
                  ? "Servizi"
                  : "Facture"}
          
          </span>
        </h5>

      </div>
    </div>
  );
};
const InvoiceDashboard = ({
  acquisti = false,
  preventivi = false,
  lead = false,
  ordini = false,
  budget = false,
  fornitori = false,
  amministrazioneAsset = false,
  amministrazioneDocumenti = false,
  primaNota = false,
  hr,
  amministrazioneImposte=false,
  reteizzazione=false,
  servizi = false,

 
}) => {
  const classes = useStyles();


  console.log(amministrazioneDocumenti, 'amministrazioneDocumenti')

  const dataSources = {
    acquisti: acquisti,
    preventivi: preventivi,
    lead: lead,
    ordini: ordini,
    budget: budget,
    fornitori: fornitori,
    amministrazioneDocumenti:amministrazioneDocumenti,
    amministrazioneAsset:amministrazioneAsset,
    primaNota:primaNota,
    amministrazioneImposte:amministrazioneImposte,
    amministrazioneAsset: amministrazioneAsset,
    primaNota: primaNota,
    servizi: servizi

  };
  // Determine which data to render based on the props
  const selectedData = Object.entries({
    acquisti,
    preventivi,
    lead,
    ordini,
    budget,
    fornitori,
    amministrazioneDocumenti,
    amministrazioneAsset,
    primaNota,
    amministrazioneImposte,
    servizi
  })
    .filter(([key, value]) => value) // Filter props with `true` values
    .map(([key]) => dataSources[key]) // Map to corresponding data arrays
    .flat(); // Flatten in case multiple props are true

  const path = window.location.pathname;

  return (
    <Box className="FactureSection">
      <Grid container className="FactureSection__inner" spacing={1}>
        {selectedData.map((data, index) => (
          <Grid
            item
            key={index}
            xs={
              path === "/hr/colaboratory"
                ? 3
                : path === "/hr/buste-page"
                ? 4
                : 6
            }
            sm={
              path === "/hr/colaboratory" || path === "/hr/ferie-e-permisse"
                ? 3
                : path === "/hr/buste-page"
                ? 4
                : 6
            }
            md={
              path === "/hr/colaboratory" || path === "/hr/ferie-e-permisse"
                ? 3
                : path === "/hr/buste-page"
                ? 4
                : 6
            }
            lg={
              path === "/hr/colaboratory" || path === "/hr/ferie-e-permisse"
                ? 3
                : path === "/hr/buste-page"
                ? 4
                : 6
            }
          >
            <InvoiceCard
              status={data.status}
              count={data.count}
              amount={data.amount}
              color={data.color}
              iconColor={data.iconColor}
              subfix={data.subfix}
              hr={hr}
            />
            {/* Divider only for the first three cards */}
            {index < selectedData.length - 1 && (
              <div className={classes.divider}></div>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default InvoiceDashboard;