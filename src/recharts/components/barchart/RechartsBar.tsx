import { DrawingSeries } from "@amcharts/amcharts5/.internal/charts/stock/drawing/DrawingSeries";
import React, { PureComponent } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import barChartData from "../../../../data/barChartData.json";

import style from "./styles/RechartsBar.module.scss";

export interface RechartsBarProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="start"
        fill="#666"
        transform="rotate(35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

function preProcessData(data) {
  const drugs = [
    "Humira",
    "Stelara",
    "Ozempic",
    "Trulicity",
    "Jardiance",
    "Dupixent",
  ];
  const drugsInChart = [];
  drugs.forEach((drug) => {
    data.forEach((record) => {
      const key = drug + "Color";
      if (record.hasOwnProperty(drug)) {
        const resultObj = {
          name: drug,
          color: record[key],
        };
        if (!drugsInChart.some((drug) => drug.name === resultObj.name)) {
          drugsInChart.push(resultObj);
        }
      }
    });
  });
  return drugsInChart;
}

function RechartsBar({}: RechartsBarProps) {
  const drugsInChart = preProcessData(barChartData);

  return (
    <div className={style.rechartsBarHeight}>
      <h2>Horizontal Bar Chart from Recharts library</h2>
      <p>Representing prescriber by drugs</p>

      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          width={400}
          height={250}
          data={barChartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 75,
          }}
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="prescriber" tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend layout="vertical" wrapperStyle={{ top: 500, left: 90 }} />

          {drugsInChart.map((drug) => (
            <Bar dataKey={drug.name} stackId="prescriber" fill={drug.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsBar;
