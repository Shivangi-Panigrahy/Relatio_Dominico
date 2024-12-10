import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AcquistiBudget from "../../pages/Acquisti/Budget/Budget";
import AcquistiPreventivi from "../../pages/Acquisti/Preventivi/Preventivi";
import AcquistiOrdini from "../../pages/Acquisti/Ordini/Ordini";
import VenditeBudget from "../../pages/Vendite/Budget/Budget";
import VenditePreventivi from "../../pages/Vendite/Preventivi/Preventivi";
import VenditeOrdini from "../../pages/Vendite/Ordini/Ordini";
import "./Documenti.scss";
import SearchTable from "../filter/Searchtable";
import dayjs from "dayjs";
import BustaPage from "../../pages/HR/BustePage/BustePage";

const Documenti = ({ data }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeFilters, setActiveFilters] = useState({});
  const [searchFilters, setSearchFilters] = useState({});
  const [activeSubTab, setSubActiveTab] = useState("");
  const [value, setValue] = React.useState(-1);
  const [page, setPage] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [valoreFilter, setValoreFilter] = useState("");

  const handleValoreFilter = (selectedValore) => {
    setValoreFilter(selectedValore);
    setPage(0);
  }

  // Helper function to determine current route
  const getCurrentRoute = () => {
    const path = window.location.pathname;
    return {
      isProgettiTaskPage: path.includes("/attivita/progetti/Task"),
      isProgettiAssetPage: path.includes("/attivita/progetti/Asset"),
      isProgettiDocumentiPage: path.includes("/attivita/progetti/Documenti"),
      isHREquipagiamentoPage: path.includes("/hr/sub-colaboratory/Equipagiamento"),
      isHRDocumentiPage: path.includes("/hr/sub-colaboratory/Documenti"),
      isAcquistiDocumentiPage: path.includes("/acquisti/fornitori/Documenti"),
      isVenditeDocumentiPage: path.includes("/vendite/sub-lead/Documenti"),
      isAnagraficheLeadDocumentiPage: path.includes("/anagrafiche/sub-lead/Documenti"),
      isAnagraficheClientiDocumentiPage: path.includes("/angrafiche/clienti/Documenti"),
      isAnagraficheFornitoriDocumentiPage: path.includes("/angrafiche/fornitori/Documenti"),
      isAnagraficheCollaboratoriDocumentiPage: path.includes("/angrafiche/sub-colaboratory/Documenti"),
      isAnagraficheEquipagiamentoDocumentiPage:path.includes("/angrafiche/sub-colaboratory/Equipagiamento"),
    };
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  // Determine sections visibility based on route
  const getSections = () => {
    const route = getCurrentRoute();

    const sections = [];


    // Equipagiamento route
    if (route.isHREquipagiamentoPage) {
      sections.push(
        { label: "Attrezzature", content: "Attrezzature content" },
        { label: "Mezzi", content: "Mezzi content" }
      );
    }

    // HR Documenti route
    if (route.isHRDocumentiPage) {
      sections.push(
        { label: "Busta Page", content: <BustaPage /> },
        { label: "Budget", content: <AcquistiBudget /> },
        { label: "Preventivi", content: <AcquistiPreventivi /> },
        { label: "Ordini", content: <AcquistiOrdini /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }

    // Acquisti Documenti route
    if (route.isAcquistiDocumentiPage) {
      sections.push(
        { label: "Budget", content: <AcquistiBudget /> },
        { label: "Preventivi", content: <AcquistiPreventivi /> },
        { label: "Ordini", content: <AcquistiOrdini /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }

    // Vendite Documenti route
    if (route.isVenditeDocumentiPage) {
      sections.push(
        { label: "Budget", content: <VenditeBudget /> },
        { label: "Preventivi", content: <VenditePreventivi /> },
      );
    }

    // Progetti Task route
    if (route.isProgettiTaskPage) {
      sections.push(
        { label: "Category 1", content: "Category 1 content" },
        { label: "Category 2", content: "Category 2 content" },
        { label: "Category 3", content: "Category 3 content" }
      );
    }

    if (route.isProgettiAssetPage) {
      sections.push(
        { label: "Collaboratori", content: "Collaboratori content" },
        { label: "Mezzi", content: "Mezzi content" },
        { label: "Attrezzature", content: "Attrezzature details" },
        { label: "Prodotti", content: "Prodotti information" }
      );
    }

    if (route.isProgettiDocumentiPage) {
      sections.push(
        { label: "Budget", content: <VenditeBudget /> },
        { label: "Preventivi", content: <VenditePreventivi /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }

    if (route.isAnagraficheLeadDocumentiPage) {
      sections.push(
        { label: "Budget", content: <VenditeBudget /> },
        { label: "Preventivi", content: <VenditePreventivi /> },
      );
    }

    if (route.isAnagraficheClientiDocumentiPage) {
      sections.push(
        { label: "Budget", content: <AcquistiBudget /> },
        { label: "Preventivi", content: <AcquistiPreventivi /> },
        { label: "Ordini", content: <AcquistiOrdini /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }

    if (route.isAnagraficheFornitoriDocumentiPage) {
      sections.push(
        { label: "Budget", content: <AcquistiBudget /> },
        { label: "Preventivi", content: <AcquistiPreventivi /> },
        { label: "Ordini", content: <AcquistiOrdini /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }

    if (route.isAnagraficheCollaboratoriDocumentiPage) {
      sections.push(
        { label: "Busta Page", content: <BustaPage /> },
        { label: "Budget", content: <AcquistiBudget /> },
        { label: "Preventivi", content: <AcquistiPreventivi /> },
        { label: "Ordini", content: <AcquistiOrdini /> },
        { label: "Documenti contabili", content: "Documenti contabili details" },
        { label: "DDT", content: "DDT-related information" }
      );
    }
      if (route.isAnagraficheEquipagiamentoDocumentiPage) {
      sections.push(
        { label: "Attrezzature", content: "Attrezzature content" },
        { label: "Mezzi", content: "Mezzi content" }
      );
    }

    return sections;
  };

  // Determine stats based on route
  const getStats = () => {
    const route = getCurrentRoute();
    const baseStats = [];

    if (route.isVenditeDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 }
      );
    }

    if (route.isAcquistiDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }

    if (route.isHRDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }
    if (route.isHREquipagiamentoPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }

    if (route.isProgettiTaskPage) {
      baseStats.push(
        { label: "Fasi", value: 12604 },
        { label: "Task totalli", value: 12604 },
        { label: "Task Da completi", value: 604 },
        { label: "Task completi", value: 604 }
      );
    }
    if (route.isAnagraficheLeadDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 }
      );
    }

    if (route.isAnagraficheClientiDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }

    if (route.isAnagraficheFornitoriDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }

    if (route.isAnagraficheCollaboratoriDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }

    if (route.isAnagraficheEquipagiamentoDocumentiPage) {
      baseStats.push(
        { label: "Documenti", value: 604 },
        { label: "Budget", value: 604 },
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 }
      );
    }




    return baseStats;
  };

  // Filtering logic
  const applyFilters = () => {
    let result = data;

    if (searchFilters?.searchTerm) {
      const term = searchFilters.searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.titolo.toLowerCase().includes(term) ||
          item.clienti.toLowerCase().includes(term) ||
          item.fornitori.toLowerCase().includes(term)
      );
    }

    if (searchFilters.StartDate && searchFilters.EndDate) {
      const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY");
      const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY");

      if (startDate.isValid() && endDate.isValid()) {
        result = result?.filter((item) => {
          const itemDate = dayjs(item?.data, "DD/MM/YYYY");
          return (
            itemDate.isValid() &&
            itemDate.isBetween(startDate, endDate, null, "[]")
          );
        });
      }
    }

    // Additional filter conditions
    if (searchFilters.valore) {
      result = result.filter((item) => item.valore === searchFilters.valore);
    }
    if (searchFilters.numero) {
      result = result.filter(
        (item) => item.numero === parseInt(searchFilters.numero)
      );
    }
    if (searchFilters.stato) {
      result = result.filter((item) => item.stato === searchFilters.stato);
    }
    if (searchFilters.clienti) {
      result = result.filter((item) => item.clienti === searchFilters.clienti);
    }

    setFilteredData(result);
    setPage(0);
  };

  // Memoize sections and stats to prevent unnecessary re-renders
  const sections = useMemo(getSections, [window.location.pathname]);
  const stats = useMemo(getStats, [window.location.pathname]);

  return (
    <Box sx={{ width: "100%", maxWidth: 2000, mx: "auto", mt: 4 }}>
      <Grid container spacing={2} justifyContent="start" sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0px 6px 24px #919EAB33",
                padding: "14px 20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "16px",
                  color: "#E72276",
                  marginBottom: "12px",
                }}
              >
                {stat.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  color: "#57C700",
                  fontFamily: '"Barlow", sans-serif',
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <div className="documentiSearchFilter">
        <>
          {!window.location.href.includes('/attivita/progetti/Task') &&
            !window.location.href.includes('/attivita/progetti/Asset')
            // !window.location.href.includes('/hr/sub-colaboratory/Documenti') 
            ?
            (
              <SearchTable
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onValoreFilter={handleValoreFilter}
                onSearch={handleSearch}
                applyFilters={applyFilters}
                setSearchFilters={setSearchFilters}
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
                searchFilters={searchFilters}
                navData={"documenti"}
              />
            ) : null}
        </>



      </div>

      <Box className="customAccordion">
        {sections.map((section, index) => (
          <Accordion
            key={index}
            disableGutters
            className="documenti-customAccordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#555" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{section.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{section.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Documenti

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AcquistiBudget from "../../pages/Acquisti/Budget/Budget";
// import AcquistiPreventivi from "../../pages/Acquisti/Preventivi/Preventivi";
// import AcquistiOrdini from "../../pages/Acquisti/Ordini/Ordini";
// import VenditeBudget from "../../pages/Vendite/Budget/Budget";
// import VenditePreventivi from "../../pages/Vendite/Preventivi/Preventivi";
// import VenditeOrdini from "../../pages/Vendite/Ordini/Ordini";
// import "./Documenti.scss";
// import SearchTable from "../filter/Searchtable";
// import dayjs from "dayjs";
// import BustaPage from "../../pages/HR/BustePage/BustePage";

// const Documenti = ({ data }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [activeTab, setActiveTab] = useState("tab1");
//   const [activeFilters, setActiveFilters] = useState({});
//   const [searchFilters, setSearchFilters] = useState({});
//   const [activeSubTab, setSubActiveTab] = useState("");
//   const [value, setValue] = React.useState(-1);
//   const [page, setPage] = useState(0);
//   const [filteredData, setFilteredData] = useState(data);
//   const [valoreFilter, setValoreFilter] = useState("");

//   const handleValoreFilter = (selectedValore) => {
//     setValoreFilter(selectedValore);
//     setPage(0);
//   };

//   const handleSearch = (filters) => {
//     setSearchFilters(filters);
//   };

//   const isEquipagiamentoPage = window.location.href.includes(
//     "/hr/sub-colaboratory/Equipagiamento"
//   );
//   const isDocumentiPage = window.location.href.includes(
//     "/hr/sub-colaboratory/Documenti"
//   );

//   const sections = [
//     ...(isEquipagiamentoPage
//       ? [
//           {
//             label: "Attrezzature",
//             content: "Attrezzature content is hidden for this page.",
//           },
//           {
//             label: "Mezzi",
//             content: "Mezzi content is hidden for this page.",
//           },
//         ]
//       : []),

//     ...(isDocumentiPage
//       ? [
//           {
//             label: "Busta Page",
//             content: <BustaPage />,
//           },
//         ]
//       : []),

//     ...(isEquipagiamentoPage
//       ? [] // Avoid adding Budget, Preventivi, Ordini, DDT in Equipagiamento
//       : [
//           {
//             label: "Budget",
//             content:
//               window.location.href.includes("/acquisti/fornitori/Documenti") ||
//               window.location.href.includes(
//                 "/hr/sub-colaboratory/Documenti"
//               ) ? (
//                 <AcquistiBudget />
//               ) : window.location.href.includes(
//                   "/vendite/sub-lead/Documenti"
//                 ) ? (
//                 <VenditeBudget />
//               ) : (
//                 "Budget content is hidden for this page."
//               ),
//           },
//           {
//             label: "Preventivi",
//             content:
//               window.location.href.includes("/acquisti/fornitori/Documenti") ||
//               window.location.href.includes(
//                 "/hr/sub-colaboratory/Documenti"
//               ) ? (
//                 <AcquistiPreventivi />
//               ) : window.location.href.includes(
//                   "/vendite/sub-lead/Documenti"
//                 ) ? (
//                 <VenditePreventivi />
//               ) : (
//                 "Preventivi content is hidden for this page."
//               ),
//           },
//           {
//             label: "Ordini",
//             content:
//               window.location.href.includes("/acquisti/fornitori/Documenti") ||
//               window.location.href.includes(
//                 "/hr/sub-colaboratory/Documenti"
//               ) ? (
//                 <AcquistiOrdini />
//               ) : window.location.href.includes(
//                   "/vendite/sub-lead/Documenti"
//                 ) ? (
//                 <VenditeOrdini />
//               ) : (
//                 "Ordini content is hidden for this page."
//               ),
//           },
//           {
//             label: "Documenti contabili",
//             content: "All the documenti contabili details are provided here.",
//           },
//           {
//             label: "DDT",
//             content: "DDT-related information can be found in this section.",
//           },
//         ]),
//   ];

//   const stats = [
//     { label: "Documenti", value: 604 },
//     { label: "Budget", value: 604 },
//     { label: "Preventivi", value: 604 },
//     ...(window.location.href.includes("/vendite/sub-lead/Documenti")
//       ? []
//       : [
//           { label: "Ordini", value: 604 },
//           { label: "Fatture", value: 604 },
//           { label: "Buste paga", value: 604 },
//         ]),
//   ];

//   const applyFilters = () => {
//     let result = data;

//     if (searchFilters?.searchTerm) {
//       const term = searchFilters.searchTerm.toLowerCase();
//       result = result.filter(
//         (item) =>
//           item.titolo.toLowerCase().includes(term) ||
//           item.clienti.toLowerCase().includes(term) ||
//           item.fornitori.toLowerCase().includes(term)
//       );
//     }
//     if (searchFilters.searchTerm == "") {
//       result = data;
//     }

//     if (searchFilters.StartDate && searchFilters.EndDate) {
//       const startDate = dayjs(searchFilters.StartDate, "DD/MM/YYYY");
//       const endDate = dayjs(searchFilters.EndDate, "DD/MM/YYYY");

//       if (startDate.isValid() && endDate.isValid()) {
//         result = result?.filter((item) => {
//           const itemDate = dayjs(item?.data, "DD/MM/YYYY");
//           return (
//             itemDate.isValid() &&
//             itemDate.isBetween(startDate, endDate, null, "[]")
//           );
//         });
//       }
//     }

//     if (searchFilters.valore) {
//       result = result.filter((item) => item.valore === searchFilters.valore);
//     }
//     if (searchFilters.numero) {
//       result = result.filter(
//         (item) => item.numero === parseInt(searchFilters.numero)
//       );
//     }

//     if (searchFilters.stato) {
//       result = result.filter((item) => item.stato === searchFilters.stato);
//     }
//     if (searchFilters.clienti) {
//       result = result.filter((item) => item.clienti === searchFilters.clienti);
//     }

//     setFilteredData(result);
//     setPage(0);
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: 2000,
//         mx: "auto",
//         mt: 4,
//       }}
//     >
//       <Grid container spacing={2} justifyContent="start" sx={{ mb: 4 }}>
//         {stats.map((stat, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
//             <Box
//               sx={{
//                 backgroundColor: "white",
//                 borderRadius: "16px",
//                 boxShadow: "0px 6px 24px #919EAB33",
//                 padding: "14px 20px",
//                 // "&:hover": {
//                 //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//                 // },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: 700,
//                   lineHeight: "16px",
//                   color: "#E72276",
//                   marginBottom: "12px",
//                 }}
//               >
//                 {stat.label}
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "20px",
//                   fontWeight: 700,
//                   lineHeight: "24px",
//                   color: "#57C700",
//                   fontFamily: '"Barlow", sans-serif',
//                 }}
//               >
//                 {stat.value}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       <div className="documentiSearchFilter">
//         <SearchTable
//           startDate={startDate}
//           setStartDate={setStartDate}
//           endDate={endDate}
//           setEndDate={setEndDate}
//           onValoreFilter={handleValoreFilter}
//           onSearch={handleSearch}
//           applyFilters={applyFilters}
//           setSearchFilters={setSearchFilters}
//           activeFilters={activeFilters}
//           setActiveFilters={setActiveFilters}
//           searchFilters={searchFilters}
//           navData={"documenti"}
//         />
//       </div>
//       {/* Accordion Sections */}
//       <Box className="customAccordion">
//         {sections.map((section, index) => (
//           <Accordion
//             key={index}
//             disableGutters
//             className="documenti-customAccordion"
//           >
//             <AccordionSummary
//               expandIcon={<ExpandMoreIcon sx={{ color: "#555" }} />}
//               aria-controls={`panel${index}-content`}
//               id={`panel${index}-header`}
//             >
//               <Typography>{section.label}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography>{section.content}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Documenti;
