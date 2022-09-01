import { Button } from "@mui/material";
import Styles from "./cryproCard.module.css";
import { useDispatch } from "react-redux";
import { addCurrency, removeAll } from "../../../redux/addToCart";
import { nanoid } from "nanoid";
import { useState } from "react";
import AddedToCartPopUp from "../../addedToCartPopUP/AddedToCartPopUp";

interface Crypto {
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
  time?: string;
}
interface Props {
  crypto: Crypto | null;
  setAddedToCart: (toogle: boolean) => void;
}

const CryptoCard: React.FC<Props> = ({ crypto, setAddedToCart }) => {
  const dispatch = useDispatch();
  const rate = crypto?.rate ? crypto?.rate * 0.04 : null;

  const addToCart = () => {
    if (crypto?.rate) {
      setAddedToCart(true);
      dispatch(
        addCurrency({
          fromRate: "USD",
          toPay: crypto?.rate.toFixed(2),
          symbol: crypto?.asset_id_base,
          value: crypto?.rate.toFixed(2),
          id: nanoid(),
          iGet: crypto.rate,
          crypto: true,
        })
      );
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.titleDiv}>
        <h2>{crypto?.asset_id_base}</h2>
        <p>{crypto?.asset_id_quote}</p>
      </div>
      <div className={Styles.rateDiv}>
        <div>
          <p>Exchange Rate: {crypto?.rate.toFixed(2)} $</p>
        </div>
        <div className={Styles.feeDiv}>
          <p>All exchange comes with 4% fee </p>
          <p>Total fee: {crypto?.rate ? rate?.toFixed(2) : 0} dolar</p>
        </div>
      </div>
      <Button onClick={() => addToCart()} id='btnCrypto'>
        Add to cart
      </Button>
    </div>
  );
};

export default CryptoCard;
