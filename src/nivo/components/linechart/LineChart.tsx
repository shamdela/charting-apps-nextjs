import { ResponsiveLine } from "@nivo/line";
import React, { useEffect, useState } from "react";

import style from "./styles/LineChart.module.scss";
import lineData from "../../../../data/lineChartData.json";

export interface LineChartProps {
  prop?: string;
}

function LineChart({ prop = "default value" }: LineChartProps) {
  useEffect(() => {}, []);

  const handleClick = (node: { id: any }) => {};

  return (
    <div className={style.nivoLineChartHeight}>
      <h2>Responsive LineChart</h2>
      <p>Representing drug sales per month</p>
      <div className={style.tierChange}>
        <img src="/tier-change.svg" alt="Tier change" className={style.logo} />
        <p className={style.tierChangeText}>TIER CHANGE</p>
      </div>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 25, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Months",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={(obj: any): string => {
          return String(obj.color);
        }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "labels.text.fill" }}
        pointSymbol={(data) => {
          if (data.datum.specialEvent) {
            return (
              /* <rect
                width={11}
                height={11}
                fill={data.color}
                stroke={data.color}
                x={-5}
                y={-5}
              /> */
              <circle r={7} fill="white" stroke="black" stroke-width="2.5" />
            );
          } else {
            return <circle r={5} fill={data.color} stroke={data.color} />;
          }
        }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "square",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        tooltip={({ point }) => {
          console.log("point", point);
          if (point.data.specialEvent) {
            return (
              <div
                style={{
                  background: "white",
                  padding: "9px 12px",
                  border: "1px solid #ccc",
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          backgroundColor: point.color,
                          paddingRight: "5px",
                        }}
                      />
                      <td>
                        <div
                          style={{
                            paddingLeft: "10px",
                            paddingBottom: "5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {point.serieId}
                        </div>
                        <div
                          style={{
                            paddingLeft: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {point.y} prescriptions
                        </div>
                        <div
                          style={{
                            paddingLeft: "10px",
                          }}
                        >
                          {point.data.specialEvent.map((event) => (
                            <div>{event}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          } else {
            return (
              <div
                style={{
                  background: "white",
                  padding: "9px 12px",
                  border: "1px solid #ccc",
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          backgroundColor: point.color,
                          paddingRight: "10px",
                        }}
                      />
                      <td>
                        <div
                          style={{
                            paddingLeft: "10px",
                            paddingBottom: "5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {point.serieId}
                        </div>
                        <div
                          style={{
                            paddingLeft: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          {point.y} prescriptions
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        }}
        colors={(obj: any): string => {
          return String(obj.color);
        }}
        onClick={handleClick}
        enableCrosshair={false}
        /*markers={[
          {
            axis: "x",
            legend: "x marker",
            lineStyle: {
              stroke: "#b0413e",
              strokeWidth: 2,
            },
            value: "Aug'22",
          },
        ]}*/
      />
    </div>
  );
}

export default LineChart;
