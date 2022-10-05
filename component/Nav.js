import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import nft from "../nft.json";

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <div className={styles.imgSearch}>
          <Link href="../">
            <img
              src="/images/home_icon.png"
              alt="home icon"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <p />
          <span>
            <form>
              <input
                className={styles.searchInput}
                placeholder="Search..."
                //
                onChange={(e) => setFilter(e.target.value)}
              />
            </form>
          </span>
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.market}>
          <Link href="/market" passHref>
            <a>Marketplace</a>
          </Link>
        </div>
        <div className={styles.feed} passHref>
          <Link href="/feed">
            <a>Feed</a>
          </Link>
        </div>
        <div className={styles.stake} passHref>
          <Link href="/stake">
            <a>Stake</a>
          </Link>
        </div>
        <div className={styles.dao} passHref>
          <Link href="/dao">
            <a>DAO</a>
          </Link>
        </div>
        <button className={styles.wallet}>Connect Wallet</button>
      </div>
    </div>
  );
}
