import Link from "next/link";
import { useState, useEffect } from "react";

import Layout from "../../src/components/Layout";

import styles from "../../styles/Home.module.css";

import barChartData from "../../data/barChartDataTemp.json";
import RechartsBar from "../../src/recharts/components/barchart/RechartsBar";
import RechartsBarVertical from "../../src/recharts/components/barchart/RechartsBarVertical";

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
        <RechartsBar
          selectedPrescriber={selectedPrescriber}
          setSelectedPrescriber={setSelectedPrescriber}
        />

        <RechartsBarVertical
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
