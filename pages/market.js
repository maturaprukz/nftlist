import nft from "../../nft.json";
import Link from "next/link";
import Nav from "../component/Nav";
import styles from "../styles/Market.module.css";

export default function market() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <card className={styles.nftList}>
        {Object.entries(nft).map((value, index) => {
          return (
            <detail className={styles.card} key={index}>
              <Link href="../nft/[id]" as={"/nft/" + value[0]}>
                <a>
                  <img src={value[1].image} style={{ height: 350, width: 400}} />
                  <div className={styles.textCard}>
                    <h2>{value[1].title}</h2>
                    <p>Created By : {value[1].created}</p>
                    <p>Current Bid : {value[1].bid}</p>
                    <h4>Click here for bidding</h4>
                  </div>
                </a>
              </Link>
            </detail>
          );
        })}
      </card>
    </div>
  );
}

//<img src={props.nfts.image}></img>
