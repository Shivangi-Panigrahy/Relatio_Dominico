import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Icon for dropdown
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import "./lineChart.scss";

export default function RevenueLineChart({
  data,
  dataset,
  dataFilter,
  dataPie,
}) {
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
    case "imposte":
      message = "Imposte";
      message2 = "Buste paga";
      break;
    case "asset":
      message = "Asset";
      message2 = "Buste paga";
      break;
    case "attivita":
      message = "Attività";
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
          <div>
            {dataFilter.map((item) => (
              <Box key={item.id}>
                <p
                  style={{ color: item.color, cursor: "pointer" }}
                  onClick={() => {
                    console.log(`Clicked ${item.label}`);
                    setfilterIncome(item.label); // Setting the filter based on the action
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: item.color,
                      display: "inline-block",
                    }}
                  />
                  {item.label}
                </p>
                <h6>{item.value}</h6>
              </Box>
            ))}
          </div>
        </Box>

        {/* Chart */}
        <Box style={{ display: "flex" }}>
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
          <Box>
            {dataPie?.length > 0 && (
              <div
                style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
              >
                <h3>{dataPie[0].message}</h3>
                <PieChart
                  series={[
                    {
                      data: dataPie,
                      arcLabel: (item) => `${item.value}%`,
                    },
                  ]}
                  width={400}
                  height={400}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                      fontSize: 14,
                    },
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "10px",
                  }}
                >
                  {dataPie.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: item.color,
                        }}
                      ></div>
                      <span>{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
