import React, { useEffect, useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import style from "./styles/HighchartBar.module.scss";

import barChartData from "../../../../data/highcharts-barChartData.json";

export interface HighchartBarProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function HighchartBar({}: HighchartBarProps) {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bar",
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ["McDonaldMcDonald McDonald McDonald", "Barry"],
      visible: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Prescribers",
      },
      visible: true,
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    //series: barChartData,
    series: [
      {
        name: "Year 1990",
        data: [631, 727, 0, 721, 26],
      },
      {
        name: "Year 2000",
        data: [814, 841, 3714, 726, 31],
      },
      {
        name: "Year 2010",
        data: [1044, 944, 4170, 735, 40],
      },
      {
        name: "Year 2018",
        data: [1276, 1007, 4561, 746, 42],
      },
    ],
  });

  return (
    <div className={style.highchartsBarHeight}>
      <h2>Horizontal Bar Chart from Highcharts library</h2>
      <p>Representing prescriber by drugs</p>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
}

export default HighchartBar;
