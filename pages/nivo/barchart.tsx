import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../../src/components/Layout";
import BarChart from "../../src/nivo/components/barchart/BarChart";
import SubBarChart from "../../src/nivo/components/barchart/SubBarChart";

import styles from "../../styles/Home.module.css";

import barChartData from "../../data/barChartDataTemp.json";

export default function BarChartPage() {
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
        <BarChart
          selectedPrescriber={selectedPrescriber}
          setSelectedPrescriber={setSelectedPrescriber}
        />
        <SubBarChart selectedPrescriberName={selectedPrescriberName} />
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
