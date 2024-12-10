import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Chip from "@mui/material/Chip";
import "./ProductionsAccordion.scss";
import Inventorybtn from "../../assets/inventory-btn.svg";
import { Button, IconButton } from "@mui/material";
import DatePickerTime from "../../component/filter/DatePicker";
import CustomCheckbox from "../table/Checkbox";
import accordionData from "../../utils/accordionData.json";
import dayjs from "dayjs";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccordionModal from "../../pages/Production/AccordionModal";
import { ReactComponent as BlockchainBtnImg } from "../../assets/BlockchainBtnImg.svg";
import { ReactComponent as BlockchainBtnHover } from "../../assets/BlockchainBtnHover.svg";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 8,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
}));

function ProductionsArchive() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({
    label: "",
    Messg: "",
    json: "",
  });

  const handleLabelClick = (label, Messg, json) => {
    setSelectedDetail({ label, Messg, json });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDetail({ label: "", Messg: "", json: "" });
  };

  // Handlers
  const handleFilterSelect = (key, value) => {
    console.log(`Filter applied: ${key} = ${value}`);
  };

  const handleMinMaxDate = (type, date) => {
    if (type === 0) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };
  const [position, setPosition] = useState(0); // Track the horizontal position
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const [startX, setStartX] = useState(0); // Track initial click position
  const cardWidth = 300; // Approximate width of each card
  const containerWidth = 900; // Approximate width of the container (adjust accordingly)
  const totalCards = accordionData.length;
  const maxPosition = -(totalCards * cardWidth - containerWidth);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX); // Capture the starting X position
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startX; // Calculate horizontal movement
      setPosition((prev) => {
        let newPosition = prev + deltaX;
        if (newPosition > 0) newPosition = 0; // Prevent moving past the first box
        if (newPosition < maxPosition) newPosition = maxPosition; // Prevent moving past the last box
        return newPosition;
      });
      setStartX(event.clientX); // Reset start position for smooth dragging
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
  };

  return (
    <Box
      className="ProductionsAccordionBlock"
      sx={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Box
        className="ProductionsAccordionRow"
        sx={{
          display: "flex",
          transform: `translateX(${position}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease", // Smooth return only if not dragging
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        <Box className="ProductionsAccordionCard">
          <Box className="ProductionsAccordionCard__inner">
            {/* Header Section */}
            <Box className="cardHeader">
              <Typography className="title" variant="h3">
                Cedolino di produzione
              </Typography>
              <Box className="cardHeader__buttons">
                <IconButton>
                  <img src={Inventorybtn} alt="Inventorybtn" />
                </IconButton>
                <Chip label={"Completo"} className="customChip" />{" "}
                {/* Dynamic status */}
              </Box>
            </Box>

            <Divider sx={{ margin: "16px 0" }} />

            {/* Date Picker Section */}
            <Box className="giorniDateBlock">
              <DatePickerTime
                label="Data Inizio"
                value={startDate}
                onDateChange={(formattedDate) => {
                  handleMinMaxDate(0, formattedDate);
                  handleFilterSelect("StartDate", formattedDate);
                  setStartDate(dayjs(formattedDate));
                }}
              />
              <Typography className="giorni">
                7 <br /> Giorni
              </Typography>
              <DatePickerTime
                label="Data Fine"
                value={endDate}
                onDateChange={(formattedDate) => {
                  handleMinMaxDate(1, formattedDate);
                  handleFilterSelect("EndDate", formattedDate);
                  setEndDate(dayjs(formattedDate));
                }}
              />
            </Box>

            {/* Results Section */}
            <Box className="resultsSection">
              <Box className="resultItem">
                <Typography className="resultTitle">Prodotto</Typography>
                <Typography className="resultValue">Zafferano</Typography>
                <Typography className="resultWeight">4986 Kg</Typography>
              </Box>

              <Box className="resultItem">
                <Typography className="resultTitle">Semilavorati</Typography>
                <Box className="resultDetails">
                  <Typography className="detail">Utilizzati: 732 Kg</Typography>
                  <Typography className="detail">In stock: 58 Kg</Typography>
                </Box>
              </Box>

              <Box className="resultItem">
                <Typography className="resultTitle">Scarti</Typography>
                <Box className="resultDetails">
                  <Typography className="detail">Distrutti: 732 Kg</Typography>
                  <Typography className="detail">
                    Da distruggere: 58 Kg
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ margin: "16px 0" }} />

            {/* Data Section */}
            <Box className="dataSection">
              <Box className="dataMessage">
                <Typography className="successMessage">
                  Dati inviati correttamente
                </Typography>
                <Typography className="dataDate">il 20/11/2024</Typography>
              </Box>
              <Typography className="dataHash">
                8F87B6F61E7D7B9C86D992834B5BA454B4BA5B...
              </Typography>
            </Box>

            {/* Button Section */}
            <Box className="buttonSection">
              <Button
                className="generateButton"
                variant="contained"
                color="success"
              >
                Genera Qrcode
              </Button>
            </Box>
          </Box>
        </Box>

        {accordionData.map((item) => {
          return (
            <Box className="ProductionsAccordionCard" key={item.id}>
              <Box className="ProductionsAccordionCard__inner">
                <Box className="cardHeader">
                  <Typography className="title" variant="h3">
                    {item.maintitle} {/* Dynamic title */}
                  </Typography>
                  <Box className="cardHeader__buttons">
                    <IconButton>
                      <img src={Inventorybtn} alt="Inventorybtn" />
                    </IconButton>
                    <Chip label={item.status} className="customChip" />{" "}
                    {/* Dynamic status */}
                  </Box>
                </Box>
                <Divider sx={{ margin: "16px 0" }} />
                <Box className="giorniDateBlock">
                  <DatePickerTime
                    label="Data Inizio"
                    value={startDate}
                    onDateChange={(formattedDate) => {
                      handleMinMaxDate(0, formattedDate);
                      handleFilterSelect("StartDate", formattedDate);
                      setStartDate(dayjs(formattedDate));
                    }}
                  />
                  <Typography className="giorni">
                    7 <br /> Giorni
                  </Typography>
                  <DatePickerTime
                    label="Data Fine"
                    value={endDate}
                    onDateChange={(formattedDate) => {
                      handleMinMaxDate(1, formattedDate);
                      handleFilterSelect("EndDate", formattedDate);
                      setEndDate(dayjs(formattedDate));
                    }}
                  />
                </Box>
                <Box className="ProductionsAccordionList">
                  {item?.accordion?.map((item) => {
                    return (
                      <Accordion
                        className="ProductionsAccordionItem"
                        key={item.id}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${item.id}-content`}
                          id={`panel${item.id}-header`}
                        >
                          <Box className="contentBox">
                            <Typography className="accordionTitle">
                              {item.title}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                gap: "20px",
                                alignItems: "center",
                              }}
                            >
                              <Chip
                                label={item.status}
                                className="customStatus"
                                size="small"
                              />
                              <CustomCheckbox />
                            </Box>
                          </Box>
                        </AccordionSummary>

                        <AccordionDetails className="accordionDetailBox">
                          <Box className="accordionDetailBox__dateListRow">
                            <Box className="dateCols">
                              <Box className="accordionDetailBox__dateListCol">
                                <Typography>da</Typography>
                                <DatePickerTime
                                  label="Data"
                                  value={startDate}
                                  onDateChange={(formattedDate) => {
                                    handleMinMaxDate(0, formattedDate);
                                    handleFilterSelect(
                                      "StartDate",
                                      formattedDate
                                    );
                                    setStartDate(formattedDate);
                                  }}
                                />
                              </Box>
                              <Box className="accordionDetailBox__dateListCol">
                                <Typography>da</Typography>
                                <DatePickerTime
                                  label="Data"
                                  value={endDate}
                                  onDateChange={(formattedDate) => {
                                    handleMinMaxDate(1, formattedDate);
                                    handleFilterSelect(
                                      "EndDate",
                                      formattedDate
                                    );
                                    setEndDate(formattedDate);
                                  }}
                                />
                              </Box>
                            </Box>
                            <Box className="accordionDetailBox__countBox">
                              <Typography className="accordionDetailBox__countBox__text">
                                {item.count}
                              </Typography>
                            </Box>
                          </Box>
                          {item?.details.map((detail, index) => {
                            return (
                              <>
                                <Box
                                  className="accordionDetailBox__textListRow"
                                  key={index}
                                  onClick={() => {
                                    handleLabelClick(
                                      detail.label,
                                      detail.Messg,
                                      detail.json || ""
                                    );
                                  }}
                                >
                                  <Typography className="accordionDetailBox__textListRow__title">
                                    {detail.label}
                                  </Typography>
                                  <Box className="accordionDetailBox__countBox">
                                    <Typography className="accordionDetailBox__countBox__text">
                                      {detail.count}
                                    </Typography>
                                  </Box>
                                </Box>
                              </>
                            );
                          })}
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
            
                
                </Box>
              </Box>
              <Box className="slideArrowBtn">
                <Button className="button">
                  <ArrowForwardIosIcon />
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default ProductionsArchive;
