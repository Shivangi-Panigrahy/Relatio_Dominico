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
import { ReactComponent as Blockchainicon } from "../../assets/blockchainicon.svg";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 8,
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
}));

function ProductionsAccordion() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({
    label: "",
    Messg: "",
    json: "",
    navData: "",
  });
  const [dates, setDates] = useState({});

  const handleLabelClick = (label, Messg, json, navData) => {
    setSelectedDetail({ label, Messg, json, navData });
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

  const [position, setPosition] = useState(0); // Track the horizontal position
  const [isDragging, setIsDragging] = useState(false); // Track drag state
  const [startX, setStartX] = useState(0); // Track initial click position
  const cardWidth = 300; // Approximate width of each card
  const containerWidth = 250; // Approximate width of the container (adjust accordingly)
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
  const colors = [
    { background: "#f5e4c3", text: "#fead0f" },
    { background: "#d3eac2", text: "#57c700" },
    { background: "#eec2c2", text: "#de2424" },
  ];
  const colorsMain = [
    { background: "#d3eac2", text: "#57c700" },
    { background: "#f5e4c3", text: "#fead0f" },
    { background: "#eec2c2", text: "#de2424" },

  
  ];

  // State to track the color index for each accordion item
  const [chipColors, setChipColors] = useState({});
  const [chipColorsMain, setChipColorsMain] = useState({});

  // Handle color change for a specific chip
  const handleClick = (id) => {
    setChipColors((prevState) => ({
      ...prevState,
      [id]:
        (prevState[id] || 0) + 1 >= colors.length
          ? 0
          : (prevState[id] || 0) + 1,
    }));
  };
  const handleClickMain = (id) => {
    setChipColorsMain((prevState) => ({
      ...prevState,
      [id]:
        (prevState[id] || 0) + 1 >= colorsMain.length
          ? 0
          : (prevState[id] || 0) + 1,
    }));
  };
  const handleMinMaxDate = (type, date, id) => {
    setDates((prevDates) => ({
      ...prevDates,
      [id]: {
        ...prevDates[id],
        [type === 0 ? "startDate" : "endDate"]: dayjs(date),
      },
    }));
  };
  // Calculate the difference in days for each item
  const calculateDaysDifference = (id) => {
    const start = dayjs(dates[id]?.startDate);
    const end = dayjs(dates[id]?.endDate);
    if (!start.isValid() || !end.isValid()) {
      return 0; // If dates are invalid, return 0
    }
    const diff = end.diff(start, "day"); // Adding 1 to include both start and end dates
    return diff > 0 ? diff : 0; // Ensure non-negative difference
  };
  const getMinEndDate = (id) => {
    const start = dayjs(dates[id]?.startDate);
    return start.isValid() ? start : null;
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
          cursor: "pointer",
        }}
        onMouseDown={handleMouseDown}
      >
        {accordionData.map((item, index) => {
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
                    {/* <Chip label={} className="customChip" />{" "} */}
                    <Chip
                      label={item.status}
                      className="customStatus"
                      size="small"
                      onClick={(event) => {
                        event.stopPropagation(); // Prevent click event from propagating to AccordionSummary
                        handleClickMain(item?.id);
                      }}
                      style={{
                        backgroundColor:
                          colorsMain[chipColorsMain[item?.id] || 0].background,
                        color: colorsMain[chipColorsMain[item?.id] || 0].text,
                      }}
                    />
                    {/* Dynamic status */}
                  </Box>
                </Box>
                <Divider sx={{ margin: "16px 0" }} />
                <Box className="giorniDateBlock">
                  <DatePickerTime
                    label="Data Inizio"
                    value={dates[item.id]?.startDate || null}
                    onDateChange={(formattedDate) => {
                      const validDate = dayjs(formattedDate, "DD/MM/YYYY");
                      if (validDate.isValid()) {
                        handleMinMaxDate(0, validDate, item.id);
                      }
                    }}
                    format="DD/MM/YYYY"
                  />
                  <Typography className="giorni">
                    {calculateDaysDifference(item.id)} <br /> Giorni
                  </Typography>
                  <DatePickerTime
                    label="Data Fine"
                    value={dates[item.id]?.endDate || null}
                    minDate={getMinEndDate(item.id)}
                    onDateChange={(formattedDate) => {
                      const validDate = dayjs(formattedDate, "DD/MM/YYYY");
                      if (validDate.isValid()) {
                        handleMinMaxDate(1, validDate, item.id);
                      }
                    }}
                    format="DD/MM/YYYY"
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
                                        onClick={(event) => {
                                          event.stopPropagation(); // Prevent click event from propagating to AccordionSummary
                                          handleClick(accordionItem.id);
                                        }}
                                        style={{
                                          backgroundColor:
                                            colors[
                                              chipColors[accordionItem.id] || 0
                                            ].background,
                                          color:
                                            colors[
                                              chipColors[accordionItem.id] || 0
                                            ].text,
                                        }}
                                      />
                                      {/* <Chip
                                        label={accordionItem.status}
                                        className="customStatus"
                                        size="small"
                                      /> */}
                                      <CustomCheckbox />
                                    </Box>
                                  </Box>
                                </AccordionSummary>

                                <AccordionDetails className="accordionDetailBox">
                                  {/* Date Filters */}
                                  <Box className="accordionDetailBox__dateListRow">
                                    <Box className="dateCols">
                                      <Box className="accordionDetailBox__dateListCol">
                                        <Typography>da</Typography>
                                        <DatePickerTime
                                          label="Date"
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
                                        <Typography>a</Typography>
                                        <DatePickerTime
                                          label="Date"
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
                                      (detail, index) => {
                                        return (
                                          <>
                                            <Box
                                              className="accordionDetailBox__textListRow"
                                              key={index}
                                              onClick={() => {
                                                handleLabelClick(
                                                  detail.label,
                                                  detail.Messg,
                                                  detail.json || "",
                                                  detail.navData
                                                );
                                              }}
                                            >
                                              <Typography className="title">
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
                                      }
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
                  <Box className="footerButtons">
                    <Button className="button1" type="button">
                      <p className="text">Complata attivita</p>
                    </Button>
                    <Button
                      className={
                        index !== 0 && index !== 1
                          ? "btn blockchainBtn"
                          : "kkk123"
                      }
                      type="button"
                    >
                      <p className="text">
                        {index !== 0 && index !== 1 ? (
                          <BlockchainBtnImg />
                        ) : (
                          <Blockchainicon />
                        )}

                        {index !== 0 && index !== 1 ? (
                          <span className="defaultText">
                            Dati inviati in blockchain
                          </span>
                        ) : (
                          <>
                            <span className="defaultText">
                              Dati inviati in blockchain
                            </span>
                            <span className="hoverText">Controlla invio</span>
                          </>
                        )}
                      </p>

                      {index !== 0 && index !== 1 && (
                        <BlockchainBtnHover className="hoverImg" />
                      )}

                      {/* <img  src={BlockchainBtnHover} alt="" /> */}
                    </Button>
                  </Box>
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
      <AccordionModal
        open={modalOpen}
        onClose={handleCloseModal}
        label={selectedDetail?.label}
        message={selectedDetail?.Messg}
        json={selectedDetail?.json}
        navData={selectedDetail?.navData}
      />
    </Box>
  );
}

export default ProductionsAccordion;
