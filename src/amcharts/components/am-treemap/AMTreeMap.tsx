"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import style from "./styles/AMTreeMap.module.scss";

import data from "../../../../data/citiesData.json";

export interface AMTreeMapProps {
  selectedPrescriber: number;
  setSelectedPrescriber: (num: number) => void;
}

function AMTreeMap({}: AMTreeMapProps) {
  const chartRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(0);

  const handleClick = (ev) => {
    const rec: am5.RoundedRectangle = ev.target;

    if (selectedNode === rec.uid) {
      console.log("selected node === rec.uid");
      setSelectedNode(0);
    } else {
      setSelectedNode(rec.uid);
    }
  };

  useEffect(() => {
    console.log("Selected Node", selectedNode);
  }, [selectedNode]);

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    // ...

    let chart = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // ...

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    let series = chart.children.push(
      am5hierarchy.Treemap.new(root, {
        singleBranchOnly: true,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "id",
        childDataField: "children",
        nodePaddingOuter: 2,
        nodePaddingInner: 1.5,
      })
    );

    series.rectangles.template.setAll({
      strokeWidth: 2,
      interactive: true,
    });

    series.rectangles.template.states.create("hover", {
      active: true,
      stroke: am5.color("rgb(0,0,0"),
    });

    series.labels.template.setAll({
      fontSize: 15,
      fill: am5.color(0x000000),
    });

    series.rectangles.template.events.on("click", handleClick);

    series.nodes.template.set(
      "tooltipText",
      "{category} \n\n[bold]{sum} prescriptions"
    );

    series
      .get("colors")
      .set("colors", [
        am5.color("#C0DBD7"),
        am5.color("#4F9B8F"),
        am5.color("#4F9B8F"),
        am5.color("#5DA398"),
        am5.color("#5DA398"),
        am5.color("#6BABA1"),
        am5.color("#6BABA1"),
        am5.color("#79B3AA"),
        am5.color("#79B3AA"),
        am5.color("#87BBB3"),
        am5.color("#87BBB3"),
        am5.color("#91C7BC"),
        am5.color("#91C7BC"),
        am5.color("#A4CBC5"),
        am5.color("#A4CBC5"),
        am5.color("#B2D3CE"),
        am5.color("#B2D3CE"),
        am5.color("#C0DBD7"),
        am5.color("#C0DBD7"),
        am5.color("#CEE3E0"),
        am5.color("#CEE3E0"),
      ]);

    series.rectangles.template.adapters.add("fill", function (fill, target) {
      if (target.dataItem.uid === selectedNode) {
        return fill;
      }
      return fill; //am5.color("rgb(220, 220, 220)");
    });

    // ...

    series.data.setAll([data]);
    console.log("series.dataItems", series.dataItems[0]);
    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);

    // ...
    chartRef.current = chart;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className={style.amTreeMapHeight}>
      <h2>Tree Map Chart from AMCharts library</h2>
      <p>Representing top cities by prescribers</p>
      <div id="chartdiv" style={{ width: "100%", height: "600px" }}></div>
      <div className={style.selection}>Selected City: {selectedNode}</div>
    </div>
  );
}

export default AMTreeMap;
