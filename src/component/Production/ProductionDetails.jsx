import React from "react";
import { Box, Grid, Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./ProductionCalendar.scss";
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
  subfix,
  countListTitle,
  countListDate,
  phasetiming,
}) => {
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
        <h4 className="statusText__content__title">{status}</h4>
        {/* {iconColor ? (
                    <h3 style={{ color: color }}>{amount}€</h3>
                ) : (
                    <h3 style={{ color: color }}>{amount}</h3>
                )} */}
        <p className="statusText__content__count">
          {count}
          {/* <span
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
                    </span> */}
        </p>
        {Array.isArray(countListDate) && countListDate.length > 0 && (
          <div className="countList">
            {countListDate.map((item, index) => (
              <div key={index} className="countListItem">
                <p>{item.title}</p>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
        )}
        <div className="phasetimingList">
          {Array.isArray(phasetiming) &&
            phasetiming.map((item, index) => (
              <div key={index} className="phasetimingItem">
                <p>{item.title}</p>
                <span>{item.subtitle}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const ProductionDetails = ({
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
  archive = false,
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
    archive: archive,
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
    archive,
  })
    .filter(([key, value]) => value) // Filter props with `true` values
    .map(([key]) => dataSources[key]) // Map to corresponding data arrays
    .flat(); // Flatten in case multiple props are true
  console.log(archive, "archive");
  return (
    <Box className="FactureSection ProductionArchiveContainer">
      <div container className="FactureSection__inner" spacing={2}>
        {selectedData.map((data, index) => {
          console.log("data: ", data);
          const isLastItem = index === selectedData.length - 1; // Check if it's the last index
          return (
            <div
              key={index} // Always add a unique key for each item
              className={isLastItem ? "LastProdoniItem" : ""}
            >
              <InvoiceCard
                status={data.status}
                count={data.count}
                amount={data.amount}
                color={data.color}
                iconColor={data.iconColor}
                subfix={data?.subfix}
                countListTitle={data.countListTitle}
                countListDate={data.countListDate}
                phasetiming={data.phasetiming}
              />
              {/* Divider only for all except the last card */}
              {!isLastItem && <div className={classes.divider}></div>}
            </div>
          );
        })}
        
      </div>
    </Box>
  );
};
export default ProductionDetails;
