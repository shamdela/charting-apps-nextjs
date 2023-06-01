import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import style from "./styles/AMBarChart.module.scss";

import barChartData from "../../../../data/barChartData.json";

export interface AMBarChartProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function AMBarChart({}: AMBarChartProps) {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // ...

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panY",
        wheelY: "zoomY",
        layout: root.verticalLayout,
      })
    );

    // ...

    // Create Y-axis
    let yRenderer = am5xy.AxisRendererY.new(root, {});
    let yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "prescriber",
        renderer: yRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    yRenderer.grid.template.setAll({
      location: 1,
    });

    chart
      .get("colors")
      .set("colors", [
        am5.color("rgb(180,68,67)"),
        am5.color("rgb(214,151,57)"),
        am5.color("rgb(72,86,42)"),
        am5.color("rgb(228,129,59)"),
        am5.color("rgb(120,179,240)"),
        am5.color("rgb(79,155,143)"),
      ]);
    // ...

    yAxis.data.setAll(barChartData);

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    // ...

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      })
    );
    legend.data.setAll(chart.series.values);

    // ...

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          baseAxis: yAxis,
          valueXField: fieldName,
          categoryYField: "prescriber",
        })
      );

      series.columns.template.setAll({
        tooltipText: "{categoryY} \n{name} \n{valueX} prescriptions",
        tooltipY: am5.percent(90),
        tooltipX: am5.percent(50),
      });

      series.data.setAll(barChartData);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            //text: "{valueX}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries("Humira", "Humira");
    makeSeries("Stelara", "Stelara");
    makeSeries("Ozempic", "Ozempic");
    makeSeries("Trulicity", "Trulicity");
    makeSeries("Jardiance", "Jardiance");
    makeSeries("Dupixent", "Dupixent");

    // Add cursor
    //chart.set("cursor", am5xy.XYCursor.new(root, {}));

    chartRef.current = chart;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className={style.amBarChartHeight}>
      <h2>Horizontal Bar Chart from AMCharts library</h2>
      <p>Representing prescriber by drugs</p>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}

export default AMBarChart;
