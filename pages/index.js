import Link from "next/link";

import Layout from "../src/components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <Link href="/treemap" className={styles.card}>
          <h3>TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the Nivo library. This will highlight
            a selected node when we click it.
          </p>
        </Link>

        <Link href="/barchart" className={styles.card}>
          <h3>BarChart &rarr;</h3>
          <p>
            A POC for a BarChart chart from the Nivo library. This will check if
            we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/diverging-barchart" className={styles.card}>
          <h3>Diverging Stacked BarChart &rarr;</h3>
          <p>
            A POC for a Diverging BarChart chart from the Nivo library. This
            will check if we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/amcharts-barchart" className={styles.card}>
          <h3>AM Charts BarChart &rarr;</h3>
          <p>
            A POC for a BarChart chart from the AM Charts library. This will
            check if we can select a full bar and highlight it.
          </p>
        </Link>

        <Link href="/amcharts-treemap" className={styles.card}>
          <h3>AM Charts TreeMap &rarr;</h3>
          <p>
            A POC for a TreeMap chart from the AM Charts library. This will
            highlight a selected node when we click it.
          </p>
        </Link>
      </div>
    </Layout>
  );
}
