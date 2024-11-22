import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Icon for dropdown
import "./lineChart.scss";

export default function RevenueLineChart({ data }) {
  console.log(data, "data");
  const dataset = [
    { month: "Gen", entrate: 5, uscite: 25, ricavo: 42 },
    { month: "Feb", entrate: 8, uscite: 28, ricavo: 45 },
    { month: "Mar", entrate: 12, uscite: 35, ricavo: 50 },
    { month: "Apr", entrate: 25, uscite: 48, ricavo: 62 },
    { month: "Mag", entrate: 42, uscite: 62, ricavo: 78 },
    { month: "Giu", entrate: 45, uscite: 65, ricavo: 82 },
    { month: "Lug", entrate: 45, uscite: 65, ricavo: 82 },
    { month: "Ago", entrate: 48, uscite: 68, ricavo: 85 },
    { month: "Set", entrate: 58, uscite: 80, ricavo: 95 },
    { month: "Ott", entrate: 62, uscite: 82, ricavo: 98 },
    { month: "Nov", entrate: 52, uscite: 72, ricavo: 88 },
    { month: "Dic", entrate: 35, uscite: 55, ricavo: 68 },
  ];
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

  const filteredSeries =
    data === "acquisti"
      ? [series[0]] // Only show 'entrate' for "vivek"
      : series;
  return (
    <Box className="graphcard">
      {/* Header Section */}
      <Box className="graphcard__head">
        <Box className="graphcard__heading">
          <h6 className="graphcard__title">Fatturato</h6>
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
          <Box>
            <p style={{ color: "#4CAF50" }}>
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
            <p style={{ color: "#DB0000" }}>
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
            <p style={{ color: "#100919" }}>
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
        </Box>
        {/* Chart */}
        <LineChart
          className="MuiChartsAxis-tickLabel"
          dataset={data == "acquisti" ? datasetAcquisti : dataset}
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
