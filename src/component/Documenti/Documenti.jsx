import React, { useEffect , useState } from "react";
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
import Table from "../../component/table/Table";
import SearchTable from "../filter/Searchtable";
import dayjs from "dayjs";

const Documenti = ({ data }) => {
  const path = window.location.pathname;
  const [documentData, setDocumentData] = React.useState([]);


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
  };

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };
  const sections = [
    {
      label: "Budget",
      content: window.location.href.includes(
        "/acquisti/fornitori/Documenti"
      ) ? (
        <AcquistiBudget />
      ) : window.location.href.includes("/vendite/sub-lead/Documenti") ? (
        <VenditeBudget />
      ) : (
        "Budget content is hidden for this page."
      ),
    },
    {
      label: "Preventivi",
      content: window.location.href.includes(
        "/acquisti/fornitori/Documenti"
      ) ? (
        <AcquistiPreventivi />
      ) : window.location.href.includes("/vendite/sub-lead/Documenti") ? (
        <VenditePreventivi />
      ) : (
        "Budget content is hidden for this page."
      ),
    },
    ...(window.location.href.includes("/vendite/sub-lead/Documenti")
      ? []
      : [
          {
            label: "Ordini",
            content: window.location.href.includes(
              "/acquisti/fornitori/Documenti"
            ) ? (
              <AcquistiOrdini />
            ) : window.location.href.includes("/vendite/sub-lead/Documenti") ? (
              <VenditeOrdini />
            ) : (
              "Ordini content is hidden for this page."
            ),
          },
          {
            label: "Documenti contabili",
            content: "All the documenti contabili details are provided here.",
          },
          {
            label: "DDT",
            content: "DDT-related information can be found in this section.",
          },
        ]),
  ];

  const hrSectionsDocumenti = [
    {
      label: "Busta paga",
      content: "Busta paga content is hidden for this page.",
    },
    {
      label: "Preventivi",
      content: "Budget content is hidden for this page.",
    },
    ...(window.location.href.includes("/vendite/sub-lead/Documenti")
      ? []
      : [
          {
            label: "Ordini",
            content: "Ordini content is hidden for this page.",
          },
          {
            label: "Documenti contabili",
            content: "All the documenti contabili details are provided here.",
          },
          {
            label: "DDT",
            content: "DDT-related information can be found in this section.",
          },
        ]),
  ];
  const hrSectionsEquipagiamento = [
    {
      label: "Attrezzature",
      content: "Attrezzature content is hidden for this page.",
    },
    {
      label: "Mezzi",
      content: "Mezzi content is hidden for this page.",
    },
  ];

  const stats = [
    { label: "Documenti", value: 604 },
    { label: "Budget", value: 604 },
    { label: "Preventivi", value: 604 },
    ...(window.location.href.includes("/vendite/sub-lead/Documenti")
      ? []
      : [
            { label: "Ordini", value: 604 },
          { label: "Fatture", value: 604 },
          { label: "Buste paga", value: 604 },
        ]),
  ];

  useEffect(() => {
    path === "/hr/colaboratory/sub-colaboratory/Documenti"
      ? setDocumentData(hrSectionsDocumenti)
      : path === "/hr/colaboratory/sub-colaboratory/Equipagiamento"
      ? setDocumentData(hrSectionsEquipagiamento)
      : setDocumentData(sections);
  }, [path]);

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
    if (searchFilters.searchTerm == "") {
      result = data;
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

  return (
    <div className="EquipagiamentoTab">
      <Grid container spacing={1} justifyContent="start">
        {stats.map((stat, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0px 6px 24px #919EAB33",
                padding: "14px 20px",
                // "&:hover": {
                //   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                // },
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
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {(path === "/hr/colaboratory/sub-colaboratory/Equipagiamento" ||
        path === "/hr/colaboratory/sub-colaboratory/Documenti") && (
        <Table data={documentData} columns={""} navData={"equipagiamento"} />
      )}
      <div className="documentiSearchFilter">
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
      </div>
      {/* Accordion Sections */}
      <Box className="customAccordion">
        {documentData.map((section, index) => (
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
    </div>
  );
};

export default Documenti;
