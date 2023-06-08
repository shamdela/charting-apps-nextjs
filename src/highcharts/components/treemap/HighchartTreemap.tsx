import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsTreemap from "highcharts/modules/treemap";

import style from "./styles/HighchartTreemap.module.scss";

import citiesData from "../../../../data/highcharts-citiesData.json";

export interface HighchartTreemapProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function HighchartTreemap({}: HighchartTreemapProps) {
  if (typeof Highcharts === "object") {
    HighchartsTreemap(Highcharts);
  }

  const [chartOptions, setChartOptions] = useState({
    colorAxis: {
      minColor: "#FFFFFF",
      maxColor: "#4F9B8F",
    },
    dataLabels: {
      color: "#FFFFFF",
    },
    series: [
      {
        type: "treemap",
        layoutAlgorithm: "squarified",
        clip: false,
        data: citiesData.children,
      },
    ],
    title: {
      text: "Highcharts Treemap",
    },
  });

  return (
    <div className={style.highchartTreemapHeight}>
      <h2>Horizontal Treemap chart from Highcharts library</h2>
      <p>Representing prescriber by drugs</p>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default HighchartTreemap;
