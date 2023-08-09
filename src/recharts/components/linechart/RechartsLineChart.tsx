import React from "react";

import style from "./styles/LineChart.module.scss";

import {
  LineChart,
  CartesianGrid,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

function RechartsLineChart() {
  const data = [
    {
      month: "May 22",
      Skyrizi: 4000,
      Dupixent: 2400,
      Ozempic: 3000,
      Jardiance: 2200,
      amt: 2400,
    },
    {
      month: "Jun 22",
      Skyrizi: 3000,
      Dupixent: 1398,
      Ozempic: 3500,
      Jardiance: 2000,
      amt: 2210,
    },
    {
      month: "Jul 22",
      Skyrizi: 2000,
      Dupixent: 9800,
      Ozempic: 3600,
      Jardiance: 2200,
      amt: 2290,
    },
    {
      month: "Aug 22",
      Skyrizi: 2780,
      Dupixent: 3908,
      Ozempic: 3000,
      Jardiance: 2000,
      amt: 2000,
    },
    {
      month: "Sep 22",
      Skyrizi: 1890,
      Dupixent: 4800,
      Ozempic: 4000,
      Jardiance: 2100,
      amt: 2181,
    },
    {
      month: "Oct 22",
      Skyrizi: 2390,
      Dupixent: 3800,
      Ozempic: 3000,
      Jardiance: 1900,
      amt: 2500,
    },
    {
      month: "Nov 22",
      Skyrizi: 3490,
      Dupixent: 4300,
      Ozempic: 5100,
      Jardiance: 2300,
      amt: 2100,
    },
  ];

  const drugColours = [
    { drug: "Skyrizi", color: "rgb(120,179,240)" },
    { drug: "Dupixent", color: "rgb(228,129,59)" },
    { drug: "Ozempic", color: "rgb(72,86,42)" },
    { drug: "Jardiance", color: "rgb(214,151,57)" },
  ];
  return (
    <div className={style.rechartsLineChartHeight}>
      <h2>LineChart from Recharts library</h2>
      <p>Representing drug sales per month</p>
      <LineChart
        width={700}
        height={600}
        data={data}
        accessibilityLayer
        margin={{
          top: 50,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {drugColours.map((d) => (
          <Line type="monotone" dataKey={d.drug} stroke={d.color} />
        ))}
        <Tooltip />
        <Legend wrapperStyle={{ top: 650, left: 35 }} />
      </LineChart>
    </div>
  );
}

export default RechartsLineChart;
