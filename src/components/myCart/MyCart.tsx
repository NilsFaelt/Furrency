import { Store } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayItems from "./DisplayItems";
import Styles from "./myCart.module.css";
import { removeAll } from "../../redux/addToCart";

interface Currencys {
  toPay: number;
  symbol: String;
  getValue: number;
  fromRate: string;
  id: string;
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

  console.log(allItems);
  return (
    <div className={Styles.container}>
      <div className={Styles.displayItemsDiv}>
        <h3 style={{ textAlign: "center" }}>
          {allItems.length < 1 ? <p>Cart Empty</p> : null}
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
