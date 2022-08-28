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
}

interface Props {
  item: Currencys;
}

const DisplayItems: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    dispatch(removeCurrency(id));
  };
  return (
    <div className={Styles.displayContainer}>
      <div>
        <p>
          Purchae: {item.toPay} {item.symbol}
        </p>

        <p>
          {" "}
          To pay: {item.toPay * 1.04} {item.fromRate}
        </p>

        <hr className={Styles.hr} />
      </div>
      <XCircleIcon
        onClick={() => removeItem(item.id)}
        className={Styles.xIcon}
      />
    </div>
  );
};

export default DisplayItems;
