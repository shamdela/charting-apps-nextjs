import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import style from "./styles/GoogleColumnChart.module.scss";

import barChartData from "../../../../barChartData.json";

export interface GoogleColumnChartProps {
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
  ["McDonald", 128, 100, 68, 172, 49, 18],
  ["Barry", 102, 130, 116, 104, 80, 100],
  ["Barron", 177, 130, 120, 100, 120, 104],
  ["Smith-Rowe", 151, 115, 156, 163, 81, 181],
  [
    "Wolfsteinhausenbergerdorff gggg gsdgdfdsfdsfdsfdsf",
    163,
    121,
    160,
    165,
    92,
    191,
  ],
  ["Kulusevski", 192, 159, 154, 135, 139, 120],
  ["McLoughlin", 200, 197, 159, 144, 187, 79],
];

const options = {
  title: "Drugs by Top Prescribers",
  chartArea: { width: "60%" },
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
  hAxis: {
    title: "Volume of Prescriptions",
    minValue: 0,
  },
  vAxis: {
    title: "Prescriber",
  },
  responsive: true,
};

function GoogleColumnChart({}: GoogleColumnChartProps) {
  // const [show, setShow] = useState(false);
  //const [data, setData] = useState(false);
  /*   useEffect(() => {
    if (show) {
      setData(response);
    }
  }, [show]); */

  return (
    <div className={style.googleColumnChartHeight}>
      <h2>Column Chart from Google Charts library</h2>
      <p>Representing prescriber by drugs</p>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="600px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default GoogleColumnChart;
