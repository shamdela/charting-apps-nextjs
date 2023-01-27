import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";

import style from "./styles/BarChart.module.scss";

import barChartData from "../../../../data/barChartData.json";

export interface BarChartProps {
  prop?: string;
}

function BarChart({ prop = "default value" }: BarChartProps) {
  const [isPrescriberSelected, setIsPrescriberSelected] = useState(false);
  const [selectedPrescriber, setSelectedPrescriber] = useState(-1);
  const [statefulBarChartData, setStatefulBarChartData] =
    useState(barChartData);
  const [selectedNodesPrevColour, setSelectedNodesPrevColour] = useState("");

  useEffect(() => {
    // Make a copy of data's children array elements
    let statefulData = [...statefulBarChartData];
    
    console.log("selectedPrescriber with index:", selectedPrescriber);
    console.log("Is a Prescriber Selected:", isPrescriberSelected)
    
  }, [isPrescriberSelected, selectedPrescriber]);

  const handleClick = (node, event) => {      
    const nodeSelected = node.index;
    if (nodeSelected === selectedPrescriber){
        setIsPrescriberSelected(() => !isPrescriberSelected)
    } else {
        setIsPrescriberSelected(() => true)
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
        indexBy="prescriber"
        margin={{ top: 30, right: 130, bottom: 90, left: 80 }}
        padding={0.4}
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        //colors={{ scheme: 'nivo' }}
        colors={(obj: any): string => {           
            if (isPrescriberSelected){
                if (selectedPrescriber === obj.index){
                    return String(obj.data[`${obj.id}Color`]);    
                } else {
                    return String(obj.data[`${obj.id}OpaqueColor`]);    
                }
            }
            return String(obj.data[`${obj.id}Color`]);
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
        role="application"
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
