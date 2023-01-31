import { ResponsiveBar } from "@nivo/bar";
import React, { useEffect, useState } from "react";

import style from "./styles/SubBarChart.module.scss";

import barChartData from "../../../../data/barChartDataTemp.json";

export interface SubBarChartProps {
  selectedPrescriberName?: string;
}

function SubBarChart({ selectedPrescriberName }: SubBarChartProps) {
  const [statefulSelectedPresciberData, setStatefulSelectedPrescriberData] =
    useState();

  useEffect(() => {
    const prescriberData = barChartData.find(
      (prescriber) => prescriber.prescriber === selectedPrescriberName
    );

    // Make a copy of data's children array elements
    let statefulData = { ...prescriberData };

    // Set updated data/colour into our stateful copy
    setStatefulSelectedPrescriberData(statefulData.data);
  }, [selectedPrescriberName]);

  return (
    <div className={style.nivoSubBarChartHeight}>
      {selectedPrescriberName && (
        <ResponsiveBar
          //data={statefulSelectedPresciberData}
          data={statefulSelectedPresciberData}
          groupMode="grouped"
          keys={["labelValue"]}
          indexBy="label"
          margin={{ top: 120, right: 130, bottom: 90, left: 80 }}
          padding={0.4}
          layout="vertical"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          //colors={{ scheme: 'nivo' }}
          colors={(obj: any): string => {
            return String(obj.data.labelColor);
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
        />
      )}
    </div>
  );
}

export default SubBarChart;
