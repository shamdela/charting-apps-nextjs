import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../../src/components/Layout";
import HighchartTreemap from "../../src/highcharts/components/treemap/HighchartTreemap";

import styles from "../../styles/Home.module.css";

import barChartData from "../../data/barChartDataTemp.json";

export default function HighchartsBarChartPage() {
  const [selectedPrescriber, setSelectedPrescriber] = useState(-1);
  const [selectedPrescriberName, setSelectedPrescriberName] = useState("");

  useEffect(() => {
    const prescriberFound = barChartData.find(
      (prescriber, index) => index === selectedPrescriber
    );

    setSelectedPrescriberName(prescriberFound?.prescriber);
  }, [selectedPrescriber]);

  return (
    <Layout>
      <Link href="/" className={styles.backbutton}>
        <h3>&larr; Go back</h3>
      </Link>

      <div className={styles.grid}>
        <HighchartTreemap
          selectedPrescriber={selectedPrescriber}
          setSelectedPrescriber={setSelectedPrescriber}
        />
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}
