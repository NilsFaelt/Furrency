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
  id: any;
}

const MyCart: React.FC = () => {
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
        {allItems
          ? allItems?.map((item: Currencys) => {
              return <DisplayItems item={item} />;
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
