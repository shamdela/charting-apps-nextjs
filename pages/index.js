import Link from "next/link";

import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.heading}>Nivo</h1>
      <div className={styles.grid}>
        <Link href="/nivo/treemap" className={styles.card}>
          <h3>TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the Nivo library. This will highlight
            a selected node when we click it.
          </p>
        </Link>

        <Link href="/nivo/barchart" className={styles.card}>
          <h3>BarChart &rarr;</h3>
          <p>
            A POC for a BarChart chart from the Nivo library. This will check if
            we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/nivo/diverging-barchart" className={styles.card}>
          <h3>Diverging Stacked BarChart &rarr;</h3>
          <p>
            A POC for a Diverging BarChart chart from the Nivo library. This
            will check if we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/nivo/linechart" className={styles.card}>
          <h3>Responsive Line Chart &rarr;</h3>
          <p>
            A POC for a Line Chart chart from the Nivo library. Representing
            drug sales per month.
          </p>
        </Link>
      </div>
      <h1 className={styles.heading}>AM Charts</h1>
      <div className={styles.grid}>
        <Link href="/amcharts/barchart" className={styles.card}>
          <h3>AM Charts BarChart &rarr;</h3>
          <p>
            A POC for a BarChart chart from the AM Charts library. This will
            check if we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/amcharts/treemap" className={styles.card}>
          <h3>AM Charts TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the AM Charts library. This will
            highlight a selected node when we click it.
          </p>
        </Link>
      </div>
      <h1 className={styles.heading}>Highcharts</h1>
      <div className={styles.grid}>
        <Link href="/highcharts/barchart" className={styles.card}>
          <h3>Highcharts BarChart &rarr;</h3>
          <p>A POC for a stacked BarChart chart from the Highcharts library.</p>
        </Link>

        <Link href="/highcharts/treemap" className={styles.card}>
          <h3>Highcharts TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the Highcharts library. This will
            highlight a selected node when we click it.
          </p>
        </Link>
      </div>

      <h1 className={styles.heading}>Google Charts</h1>
      <div className={styles.grid}>
        <Link href="/google/barchart" className={styles.card}>
          <h3>Google Charts BarChart &rarr;</h3>
          <p>A POC for a stacked bar chart from the Google Charts library.</p>
        </Link>

        <Link href="/google/treemap" className={styles.card}>
          <h3>Google Charts TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the Google Charts library. This will
            highlight a selected node when we click it.
          </p>
        </Link>
      </div>
    </Layout>
  );
}
