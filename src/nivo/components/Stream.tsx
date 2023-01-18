import { ResponsiveStream } from "@nivo/stream";

import { streamData } from "../../../data/streamData";

const Stream = () => {
  return (
    <div style={{ height: "500px", width: "1200px" }}>
      <h2>Responsive Stream</h2>
      <ResponsiveStream
        data={streamData}
        keys={["Ronaldo", "Neymar", "Messi"]}
        margin={{
          top: 50,
          right: 180,
          bottom: 100,
          left: 100,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 15,
          tickRotation: 0,
          legend: "Number of Years Playing",
          legendOffset: 40,
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number of Goals",
          legendOffset: -50,
        }}
        offsetType="silhouette"
        colors={{ scheme: "accent" }}
        fillOpacity={0.85}
        borderColor={{ theme: "background" }}
        dotBorderColor={{
          from: "color",
          modifiers: [["darker", 0.7]],
        }}
        legends={[
          {
            anchor: "bottom-right",
            directPion: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                },
              },
            ],
          },
        ]}
      />       
      <footer>
        <p
          style={{
            fontStyle: "oblique",
            marginTop: "0.5rem",
          }}
        >
          Not real stats
        </p>
      </footer>
    </div>
  );
};

export default Stream;