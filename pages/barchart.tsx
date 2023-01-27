import Head from "next/head";
import Link from "next/link";

import Layout from "../src/components/Layout";
import BarChart from "../src/nivo/components/barchart/BarChart";

import styles from "../styles/Home.module.css";

export default function BarChartPage() {
  return (
    <Layout>
      <Link href="/" className={styles.backbutton}>
        <h3>&larr; Go back</h3>
      </Link>

      <div className={styles.grid}>
        <BarChart />
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
