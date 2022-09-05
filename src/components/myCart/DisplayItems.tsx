import React, { FormEvent, useEffect, useRef, useState } from "react";
import Styles from "./myCart.module.css";
import { XCircleIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrency } from "../../redux/addToCart";
import { CogIcon } from "@heroicons/react/outline";
import { updateAmount } from "../../redux/addToCart";

interface Currencys {
  toPay: number;
  symbol: String;
  getValue: number;
  fromRate: string;
  id: string;
  crypto: boolean;
  iGet: number;
  rate: number;
}

interface Props {
  item: Currencys;
}

const DisplayItems: React.FC<Props> = ({ item }) => {
  const [toogleinput, setToogleInput] = useState<boolean>(false);
  const [changeValue, setChangeValue] = useState<any>(item.iGet);
  const [igetState, setIgetState] = useState(item.iGet);
  const inputRef: any = useRef(null);
  const value = item.iGet / item.rate;
  console.log(value, "valllle");
  const toPay = item.toPay * 1.04;
  const exchangedToPay = item.toPay * 0.04;
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    dispatch(removeCurrency(id));
  };

  console.log(item);
  const updateValue = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      updateAmount({
        id: item.id,
        amount: changeValue,
      })
    );
    inputRef.current.focus();
    setToogleInput(false);
  };
  console.log(inputRef);

  useEffect(() => {
    setIgetState(item.iGet);
    console.log("hej");
  }, [updateValue]);

  return (
    <div className={Styles.displayContainer}>
      <div className={Styles.textDiv}>
        {item.crypto ? <p className={Styles.crypto}>CRYPTO</p> : null}
        {toogleinput ? (
          <form
            className={Styles.form}
            onSubmit={(e) => updateValue(e)}
            action=''
          >
            Purchase:{" "}
            <input
              onChange={(e) => setChangeValue(e.target.value)}
              ref={inputRef}
              value={changeValue}
              className={Styles.input}
              type='number'
              step={"any"}
            />{" "}
            {item.symbol}
          </form>
        ) : (
          <p className={Styles.text}>
            Purchase: {igetState} {item.symbol}
            <CogIcon
              className={Styles.cogIcon}
              onClick={() => setToogleInput(!toogleinput)}
            />
          </p>
        )}
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
