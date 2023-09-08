import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import citiesData from "../../../../data/citiesData.json";

import style from "./styles/GoogleTreeMap.module.scss";

export interface GoogleTreeMapProps {
  selectedPrescriber: number;
}

const data2 = [
  ["Location", "Parent", "Volume"],
  ["USA", null, 0],
  ["Alabama", "USA", 0],
  ["California", "USA", 0],
  ["Auburn", "Alabama", 158],
  ["Mooresville", "Alabama", 133],
  ["Fairhope", "Alabama", 127],
  ["Montgomery", "Alabama", 111],
  ["Mobile", "Alabama", 93],
  ["Huntsville", "Alabama", 5],
  ["Birmingham Boom Time", "Alabama", 2],
  ["Los Angeles", "California", 128],
  ["San Francisco", "California", 103],
  ["San Jose", "California", 97],
  ["Oakland", "California", 81],
  ["Sacremento", "California", 63],
];

const options = {
  title: "Drugs by Top Prescribers",
  minColor: "#CEE3E0",
  midColor: "#87BBB3",
  maxColor: "#4F9B8F",
  headerHeight: 15,
  fontColor: "black",
  showScale: true,
  responsive: true,
};

export const data = [
  ["Location", "Parent", "Market trade volume (size)"],
  ["Global", null, 0],
  ["America", "Global", 500],
  ["Europe", "Global", 250],
  ["Asia", "Global", 125],
  ["Australia", "Global", 62],
  ["Africa", "Global", 31],
];

function GoogleTreeMap({}: GoogleTreeMapProps) {
  // const [show, setShow] = useState(false);
  //const [data, setData] = useState(false);
  /*   useEffect(() => {
    if (show) {
      setData(response);
    }
  }, [show]); */

  return (
    <div className={style.googleTreeMapHeight}>
      <h2>TreeMap Chart from Google Charts library</h2>
      <p>Representing prescribers by state</p>
      <Chart
        chartType="TreeMap"
        width="100%"
        height="600px"
        data={data2}
        options={options}
      />
    </div>
  );
}

export default GoogleTreeMap;
