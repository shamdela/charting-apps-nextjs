import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";

import style from "./styles/BarChart.module.scss";

import barChartData from "../../../../data/barChartData.json";
import { convertToRGBA } from "../../../utilities/utilityFunctions";

export interface BarChartProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function BarChart({
  selectedPrescriber,
  setSelectedPrescriber,
}: BarChartProps) {
  const [isPrescriberSelected, setIsPrescriberSelected] = useState(false);
  const [statefulBarChartData, setStatefulBarChartData] =
    useState(barChartData);

  useEffect(() => {
    // Make a copy of data's children array elements
    let statefulData = { ...statefulBarChartData };

    !isPrescriberSelected && setSelectedPrescriber(-1);
  }, [isPrescriberSelected, selectedPrescriber]);

  const handleClick = (node, event) => {
    const nodeSelected = node.index;
    if (nodeSelected === selectedPrescriber) {
      setIsPrescriberSelected(() => !isPrescriberSelected);
      setSelectedPrescriber(-1);
    } else {
      setIsPrescriberSelected(() => true);
    }
    setSelectedPrescriber(nodeSelected);
  };

  return (
    <div className={style.nivoBarChartHeight}>
      <h2>Stacked Bar Chart</h2>
      <p>Representing prescriber by drugs</p>
      <ResponsiveBar
        data={statefulBarChartData}
        keys={[
          "Humira",
          "Stelara",
          "Ozempic",
          "Trulicity",
          "Jardiance",
          "Dupixent",
        ]}
        innerPadding={1}
        indexBy="prescriber"
        margin={{ top: 30, right: 130, bottom: 90, left: 80 }}
        padding={0.4}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        //colors={{ scheme: 'nivo' }}
        colors={(obj: any): string => {
          const rgbColour = String(obj.data[`${obj.id}Color`]);
          if (isPrescriberSelected) {
            if (selectedPrescriber === obj.index) {
              return rgbColour;
            } else {
              // Grey out unselected bar, so call function to add opacity to the colour
              return convertToRGBA(rgbColour, 0.5);
            }
          }
          return rgbColour;
        }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableLabel={false}
        enableGridX
        enableGridY={false}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "row",
            justify: false,
            translateX: 160,
            translateY: 80,
            itemsSpacing: 30,
            itemWidth: 140,
            itemHeight: 10,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 30,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        markers={[
          {
            axis: "x",
            value: 0,
            lineStyle: {
              stroke: "rgba(160, 160, 160, .35)",
              strokeWidth: 2,
            },
          },
          {
            axis: "x",
            value: 980,
            lineStyle: {
              stroke: "rgba(160, 160, 160, .35)",
              strokeWidth: 2,
            },
          },
        ]}
        role="img"
        ariaLabel="Prescibers Bar Chart"
        barAriaLabel={(obj) => {
          return `${obj.indexValue}, Drug: ${obj.id}, Value: ${obj.value}`;
        }}
        onClick={handleClick}
      />
      <div className={style.selection}>
        Selected Prescriber:
        <span className={style.selectionValue}>
          {selectedPrescriber >= 0 &&
            statefulBarChartData[selectedPrescriber].prescriber}
        </span>
      </div>
    </div>
  );
}

export default BarChart;
