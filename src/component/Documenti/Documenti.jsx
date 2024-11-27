import React from "react";
import { Box, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AcquistiBudget from "../../pages/Acquisti/Budget/Budget";
import AcquistiPreventivi from "../../pages/Acquisti/Preventivi/Preventivi";
import AcquistiOrdini from "../../pages/Acquisti/Ordini/Ordini";
import VenditeBudget from "../../pages/Vendite/Budget/Budget";
import VenditePreventivi from "../../pages/Vendite/Preventivi/Preventivi";
import VenditeOrdini from "../../pages/Vendite/Ordini/Ordini";
import './Documenti.scss'

const Documenti = () => {
  const sections = [
    {
      label: "Budget",
      content:
        window.location.href.includes('/acquisti/fornitori/Documenti')
          ? <AcquistiBudget />
          : window.location.href.includes('/vendite/sub-lead/Documenti')
            ? <VenditeBudget />
            : "Budget content is hidden for this page."
    },
    {
      label: "Preventivi",
      content:
        window.location.href.includes('/acquisti/fornitori/Documenti')
          ? < AcquistiPreventivi />
          : window.location.href.includes('/vendite/sub-lead/Documenti')
            ? <VenditePreventivi />
            : "Budget content is hidden for this page."
    },
    ...(window.location.href.includes('/vendite/sub-lead/Documenti')
      ? []
      : [
        {
          label: "Ordini",
          content:
            window.location.href.includes('/acquisti/fornitori/Documenti')
              ? <AcquistiOrdini />
              : window.location.href.includes('/vendite/sub-lead/Documenti')
                ? <VenditeOrdini />
                : "Ordini content is hidden for this page."
        },
        {
          label: "Documenti contabili",
          content: "All the documenti contabili details are provided here."
        },
        {
          label: "DDT",
          content: "DDT-related information can be found in this section."
        }
      ]),
  ];

  const stats = [
    { label: "Documenti", value: 604 },
    { label: "Budget", value: 604 },
    ...(window.location.href.includes('/vendite/sub-lead/Documenti')
      ? []
      : [
        { label: "Preventivi", value: 604 },
        { label: "Ordini", value: 604 },
        { label: "Fatture", value: 604 },
        { label: "Buste paga", value: 604 },
      ]),
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 2000,
        mx: "auto",
        mt: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="start" sx={{ mb: 4 }}>
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
                  marginBottom: "12px"
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

      {/* Accordion Sections */}
      <Box className='customAccordion'>
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
              <Typography

              >
                {section.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
            >
              <Typography>{section.content}</Typography>
            </AccordionDetails>
          </Accordion>

        ))}
      </Box>
    </Box>
  );
};

export default Documenti;