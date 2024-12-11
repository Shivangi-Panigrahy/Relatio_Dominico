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
import accordionData from "../../utils/ArchiveProductionData.json";
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
  const opacityDetails=window.location.href.includes("/production/archive/details")

  return (
    <Box
      className={opacityDetails?"ProductionsAccordionBlock":""}
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
            <Typography className="accordionSubtitle">Risultati</Typography>
            {/* Results Section */}
            <Box className="resultsSection">
              <Box className="resultItem">
                <div className="resultItem_valuesContainer">
                  <Typography className="resultTitle">Prodotto</Typography>
                  <Typography className="resultValue">Zafferano</Typography>
                </div>
                <div className="resultItem_valuesContainer">
                  <Typography className="resultTitle">Prodotti</Typography>
                  <Typography className="resultWeight">4986 Kg</Typography>
                </div>
              </Box>
              <Box className="resultItem threeResultsValues">
                <Box className="resultDetails">
                  <Typography className="resultTitle">Semilavorati</Typography>
                  <Typography className="resultWeight">Germogli</Typography>
                </Box>
                <Box className="resultDetails">
                  <Typography className="resultTitle">Utilizzati</Typography>
                  <Typography className="detail">
                    <span style={{ fontWeight: "700" }}> 732</span> Kg
                  </Typography>
                  <Typography className="detail">In stock: 58 Kg</Typography>
                </Box>
                <Box className="resultDetails">
                  <Typography className="resultTitle">In stock</Typography>
                  <Typography className="detail">
                    <span style={{ fontWeight: "700" }}> 58</span> Kg
                  </Typography>
                  <Typography className="detail">In stock: 58 Kg</Typography>
                </Box>
              </Box>
              <Box className="resultItem threeResultsValues">
                <Box className="resultDetails">
                  <Typography className="resultTitle">Semilavorati</Typography>
                  <Typography className="resultWeight">Germogli</Typography>
                </Box>
                <Box className="resultDetails">
                  <Typography className="resultTitle">Utilizzati</Typography>
                  <Typography className="detail">
                    <span style={{ fontWeight: "700" }}> 732</span> Kg
                  </Typography>
                  <Typography className="detail">In stock: 58 Kg</Typography>
                </Box>
                <Box className="resultDetails">
                  <Typography className="resultTitle">In stock</Typography>
                  <Typography className="detail">
                    <span style={{ fontWeight: "700" }}> 58</span> Kg
                  </Typography>
                  <Typography className="detail">In stock: 58 Kg</Typography>
                </Box>
              </Box>
            </Box>
            <Typography className="accordionSubtitle">Risultati</Typography>

            {/* <Divider sx={{ margin: "16px 0" }} /> */}

            {/* Data Section */}
            <Box className="dataSection">
              <Box className="dataMessage">
                <Typography className="successMessage">
                  Dati inviati correttamente
                </Typography>
                <Typography className="dataDate">il 20/11/2024</Typography>
              </Box>
              <Typography className="dataHash">
                8fb7667496495bf679060883e61969e5464a4bba3544af65697db44b7b60d7cf
              </Typography>
            </Box>

            {/* Button Section */}
            <Box className="buttonSection">
              <Button
                className="greenButton "
                variant="contained"
                color="success"
                style={{ width: "100%" }}
              >
                Genera Qrcode
              </Button>
            </Box>
          </Box>
          <Box className="slideArrowBtn">
            <Button className="button">
              <ArrowForwardIosIcon />
            </Button>
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
                  {item?.subtitle?.length > 0 ? (
                    item.subtitle.map((subtitleItem, index) => {
                      return (
                        <div key={index}>
                          <Typography className="accordionSubtitle">
                            {subtitleItem.name}
                          </Typography>

                          {subtitleItem?.accordion?.length > 0 ? (
                            subtitleItem.accordion.map((accordionItem) => (
                              <Accordion
                                className="ProductionsAccordionItem"
                                key={accordionItem.id}
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls={`panel${accordionItem.id}-content`}
                                  id={`panel${accordionItem.id}-header`}
                                >
                                  <Box className="contentBox">
                                    <Typography className="accordionTitle">
                                      {accordionItem.title}
                                    </Typography>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        gap: "20px",
                                        alignItems: "center",
                                      }}
                                    >
                                      <Chip
                                        label={accordionItem.status}
                                        className="customStatus"
                                        size="small"
                                      />
                                    </Box>
                                  </Box>
                                </AccordionSummary>

                                <AccordionDetails className="accordionDetailBox">
                                  {/* Date Filters */}
                                  <Box className="accordionDetailBox__dateListRow">
                                    <Box className="dateCols">
                                      <Box className="accordionDetailBox__dateListCol">
                                        <Typography>Start Date</Typography>
                                        <DatePickerTime
                                          label="Start Date"
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
                                        <Typography>End Date</Typography>
                                        <DatePickerTime
                                          label="End Date"
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

                                    {/* Item Count */}
                                    <Box className="accordionDetailBox__countBox">
                                      <Typography className="accordionDetailBox__countBox__text">
                                        {accordionItem.count}
                                      </Typography>
                                    </Box>
                                  </Box>

                                  {/* Render Item Details */}
                                  {accordionItem?.details?.length > 0 ? (
                                    accordionItem.details.map(
                                      (detail, index) => (
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
                                      )
                                    )
                                  ) : (
                                    <Typography>
                                      No details available
                                    </Typography>
                                  )}
                                </AccordionDetails>
                              </Accordion>
                            ))
                          ) : (
                            <Typography>No accordion data available</Typography>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <Typography>No subtitles available</Typography>
                  )}

                  {/* Footer buttons */}
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
