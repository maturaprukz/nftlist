//import {useRouter} from 'next/router'
import nft from "../../nft.json";
import styles from "../../styles/Id.module.css";
import Nav from "../../component/Nav";

/*export default () => {                //not support ssr
    const router = useRouter()
    const nfts = nft[router.query.id]
    if(!nfts) return <p></p>

    return (
        <div className='nft-container'>
            <div className='nft-head'>
                <h1>{nfts.title}</h1>
            </div>
            <div className='nft-body'>
                <p>Created By {nfts.created}</p>
                <p>Collection {nfts.collection}</p>
                <p>Current bid {nfts.bid}</p>
                <p>Auction ends in {nfts.time}</p>
            </div>
            
        </div>
    )
}
*/
const Nft = (props) => {
  return (
    <div>
      <Nav />
      <div className={styles.nftContainer}>
        <div className={styles.nftBody}>
          <div className={styles.nftImage}>
            <img src={props.nfts.image} style={{ height: 350, width: 400}} ></img>
          </div>
          <div className={styles.nftText}>
            <div className={styles.nftTitle}>
              <h1>#{props.nfts.id} - {props.nfts.title}</h1>
            </div>
            <div className={styles.nftSubtext1}>
              <p>Created By <br/>{props.nfts.created}</p>
              <p>Collection <br/> {props.nfts.collection}</p>
            </div>
            <div className={styles.nftSubtext2}>
              <p>Current bid <br/>{props.nfts.bid}</p>
              <p>Auction ends in <br/>{props.nfts.time}</p>
            </div>
            <button className={styles.placeBid}>Place a bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Nft.getInitialProps = ({ query }) => {
  return {
    nfts: nft[query.id],
  };
};

export default Nft;
