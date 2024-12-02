import React from "react";
import Table from "../../component/table/Table";
import tableData from "../../utils/turniHrData.json";
import InvoiceDashboard from "../../component/invoiceStatitics/InvoiceDashboard";
import "./Turni.scss";
import { Box, Grid, Typography } from "@mui/material";
const columns = [
  { field: "creatoIl", headerName: "Data", width: 900 },
  { field: "turno", headerName: "Turno", width: 30 },
  { field: "ore", headerName: "Ore", width: 90 },
  { field: "azioni", headerName: "Azioni", width: 90 },
];

// const OrdiniData = [
//   {
//     status: "Tuni",
//     count: 15,
//     color: "#57C700",
//   },
//   {
//     status: "Totale ore",
//     count: 604,
//     color: "#57C700",
//   },
// ];
const stats = [
  { label: "Tuni", value: 604 },
  { label: "Totale ore", value: 604 },
];

const Turni = () => {
  return (
    <div className="TurniTab">
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
      <Table data={tableData} columns={columns} navData={"turni"} />
    </div>
  );
};

export default Turni;
