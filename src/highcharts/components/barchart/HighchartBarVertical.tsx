import React, { useEffect, useState } from "react";

import style from "./styles/HighchartBar.module.scss";

import barChartData from "../../../../data/barChartData.json";

export interface HighchartBarVerticalProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function HighchartBarVertical({}: HighchartBarVerticalProps) {
  return (
    <div className={style.highchartBarHeight}>
      <h2>Vertical Bar Chart from Highcharts library</h2>
      <p>Representing prescriber by drugs</p>
      <div
        id="chartdivvertical"
        style={{ width: "100%", height: "600px" }}
      ></div>
    </div>
  );
}

export default HighchartBarVertical;
