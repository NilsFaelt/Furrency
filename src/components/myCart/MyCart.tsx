import { Store } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DisplayItems from "./DisplayItems";
import Styles from "./myCart.module.css";
import { removeAll } from "../../redux/addToCart";
import { XCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";

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
  setToogleCart: (toogle: boolean) => void;
}

const MyCart: React.FC<Props> = ({ setToogleCart }) => {
  const dispatch = useDispatch();
  const allItems: Currencys[] = useSelector(
    (state: any) => state.cart.currencys
  );

  const handleClearClick = () => {
    dispatch(removeAll());
  };

  const displayItemsAmountInCart = allItems.filter((item) => {
    if (item.toPay > 0) return item;
  });

  return (
    <div className={Styles.container}>
      <XCircleIcon
        className={Styles.xIconClose}
        onClick={() => setToogleCart(false)}
      />

      <div className={Styles.displayItemsDiv}>
        <div className={Styles.explainTextDiv}>
          <p>Price</p>
          <p>Fee</p>
        </div>
        <hr className={Styles.hr} />
        <h3 style={{ textAlign: "center" }}>
          {displayItemsAmountInCart.length === 0 ? <p>Cart Empty</p> : null}
        </h3>
        {allItems
          ? allItems?.map((item: Currencys) => {
              if (item.toPay > 0) {
                return <DisplayItems key={item.id} item={item} />;
              }
              return;
            })
          : null}
      </div>
      <div className={Styles.btnDiv}>
        <Button onClick={() => handleClearClick()} id='btnCart' color='error'>
          Clear Cart{" "}
        </Button>
        <Button id='btnCart'>Checkout</Button>
      </div>
    </div>
  );
};

export default MyCart;
