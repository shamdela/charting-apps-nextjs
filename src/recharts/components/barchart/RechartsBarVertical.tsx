import { DrawingSeries } from "@amcharts/amcharts5/.internal/charts/stock/drawing/DrawingSeries";
import React from "react";
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

let tooltip;

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

const CustomTooltip = ({ active = true, payload = [], label = "" }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <p className="label">{`${label}`}</p>
        <div>
          {payload.map((bar) => {
            if (bar.dataKey === tooltip?.drug?.name) {
              return (
                <div
                  style={{
                    display: "inline-block",
                    width: 180,
                  }}
                >
                  <svg
                    style={{
                      display: "inline",
                      float: "left",
                    }}
                    width="20"
                    height="50"
                  >
                    <rect
                      id="box"
                      x="0"
                      y="0"
                      width="15"
                      height="50"
                      fill={`${bar.fill}`}
                    />
                  </svg>
                  <div
                    style={{
                      paddingLeft: "12px",
                    }}
                  >
                    <div
                      style={{
                        paddingBottom: "12px",
                      }}
                    >
                      {bar.dataKey}
                    </div>
                    <div
                      style={{
                        paddingBottom: "12px",
                      }}
                    >
                      <strong>Prescriptions: {bar.value}</strong>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }

  return null;
};

function RechartsBarVertical({}: RechartsBarProps) {
  const drugsInChart = preProcessData(barChartData);

  return (
    <div className={style.rechartsBarHeight}>
      <h2>Vertical Stacked Bar Chart from Recharts library</h2>
      <p>Representing prescriber by drugs</p>

      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          width={400}
          height={250}
          data={barChartData}
          margin={{
            top: 20,
            right: 30,
            left: 50,
            bottom: 5,
          }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis hide type="number" />
          <YAxis type="category" dataKey="prescriber" />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
            wrapperStyle={{
              backgroundColor: "white",
              borderStyle: "ridge",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          />
          <Legend wrapperStyle={{ top: 650, left: 35 }} />

          {drugsInChart.map((drug) => (
            <Bar
              dataKey={drug.name}
              stackId="prescriber"
              fill={drug.color}
              barSize={45}
              onMouseOver={() => (tooltip = { drug })}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RechartsBarVertical;
