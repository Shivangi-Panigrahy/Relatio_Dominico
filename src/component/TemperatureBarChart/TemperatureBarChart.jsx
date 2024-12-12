import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function TemperatureBarChart() {
    const dataset = [
        { time: "14:00h", "Temp. -0°-15°": 5, "Temp. 7°-10°": 10, "Temp. 20°-29°": 15, "Temp. 30°-35°": 10 },
        { time: "14:20h", "Temp. -0°-15°": 6, "Temp. 7°-10°": 9, "Temp. 20°-29°": 14, "Temp. 30°-35°": 8 },
        { time: "14:40h", "Temp. -0°-15°": 7, "Temp. 7°-10°": 12, "Temp. 20°-29°": 18, "Temp. 30°-35°": 11 },
        { time: "15:00h", "Temp. -0°-15°": 5, "Temp. 7°-10°": 8, "Temp. 20°-29°": 12, "Temp. 30°-35°": 7 },
        { time: "15:20h", "Temp. -0°-15°": 6, "Temp. 7°-10°": 10, "Temp. 20°-29°": 15, "Temp. 30°-35°": 9 },
        { time: "15:40h", "Temp. -0°-15°": 8, "Temp. 7°-10°": 11, "Temp. 20°-29°": 16, "Temp. 30°-35°": 10 },
        { time: "16:00h", "Temp. -0°-15°": 9, "Temp. 7°-10°": 13, "Temp. 20°-29°": 17, "Temp. 30°-35°": 12 },
        { time: "16:20h", "Temp. -0°-15°": 5, "Temp. 7°-10°": 9, "Temp. 20°-29°": 13, "Temp. 30°-35°": 8 },
        { time: "16:40h", "Temp. -0°-15°": 6, "Temp. 7°-10°": 10, "Temp. 20°-29°": 15, "Temp. 30°-35°": 9 },
        { time: "17:00h", "Temp. -0°-15°": 7, "Temp. 7°-10°": 12, "Temp. 20°-29°": 14, "Temp. 30°-35°": 10 },
        { time: "17:20h", "Temp. -0°-15°": 5, "Temp. 7°-10°": 9, "Temp. 20°-29°": 13, "Temp. 30°-35°": 8 },
        { time: "17:40h", "Temp. -0°-15°": 8, "Temp. 7°-10°": 11, "Temp. 20°-29°": 16, "Temp. 30°-35°": 10 },
        { time: "18:00h", "Temp. -0°-15°": 9, "Temp. 7°-10°": 13, "Temp. 20°-29°": 17, "Temp. 30°-35°": 12 },
    ];

    const series = [
        { label: "Temp. -0°-15°", dataKey: "Temp. -0°-15°", stack: "temperature", color: "#D3D3D3" },
        { label: "Temp. 7°-10°", dataKey: "Temp. 7°-10°", stack: "temperature", color: "#00B050" },
        { label: "Temp. 20°-29°", dataKey: "Temp. 20°-29°", stack: "temperature", color: "#FFC000" },
        { label: "Temp. 30°-35°", dataKey: "Temp. 30°-35°", stack: "temperature", color: "#FF0000" },
    ];

    return (
        <BarChart
            dataset={dataset}
            series={series}
            xAxis={[{ scaleType: "band", dataKey: "time" }]}
            slotProps={{
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    itemGap: 20,
                },
            }}
            grid={{ horizontalLines: true, verticalLines: false }}
            width={1200}
            height={400}
        />
    );
}
