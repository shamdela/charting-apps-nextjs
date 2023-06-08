import { ResponsiveTreeMap } from "@nivo/treemap";
import React, { useEffect, useState } from "react";

import style from "./styles/TreeMap.module.scss";
import citiesData from "../../../../data/citiesData.json";
import citiesData2States from "../../../../data/citiesData2States.json";

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
      // Make a copy of data's children array elements
      let statefulData = [...statefulCitiesData.children];

      // Find selected node/city
      const selectedState = statefulData.find(
        (a) => a.id === selectedNode.pathComponents[1]
      );

      // Uncomment line below for when using 2 state data
      /*const selectedCity = selectedState?.children.find(
        (a) => a.id == selectedNode.id
      );*/
      // Comment out line below for when using 2 state data
      const selectedCity = selectedState;

      // Set colour of selected node into state
      const prevColour = selectedCity.labelIdColor;
      setSelectedNodesPrevColour(prevColour);

      // Check if selected city's colour is the highlighted colour
      if (selectedCity.labelIdColor === selectedNodesColour) {
        // If so, its already been selected so flip its colour back
        selectedCity.labelIdColor = selectedNodesPrevColour;
        setSelectedNode(null);
      } else {
        // Otherwise set it to highlighted colour
        selectedCity.labelIdColor = selectedNodesColour;
      }

      // Set updated data/colour into our stateful copy
      setStatefulCitiesData({
        ...statefulCitiesData,
        statefulData,
      });
    }
  }, [selectedNode]);

  const handleClick = (node: { id: any }) => {
    // If previous selectedNode and current selection are the same -> then perfor actions.
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
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        label="id"
        labelSkipSize={8}
        labelTextColor={"#fff"}
        orientLabel={false}
        borderColor={"#fff"}
        colors={(obj: any): string => {
          return String(obj.data.labelIdColor);
        }}
        nodeOpacity={0.9}
        onClick={handleClick}
        /*         parentLabel={(obj: any): string => {
          return obj.pathComponents[1];
        }} */
        parentLabel="id"
        parentLabelPosition="bottom"
        parentLabelTextColor="#000"
        parentLabelPadding={25}
        parentLabelSize={30}
      />
      <div className={style.selection}>Selected City: {selectedNode?.id}</div>
    </div>
  );
}

export default TreeMap;
