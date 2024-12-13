import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
  } from "@mui/material";
import TemperatureBarChart from "../../component/TemperatureBarChart/TemperatureBarChart";
import { ReactComponent as InfoiconGrey } from "../../assets/InfoiconGrey.svg";
import { ReactComponent as Alerticon } from "../../assets/Alerticon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SensoriModal = () => {
  return (
    <Box className="sensoriModalAccordion">
    {/* Fixed Accordion */}
    <Accordion disabled>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-fixed-content"
        id="panel-fixed-header"
      >
        <Typography>ID</Typography>
        <Typography>Tipo di sensore</Typography>
        <Typography>Tipo di rilevazione</Typography>
        <Typography>Posizione</Typography>
      </AccordionSummary>
    </Accordion>

    {/* Expandable Accordion 1 */}
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>56843093</Typography>
        <Typography>Centralina N23</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography className="umiditaBtn">UMIDITÀ</Typography>
          <Typography className="umiditaBtn">TEMPERATURA</Typography>
          <Typography className="umiditaBtn">
            CARICA BATTERIA
          </Typography>
        </Box>
        <Typography>Impianto xy, Particella xy</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          className="AccordionDetailsRow"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box className="td">
            <Typography sx={{ width: "150px" }}>
              281124/1439/01
            </Typography>
          </Box>
          <Box className="td">
            <Typography sx={{ width: "30px" }}>
              28/11/20245 h 14:39
            </Typography>
          </Box>
          <Box
            className="td"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="span" className="umiditaBtn">
              UMIDITÀ
            </Typography>
            <Typography sx={{ textAlign: "right" }}>%</Typography>
          </Box>
          <Box className="td">
            <Box className="infoBox">
              <Box className="infoBox__alert">
                <Alerticon />
              </Box>
              <TextField
                className="custominputBox"
                label="CUP"
                variant="outlined"
                value={""}
              />
              <Box className="infoBox__info">
              <InfoiconGrey />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className="AccordionDetailsRow"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box className="td">
            <Typography sx={{ width: "150px" }}>
              281124/1439/01
            </Typography>
          </Box>
          <Box className="td">
            <Typography sx={{ width: "30px" }}>
              28/11/20245 h 14:39
            </Typography>
          </Box>
          <Box
            className="td"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="span" className="umiditaBtn">
              UMIDITÀ
            </Typography>
            <Typography sx={{ textAlign: "right" }}>%</Typography>
          </Box>
          <Box className="td">
          <Box className="infoBox">
              <Box className="infoBox__alert">
                <Alerticon />
              </Box>
              <TextField
                className="custominputBox"
                label="CUP"
                variant="outlined"
                value={""}
              />
              <Box className="infoBox__info">
              <InfoiconGrey />
              </Box>
            </Box>
            
          </Box>

        </Box>
        <Box
          className="AccordionDetailsRow"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box className="td">
            <Typography sx={{ width: "150px" }}>
              281124/1439/01
            </Typography>
          </Box>
          <Box className="td">
            <Typography sx={{ width: "30px" }}>
              28/11/20245 h 14:39
            </Typography>
          </Box>
          <Box
            className="td"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="span" className="umiditaBtn">
              UMIDITÀ
            </Typography>
            <Typography sx={{ textAlign: "right" }}>%</Typography>
          </Box>
          <Box className="td">
          <Box className="infoBox">
              <Box className="infoBox__alert">
                <Alerticon />
              </Box>
              <TextField
                className="custominputBox"
                label="CUP"
                variant="outlined"
                value={""}
              />
              <Box className="infoBox__info">
              <InfoiconGrey />
              </Box>
            </Box>
          </Box>
      
        </Box>
      </AccordionDetails>
    </Accordion>

    {/* Expandable Accordion 2 */}
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>56843093</Typography>
        <Typography>Centralina N23</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography className="umiditaBtn">UMIDITÀ</Typography>
          <Typography className="umiditaBtn">TEMPERATURA</Typography>
          <Typography className="umiditaBtn">
            CARICA BATTERIA
          </Typography>
        </Box>
        <Typography>Impianto xy, Particella xy</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="graphChart">
          <TemperatureBarChart />
        </Box>
      </AccordionDetails>
    </Accordion>
  </Box>
  )
}

export default SensoriModal
