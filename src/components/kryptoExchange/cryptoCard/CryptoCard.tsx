import { Button } from "@mui/material";
import Styles from "./cryproCard.module.css";

const CryptoCard = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.titleDiv}>
        <h2>ETH</h2>
        <p>ETHEREUM</p>
      </div>
      <div className={Styles.rateDiv}>
        <div>
          <p>Exchange Rate: 3009 $</p>
          <p>As of date:</p>
        </div>
        <div className={Styles.feeDiv}>
          <p>All exchange comes with 4% fee </p>
          <p>Total fee: 4 dolar</p>
        </div>
      </div>
      <Button id='btnCrypto'>Add to cart</Button>
    </div>
  );
};

export default CryptoCard;
