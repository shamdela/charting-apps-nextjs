import React from "react";
import { Chart } from "react-google-charts";

import style from "./styles/GoogleLineChart.module.scss";

export interface GoogleLineChartProps {
  selectedPrescriber: number;
}

const data = [
  [
    "Prescriber",
    "Humira",
    "Stelara",
    "Ozempic",
    "Trulicity",
    "Jardiance",
    "Dupixent",
  ],
  ["Jan", 128, 100, 68, 172, 49, 18],
  ["Feb", 102, 130, 116, 104, 80, 100],
  ["Mar", 177, 130, 120, 100, 120, 104],
  ["Apr", 151, 115, 156, 163, 81, 181],
  ["May", 163, 121, 160, 165, 92, 191],
  ["June", 192, 159, 154, 135, 139, 120],
];

const options = {
  title: "Drugs by Top Prescribers",
  chartArea: { width: "70%" },
  isStacked: true,
  colors: [
    "#C3393E",
    "#E19415",
    "#445723",
    "#F47A22",
    "#65B5F6",
    "#2A9D8F",
    "#FF5A00",
  ],
  pointSize: 8,
};

function GoogleLineChart({}: GoogleLineChartProps) {
  return (
    <div className={style.googleLineChartHeight}>
      <h2>Line Chart from Google Charts library</h2>
      <p>Representing prescriber by drugs</p>
      <Chart
        chartType="LineChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default GoogleLineChart;
