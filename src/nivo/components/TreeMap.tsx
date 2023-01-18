import { ResponsiveTreeMap } from "@nivo/treemap";
import React, { useEffect, useState } from "react";

import style from "./styles/TreeMap.module.scss";
import citiesData from "../../../data/citiesData.json";

export interface TreeMapProps {
  prop?: string;
}

function TreeMap({ prop = "default value" }: TreeMapProps) {
  const selectedNodesColour = "#900C3F";

  const [selectedNode, setSelectedNode] = useState(null);
  const [statefulCitiesData, setStatefulCitiesData] = useState(citiesData);
  const [selectedNodesPrevColour, setSelectedNodesPrevColour] = useState("");

  useEffect(() => {
    if (selectedNode) {
      let statefulData = [...statefulCitiesData.children];

      const selectedCity = statefulData.find((a) => a.id == selectedNode.id);
      const prevColour = selectedCity.labelIdColor;
      setSelectedNodesPrevColour(prevColour);

      if (selectedCity.labelIdColor === selectedNodesColour) {
        selectedCity.labelIdColor = selectedNodesPrevColour;
        setSelectedNode(null);
      } else {
        selectedCity.labelIdColor = selectedNodesColour;
      }

      setStatefulCitiesData({
        ...statefulCitiesData,
        statefulData,
      });
    }
  }, [selectedNode]);

  const handleClick = (node) => {
    if (!selectedNode || selectedNode?.id == node?.id) {
      setSelectedNode(node);
    }
  };

  return (
    <div className={style.nivoTreeMapChartHeight}>
      <h2>Responsive TreeMap</h2>
      <p>Representing cities in state</p>
      <ResponsiveTreeMap
        data={statefulCitiesData}
        valueFormat=".2s"
        leavesOnly
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        label="id"
        labelSkipSize={18}
        labelTextColor={"#fff"}
        orientLabel={false}
        colorBy="id"
        borderColor={"#fff"}
        colors={(obj: any): string => {
          return String(obj.data.labelIdColor);
        }}
        nodeOpacity={0.9}
        onClick={handleClick}
      />
      <div className={style.mapTitle}>Alabama</div>
      <div className={style.selection}>Selected City: {selectedNode?.id}</div>
    </div>
  );
}

export default TreeMap;
