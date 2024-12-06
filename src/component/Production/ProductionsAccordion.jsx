// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Divider from "@mui/material/Divider";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Chip from "@mui/material/Chip";
// import './ProductionsAccordion.scss'
// import Inventorybtn from '../../assets/inventory-btn.svg'
// import { IconButton } from "@mui/material";
// import DatePickerTime from "../../component/filter/DatePicker"; // Date picker component
// import CustomCheckbox from "../table/Checkbox";
// import dayjs from "dayjs";
// import { useState } from "react";

// const Item = styled(Paper)(({ theme }) => ({
//     padding: theme.spacing(2),
//     textAlign: "center",
//     borderRadius: 8,
//     boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
// }));

// function ProductionsAccordion() {
//     const [startDate, setStartDate] = React.useState();
//     console.log('startDate: ', startDate);
//     const [endDate, setEndDate] = useState();
//     const [minMaxData, setMinMaxData] = useState({ minDate: null });

//     // Handlers
//     const handleFilterSelect = (key, value) => {
//         console.log(`Filter applied: ${key} = ${value}`);
//     };

//     const handleMinMaxDate = (type, date) => {
//         if (type === 0) {
//             setStartDate(date);
//         } else {
//             setEndDate(date);
//         }
//     };
//     return (
//         <Box className='ProductionsAccordionBlock'>
//             <Box className='ProductionsAccordionRow'>
//                 <Box className='ProductionsAccordionCard'>
//                     <Box className='ProductionsAccordionCard__inner'>
//                         <Box className='cardHeader'>
//                             <Typography className="title" variant="h3">
//                                 Raccolta UVA
//                             </Typography>
//                             <Box className='cardHeader__buttons'>
//                                 <IconButton>
//                                     <img src={Inventorybtn} alt="Inventorybtn" />
//                                 </IconButton>
//                                 <Chip
//                                     label="In corso"
//                                     className="customChip"
//                                 />
//                             </Box>
//                         </Box>
//                         <Divider sx={{ margin: "16px 0" }} />
//                         <Box className='giorniDateBlock'
//                         >
//                             <DatePickerTime
//                                 label="Data Inizio"
//                                 value={startDate}
//                                 // minDate={minMaxData?.minDate}
//                                 // maxDate={minMaxData?.minDate} // Modify this as needed to set max date
//                                 onDateChange={(formattedDate) => {
//                                     handleMinMaxDate(0, formattedDate);
//                                     handleFilterSelect("StartDate", formattedDate);
//                                     setStartDate(dayjs(formattedDate)); // Ensure formattedDate is a valid dayjs object
//                                 }}
//                             />
//                             <Typography className="giorni">
//                                 7 <br /> Giorni
//                             </Typography>
//                             {/* End Date Picker */}
//                             <DatePickerTime
//                                 label="Data Fine"
//                                 value={endDate}
//                                 // minDate={startDate} // Ensures the End Date can't be earlier than Start Date
//                                 // maxDate={minMaxData?.minDate} // Modify this as needed
//                                 onDateChange={(formattedDate) => {
//                                     handleMinMaxDate(1, formattedDate);
//                                     handleFilterSelect("EndDate", formattedDate);
//                                     setEndDate(dayjs(formattedDate)); // Ensure formattedDate is a valid dayjs object
//                                 }}
//                             />

//                         </Box>

//                         <Box className='ProductionsAccordionList'>
//                             <Accordion className="ProductionsAccordionItem">
//                                 <AccordionSummary
//                                     expandIcon={<ExpandMoreIcon />}
//                                     aria-controls="panel1-content"
//                                     id="panel1-header"
//                                 >
//                                     <Box
//                                         className='contentBox'
//                                     >
//                                         <Typography className="accordionTitle">Registrazione parcelle e dei vigneti</Typography>
//                                         <Chip
//                                             label="In corso"
//                                              className="customStatus"
//                                             size="small"

//                                         />
//                                         <CustomCheckbox />
//                                     </Box>
//                                 </AccordionSummary>
//                                 <AccordionDetails className="accordionDetailBox">
//                                     <Box className='accordionDetailBox__dateListRow'>
//                                         <Box className='dateCols'>
//                                         <Box className='accordionDetailBox__dateListCol'>
//                                             <Typography >
//                                                 da
//                                             </Typography>
//                                             <DatePickerTime
//                                                 label="Data"
//                                                 value={startDate}
//                                                 minDate={null}
//                                                 maxDate={minMaxData?.minDate}
//                                                 onDateChange={(formattedDate) => {
//                                                     handleMinMaxDate(0, formattedDate);
//                                                     handleFilterSelect("StartDate", formattedDate);
//                                                     setStartDate(formattedDate);
//                                                 }}
//                                             />

//                                         </Box>
//                                         <Box className='accordionDetailBox__dateListCol'>
//                                             <Typography>

//                                                 da
//                                             </Typography>
//                                             <DatePickerTime
//                                                 label="Data"
//                                                 value={startDate}
//                                                 minDate={null}
//                                                 maxDate={minMaxData?.minDate}
//                                                 onDateChange={(formattedDate) => {
//                                                     handleMinMaxDate(0, formattedDate);
//                                                     handleFilterSelect("StartDate", formattedDate);
//                                                     setStartDate(formattedDate);
//                                                 }}
//                                             />
//                                         </Box>
//                                         </Box>
//                                         <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                     <Box className='accordionDetailBox__textListRow'>
//                                          <Typography className="accordionDetailBox__textListRow__title">
//                                          Attrezzature
//                                          </Typography>
//                                          <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                     <Box className='accordionDetailBox__textListRow'>
//                                          <Typography className="accordionDetailBox__textListRow__title">
//                                          Attrezzature
//                                          </Typography>
//                                          <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </AccordionDetails>
//                             </Accordion>
//                             <Accordion className="ProductionsAccordionItem">
//                                 <AccordionSummary
//                                     expandIcon={<ExpandMoreIcon />}
//                                     aria-controls="panel1-content"
//                                     id="panel1-header"
//                                 >
//                                     <Box
//                                         className='contentBox'
//                                     >
//                                         <Typography className="accordionTitle">Registrazione parcelle e dei vigneti</Typography>
//                                         <Chip
//                                             label="In corso"
//                                              className="customStatus"
//                                             size="small"

//                                         />
//                                         <CustomCheckbox />
//                                     </Box>
//                                 </AccordionSummary>
//                                 <AccordionDetails className="accordionDetailBox">
//                                     <Box className='accordionDetailBox__dateListRow'>
//                                         <Box className='dateCols'>
//                                         <Box className='accordionDetailBox__dateListCol'>
//                                             <Typography >
//                                                 da
//                                             </Typography>
//                                             <DatePickerTime
//                                                 label="Data"
//                                                 value={startDate}
//                                                 minDate={null}
//                                                 maxDate={minMaxData?.minDate}
//                                                 onDateChange={(formattedDate) => {
//                                                     handleMinMaxDate(0, formattedDate);
//                                                     handleFilterSelect("StartDate", formattedDate);
//                                                     setStartDate(formattedDate);
//                                                 }}
//                                             />

//                                         </Box>
//                                         <Box className='accordionDetailBox__dateListCol'>
//                                             <Typography>

//                                                 da
//                                             </Typography>
//                                             <DatePickerTime
//                                                 label="Data"
//                                                 value={startDate}
//                                                 minDate={null}
//                                                 maxDate={minMaxData?.minDate}
//                                                 onDateChange={(formattedDate) => {
//                                                     handleMinMaxDate(0, formattedDate);
//                                                     handleFilterSelect("StartDate", formattedDate);
//                                                     setStartDate(formattedDate);
//                                                 }}
//                                             />
//                                         </Box>
//                                         </Box>
//                                         <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                     <Box className='accordionDetailBox__textListRow'>
//                                          <Typography className="accordionDetailBox__textListRow__title">
//                                          Attrezzature
//                                          </Typography>
//                                          <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                     <Box className='accordionDetailBox__textListRow'>
//                                          <Typography className="accordionDetailBox__textListRow__title">
//                                          Attrezzature
//                                          </Typography>
//                                          <Box className='accordionDetailBox__countBox'>
//                                             <Typography className="accordionDetailBox__countBox__text" >
//                                             24g
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </AccordionDetails>
//                             </Accordion>


//                         </Box>
//                         {/* Accordion 2 */}

//                     </Box>
//                 </Box>



//             </Box>
//         </Box>
//     );
// }

// export default ProductionsAccordion;


// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Chip from "@mui/material/Chip";
// import "./ProductionsAccordion.scss";
// import Inventorybtn from "../../assets/inventory-btn.svg";
// import { IconButton } from "@mui/material";
// import DatePickerTime from "../../component/filter/DatePicker";
// import CustomCheckbox from "../table/Checkbox";
// import accordionData from "../../utils/accordionData.json"
// import dayjs from "dayjs";
// import { useState } from "react";

// const Item = styled(Paper)(({ theme }) => ({
//     padding: theme.spacing(2),
//     textAlign: "center",
//     borderRadius: 8,
//     boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
// }));

// // const accordionData = [
// //   {
// //     id: 1,
// //     title: "Registrazione parcelle e dei vigneti",
// //     status: "In corso",
// //     count: "24g",
// //     details: [
// //       { label: "Attrezzature", count: "24g" },
// //       { label: "Attrezzature", count: "24g" },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     title: "Monitoraggio delle uve raccolte",
// //     status: "In corso",
// //     count: "18g",
// //     details: [
// //       { label: "Processo 1", count: "18g" },
// //       { label: "Processo 2", count: "18g" },
// //     ],
// //   },
// // ];

// function ProductionsAccordion() {
//     const [startDate, setStartDate] = useState();
//     const [endDate, setEndDate] = useState();

//     // Handlers
//     const handleFilterSelect = (key, value) => {
//         console.log(`Filter applied: ${key} = ${value}`);
//     };

//     const handleMinMaxDate = (type, date) => {
//         if (type === 0) {
//             setStartDate(date);
//         } else {
//             setEndDate(date);
//         }
//     };

//     return (
//         <Box className="ProductionsAccordionBlock">
//             <Box className="ProductionsAccordionRow">
//                 {accordionData.map((item) => {
//                     console.log('item: ', item);
//                     return (
//                         <Box className="ProductionsAccordionCard">
//                             <Box className="ProductionsAccordionCard__inner">
//                                 <Box className="cardHeader">
//                                     <Typography className="title" variant="h3">
//                                         Raccolta UVA
//                                     </Typography>
//                                     <Box className="cardHeader__buttons">
//                                         <IconButton>
//                                             <img src={Inventorybtn} alt="Inventorybtn" />
//                                         </IconButton>
//                                         <Chip label="In corso" className="customChip" />
//                                     </Box>
//                                 </Box>
//                                 <Divider sx={{ margin: "16px 0" }} />
//                                 <Box className="giorniDateBlock">
//                                     <DatePickerTime
//                                         label="Data Inizio"
//                                         value={startDate}
//                                         onDateChange={(formattedDate) => {
//                                             handleMinMaxDate(0, formattedDate);
//                                             handleFilterSelect("StartDate", formattedDate);
//                                             setStartDate(dayjs(formattedDate));
//                                         }}
//                                     />
//                                     <Typography className="giorni">
//                                         7 <br /> Giorni
//                                     </Typography>
//                                     <DatePickerTime
//                                         label="Data Fine"
//                                         value={endDate}
//                                         onDateChange={(formattedDate) => {
//                                             handleMinMaxDate(1, formattedDate);
//                                             handleFilterSelect("EndDate", formattedDate);
//                                             setEndDate(dayjs(formattedDate));
//                                         }}
//                                     />
//                                 </Box>
//                                 <Box className="ProductionsAccordionList">
//                                     <Accordion className="ProductionsAccordionItem" key={item.id}>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls={`panel${item.id}-content`}
//                                             id={`panel${item.id}-header`}
//                                         >
//                                             <Box className="contentBox">
//                                                 <Typography className="accordionTitle">
//                                                     {item.title}
//                                                 </Typography>
//                                                 <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
//                                                     <Chip
//                                                         label={item.status}
//                                                         className="customStatus"
//                                                         size="small"
//                                                     />
//                                                     <CustomCheckbox />
//                                                 </Box>
//                                             </Box>
//                                         </AccordionSummary>
//                                         <AccordionDetails className="accordionDetailBox">
//                                             <Box className="accordionDetailBox__dateListRow">
//                                                 <Box className="dateCols">
//                                                     <Box className="accordionDetailBox__dateListCol">
//                                                         <Typography>da</Typography>
//                                                         <DatePickerTime
//                                                             label="Data"
//                                                             value={startDate}
//                                                             onDateChange={(formattedDate) => {
//                                                                 handleMinMaxDate(0, formattedDate);
//                                                                 handleFilterSelect("StartDate", formattedDate);
//                                                                 setStartDate(formattedDate);
//                                                             }}
//                                                         />
//                                                     </Box>
//                                                     <Box className="accordionDetailBox__dateListCol">
//                                                         <Typography>da</Typography>
//                                                         <DatePickerTime
//                                                             label="Data"
//                                                             value={startDate}
//                                                             onDateChange={(formattedDate) => {
//                                                                 handleMinMaxDate(0, formattedDate);
//                                                                 handleFilterSelect("StartDate", formattedDate);
//                                                                 setStartDate(formattedDate);
//                                                             }}
//                                                         />
//                                                     </Box>
//                                                 </Box>
//                                                 <Box className="accordionDetailBox__countBox">
//                                                     <Typography className="accordionDetailBox__countBox__text">
//                                                         {item.count}
//                                                     </Typography>
//                                                 </Box>
//                                             </Box>
//                                             {item.accordionData.map((detail) => {
//                                                 return (
//                                                     <>
//                                                         {detail.details.map((item, index) => {
//                                                             return (
//                                                                 <Box
//                                                                     className="accordionDetailBox__textListRow"
//                                                                     key={index}
//                                                                 >
//                                                                     <Typography className="accordionDetailBox__textListRow__title">
//                                                                         {item.label}
//                                                                     </Typography>
//                                                                     <Box className="accordionDetailBox__countBox">
//                                                                         <Typography className="accordionDetailBox__countBox__text">
//                                                                             {item.count}
//                                                                         </Typography>
//                                                                     </Box>
//                                                                 </Box>
//                                                             );
//                                                         })}
//                                                     </>
//                                                 );
//                                             })}

//                                         </AccordionDetails>
//                                     </Accordion>
//                                 </Box>
//                             </Box>
//                         </Box>
//                     )
//                 })}
//             </Box>
//         </Box>
//     );
// }

// export default ProductionsAccordion;


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
import accordionData from "../../utils/accordionData.json"
import dayjs from "dayjs";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    borderRadius: 8,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
}));

function ProductionsAccordion() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

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

    return (
        <Box className="ProductionsAccordionBlock">
            <Box className="ProductionsAccordionRow">
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
                                        <Chip label={item.status} className="customChip" /> {/* Dynamic status */}
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
                                            <Accordion className="ProductionsAccordionItem" key={item.id}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls={`panel${item.id}-content`}
                                                    id={`panel${item.id}-header`}
                                                >
                                                    <Box className="contentBox">
                                                        <Typography className="accordionTitle">
                                                            {item.title}
                                                        </Typography>
                                                        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
                                                                        handleFilterSelect("StartDate", formattedDate);
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
                                                                        handleFilterSelect("EndDate", formattedDate);
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
                                        )
                                    })}
                                    <Box className='footerButtons'>
                                        <Button className="button1" type="button">
                                            <p className="text">Complata</p>
                                        </Button>
                                        <Button className="button2" type="button">
                                            <p className="text">button <span className="hoverHide">ASdfQWR</span></p>
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default ProductionsAccordion;
