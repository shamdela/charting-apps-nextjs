import { ResponsiveTreeMap } from "@nivo/treemap";
import React, { useState } from "react";

import style from "./styles/RechartsTreeMap.module.scss";
import citiesData from "../../../../data/citiesData.json";
import { ResponsiveContainer, Treemap } from "recharts";

export interface RechartsTreeMapProps {
  prop?: string;
}

const topCitiesChartColorScheme = [
  "#4F9B8F",
  "#5DA398",
  "#6BABA1",
  "#79B3AA",
  "#87BBB3",
  "#91C7BC",
  "#A4CBC5",
  "#B2D3CE",
  "#C0DBD7",
  "#CEE3E0",
];

const CustomizedContent = ({
  root,
  depth,
  x,
  y,
  width,
  height,
  index,
  colors,
  value,
  id,
  selectedNode,
  nodeInFocus,
}) => {
  function getColour(color) {
    if (selectedNode) {
      if (selectedNode.id === id) {
        return color;
      }
      if (nodeInFocus === id) {
        return color;
      }
      return "#DCDCDC";
    } else {
      return color;
    }
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: getColour(colors[index]),
          stroke: nodeInFocus && nodeInFocus === id ? "#000" : "#fff",
          strokeWidth: 2,
          strokeOpacity: 1 / (depth + 1e-10),
          fontFamily: "Proxima Nova Regular",
        }}
      />
      {console.log("width", id, width)}
      <text
        x={x + width / 2}
        y={y + height / 2 + 7}
        textAnchor="middle"
        fill="#000"
        fontSize={13}
      >
        {width > 100 || id?.length <= 10 ? id : ""}
      </text>
    </g>
  );
};

function RechartsTreeMap({ prop = "default value" }: RechartsTreeMapProps) {
  const selectedNodesColour = "#900C3F";

  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeInFocus, setNodeInFocus] = useState<string | null>(null);
  const [statefulCitiesData, setStatefulCitiesData] = useState(citiesData);

  const handleClick = (node: { id: string }) => {
    if (node.id === selectedNode?.id) {
      setSelectedNode(null);
    } else {
      setSelectedNode(node);
    }
  };

  return (
    <div className={style.rechartsTreeMapChartHeight}>
      <h2>TreeMap from Recharts library</h2>
      <p>Representing cities in state</p>
      <ResponsiveContainer width="95%" height="100%">
        <Treemap
          width={830}
          height={250}
          data={citiesData.children}
          dataKey="value"
          aspectRatio={4 / 3}
          stroke="#3a3b3c"
          fill="#4F9B8F"
          onClick={handleClick}
          onMouseEnter={(node) => {
            setNodeInFocus(node.id);
          }}
          onMouseLeave={() => {
            setNodeInFocus(null);
          }}
          content={
            <CustomizedContent
              colors={topCitiesChartColorScheme}
              selectedNode={selectedNode}
              nodeInFocus={nodeInFocus}
            />
          }
        />
      </ResponsiveContainer>
      <div className={style.selection}>Selected City: {selectedNode?.id}</div>
    </div>
  );
}

export default RechartsTreeMap;
