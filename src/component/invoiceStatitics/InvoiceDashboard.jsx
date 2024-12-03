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
const InvoiceCard = ({ status, count, amount, color, iconColor, subfix }) => {
  return (
    <div className="statusText">
      <div className="statusText__img">
        {iconColor ? (
          <>
            <CircularProgress
              variant="determinate"
              value={75}
              style={{ color: iconColor }}
            />
            <span className="text-value" style={{ color: iconColor }}>
              18%
            </span>
          </>
        ) : null}
      </div>
      <div className="statusText__content">
        <h4>{status}</h4>
        {iconColor ? (
          <h3 style={{ color: color }}>{amount}€</h3>
        ) : (
          <h3 style={{ color: color }}>{amount}</h3>
        )}
        <h5
          style={
            window.location.href.includes("/hr/buste-page")
              ? {
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: '"Public Sans", sans-serif',
                color: "#100919",
              }
              : {
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: '"Barlow", sans-serif',
                color: "#100919",
              }
          }
        >
          {count}
          <span
            style={
              window.location.href.includes("/hr/buste-page") || window.location.href.includes("/vendite/preventivi") | window.location.href.includes("/vendite/budget") || window.location.href.includes("/vendite/ordini") ||
                window.location.href.includes("/acquisti/budget") || window.location.href.includes("/acquisti/ordini") || window.location.href.includes("/acquisti/preventivi")
                || window.location.href.includes("/amministrazione/documenti") || window.location.href.includes("/amministrazione/asset")
                || window.location.href.includes("/cataloghi/servizi") || window.location.href.includes("/cataloghi/prodotti") ||
                window.location.href.includes("/amministrazione/imposte/Reteizzazione")
                ? {
                  fontWeight: "400",
                  fontSize: "16px",
                  fontFamily: '"Barlow", sans-serif',
                  color: "#666666",
                  paddingLeft: "5px",
                }
                : {
                  paddingLeft: "5px",
                  fontWeight: "700",
                  fontSize: "20px",
                  fontFamily: '"Barlow", sans-serif',
                  color: "#100919",
                }
            }
          >
            {count === ""
              ? " "
              : window.location.href.includes("/amministrazione/documenti")
                ? "Documenti"
                : window.location.href.includes("/cataloghi/servizi")
                  ? "Servizi"
                  : window.location.href.includes("/hr/ferie-e-permisse")
                    ? subfix
                    : window.location.href.includes("/hr/buste-page")
                      ? "Buste paga"
                      : window.location.href.includes("/vendite/preventivi") ? "preventivi" :
                        window.location.href.includes("/vendite/budget") ? "budget" :
                          window.location.href.includes("/vendite/ordini") ? "ordini" :
                            window.location.href.includes("/acquisti/budget") ? "budget" :
                              window.location.href.includes("/acquisti/ordini") ? "ordini" :
                                window.location.href.includes("/acquisti/preventivi") ? "preventivi" :
                                  window.location.href.includes("/amministrazione/asset") ? "asset" :
                                    window.location.href.includes("/cataloghi/prodotti") ? "prodotti" :
                                      window.location.href.includes("/amministrazione/imposte/Reteizzazione") ? "rate" :
                                        ""}
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
  amministrazioneImposte = false,
  reteizzazione = false,
  servizi = false,
  mezzi = false,
  attrezzature = false,
}) => {
  const classes = useStyles();

  console.log(amministrazioneDocumenti, "amministrazioneDocumenti");

  const dataSources = {
    acquisti: acquisti,
    preventivi: preventivi,
    lead: lead,
    ordini: ordini,
    budget: budget,
    fornitori: fornitori,
    amministrazioneDocumenti: amministrazioneDocumenti,
    amministrazioneAsset: amministrazioneAsset,
    primaNota: primaNota,
    amministrazioneImposte: amministrazioneImposte,
    amministrazioneAsset: amministrazioneAsset,
    primaNota: primaNota,
    servizi: servizi,
    mezzi: mezzi,
    attrezzature: attrezzature,
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
    servizi,
    mezzi,
    attrezzature
  })
    .filter(([key, value]) => value) // Filter props with `true` values
    .map(([key]) => dataSources[key]) // Map to corresponding data arrays
    .flat(); // Flatten in case multiple props are true

  return (
    <Box className="FactureSection">
      <Grid container className="FactureSection__inner" spacing={2}>
        {selectedData.map((data, index) => (
          <Grid item lg={reteizzazione ? 4 : 3} md={6} xs={12} key={index}>
            <InvoiceCard
              status={data.status}
              count={data.count}
              amount={data.amount}
              color={data.color}
              iconColor={data.iconColor}
              subfix={data?.subfix}
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
