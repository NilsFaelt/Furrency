import React from "react";
import Styles from "./myCart.module.css";
import { XCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { removeCurrency } from "../../redux/addToCart";

interface Currencys {
  toPay: number;
  symbol: String;
  getValue: number;
  fromRate: string;
  id: string;
  crypto: boolean;
  iGet: number | null;
}

interface Props {
  item: Currencys;
}

const DisplayItems: React.FC<Props> = ({ item }) => {
  const toPay = item.toPay * 1.04;
  const exchangedToPay = item.toPay * 0.04;
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    dispatch(removeCurrency(id));
  };

  return (
    <div className={Styles.displayContainer}>
      <div className={Styles.textDiv}>
        {item.crypto ? <p className={Styles.crypto}>CRYPTO</p> : null}
        <p className={Styles.text}>
          Purchase: {item.iGet?.toFixed(2)} {item.symbol}
        </p>
        <p className={Styles.textUnder}>
          {" "}
          To pay: {toPay.toFixed(2)} {item.fromRate}
        </p>

        <hr className={Styles.hr} />
      </div>
      <div className={Styles.rateDiv}>
        <p>Exchange rate: 4%</p>
        <p>
          Exchange fee: {exchangedToPay.toFixed(2)} {item.fromRate}{" "}
        </p>
      </div>
      <XCircleIcon
        onClick={() => removeItem(item.id)}
        className={Styles.xIcon}
      />
    </div>
  );
};

export default DisplayItems;
