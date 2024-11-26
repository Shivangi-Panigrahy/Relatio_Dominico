import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Icon for dropdown
import "./lineChart.scss";

export default function RevenueLineChart({ data, dataset }) {
  console.log(data, "data");
  const [filterIncome, setfilterIncome] = React.useState("");
  const filteredData = dataset?.map((item) => {
    if (filterIncome === "Entrate" && item.hasOwnProperty("entrate")) {
      // If 'entrate' is selected, return only month and entrate
      return { month: item.month, entrate: item.entrate };
    } else if (filterIncome === "Uscite" && item.hasOwnProperty("uscite")) {
      // If 'uscite' is selected, return only month and uscite
      return { month: item.month, uscite: item.uscite };
    } else if (filterIncome === "Ricavo" && item.hasOwnProperty("ricavo")) {
      // If 'uscite' is selected, return only month and uscite
      return { month: item.month, ricavo: item.ricavo };
    }
    return item; // Return item unchanged if neither condition matches
  });
  console.log(filteredData);
  const datasetAcquisti = [
    { month: "Gen", entrate: 5 },
    { month: "Feb", entrate: 8 },
    { month: "Mar", entrate: 12 },
    { month: "Apr", entrate: 25 },
    { month: "Mag", entrate: 42 },
    { month: "Giu", entrate: 45 },
    { month: "Lug", entrate: 45 },
    { month: "Ago", entrate: 48 },
    { month: "Set", entrate: 58 },
    { month: "Ott", entrate: 62 },
    { month: "Nov", entrate: 52 },
    { month: "Dic", entrate: 35 },
  ];

  const [year, setYear] = React.useState("2023");

  const series = [
    {
      dataKey: "entrate",
      color: "#4CAF50",
      showMark: true,
    },
    {
      dataKey: "uscite",
      color: "#f44336",
      showMark: true,
    },
    {
      dataKey: "ricavo",
      color: "#000000",
      showMark: true,
    },
  ];

  const filteredSeries = data === "vendite" ? [series[0]] : series;

  let message;
  let message2;

  switch (data) {
    case "profiti":
      message = "Fatturato";
      message2 = "Entrate";
      break;
    case "vendite":
      message = "Valore preventivi";
      message2 = "Valore preventivi";
      break;
    case "acquisti":
      message = "Fatturato";
      message2 = "Fatturato";
      break;
    case "personale":
      message = "Spese personale";
      message2 = "Buste paga";
      break;
    default:
      message = "Unknown status";
  }

  return (
    <Box className="graphcard">
      {/* Header Section */}
      <Box className="graphcard__head">
        <Box className="graphcard__heading">
          <h6 className="graphcard__title">{message}</h6>
          <p className="graphcard__text">(+43%) rispetto allo scorso anno</p>
        </Box>
        <Select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          size="small"
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            minWidth: 100,
            height: "32px",
            "& .MuiSelect-select": {
              py: 0.5,
              px: 1.5,
            },
          }}
        >
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
        </Select>
      </Box>

      {/* Metrics Section */}
      <Box className="graphcard__body">
        <Box className="graphcard__info">
          {data === "profiti" ? (
            <>
              <Box>
                <p
                  style={{ color: "#4CAF50", cursor: "pointer" }}
                  onClick={() => {
                    console.log("Clicked Entrate");
                    setfilterIncome("Entrate");
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#4CAF50",
                      display: "inline-block",
                    }}
                  />
                  Entrate
                </p>
                <h6>€16.19k</h6>
              </Box>
              <Box>
                <p
                  style={{ color: "#DB0000", cursor: "pointer" }}
                  onClick={() => {
                    setfilterIncome("Uscite");
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#DB0000",
                      display: "inline-block",
                    }}
                  />
                  Uscite
                </p>
                <h6>€35.71k</h6>
              </Box>
              <Box>
                <p
                  style={{ color: "#100919", cursor: "pointer" }}
                  onClick={() => setfilterIncome("Ricavo")}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#100919",
                      display: "inline-block",
                    }}
                  />
                  Ricavo
                </p>
                <h6>€35.71k</h6>
              </Box>
            </>
          ) : (
            <>
              <Box>
                <p
                  style={{ color: "#4CAF50", cursor: "pointer" }}
                  onClick={() => {
                    console.log("Clicked Entrate");
                    setfilterIncome("Entrate");
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#4CAF50",
                      display: "inline-block",
                    }}
                  />
                  {message2}
                </p>
                <h6>€16.19k</h6>
              </Box>
            </>
          )}
        </Box>
        {/* Chart */}
        <LineChart
          className="MuiChartsAxis-tickLabel"
          dataset={data == "acquisti" ? datasetAcquisti : filteredData}
          margin={{ left: 50, right: 50, top: 30, bottom: 30 }}
          xAxis={[
            {
              dataKey: "month",
              scaleType: "point",
              axisLine: { stroke: "transparent" },
              tick: {
                length: 0,
                size: 0,
              },
            },
          ]}
          yAxis={[
            {
              axisLine: { stroke: "transparent" },
              tickLine: false,
              valueFormatter: (value) => `${value.toLocaleString()}   k`,
            },
          ]}
          grid={{
            horizontal: true,
            strokeDasharray: "5 5",
            strokeWidth: 1,
            stroke: "#e0e0e0",
          }}
          series={filteredSeries}
          height={400}
          sx={{
            ".MuiLineElement-root": {
              strokeWidth: 2,
            },
            ".MuiMarkElement-root": {
              stroke: ({ series }) => series?.color,
              strokeWidth: 2,
              scale: "1",
              fill: "#fff",
            },
            "& .MuiChartsAxis-line": {
              display: "none",
            },
            "& .MuiChartsGrid-line": {
              strokeDasharray: "5 5",
              stroke: "#e0e0e0",
            },
            "& .MuiChartsAxis-tick": {
              display: "none",
            },
          }}
        />
      </Box>
    </Box>
  );
}
