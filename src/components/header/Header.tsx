import Styles from "./header.module.css";
import { Button } from "@mui/material";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
interface Currencys {
  toPay: number;
  symbol: String;
  getValue: number;
  fromRate: string;
  id: string;
}

interface Props {
  flagUrl: string;
  setChooseFlag: (flag: string) => void;
  setToogleMenu: (flag: boolean) => void;
  setToogleCart: (flag: boolean) => void;
  toogleMenu: boolean;
  toogleCart: boolean;
}

const Header: React.FC<Props> = ({
  setToogleCart,
  flagUrl,
  setChooseFlag,
  setToogleMenu,
  toogleMenu,
  toogleCart,
}) => {
  const allItems: Currencys[] = useSelector(
    (state: any) => state.cart.currencys
  );

  return (
    <header className={Styles.container}>
      <div>
        <ShoppingCartIcon
          onClick={() => setToogleCart(!toogleCart)}
          className={Styles.cart}
        />
        <p className={Styles.itemInCartAmount}>{allItems.length}</p>
      </div>
      <MenuIcon
        onClick={() => setToogleMenu(!toogleMenu)}
        className={Styles.burger}
      />
      <div className={Styles.copuntryDiv}>
        <input
          onChange={(e) => setChooseFlag(e.target.value)}
          className={Styles.input}
          type='text'
          placeholder='Country'
        />
        <img className={Styles.flag} src={flagUrl} alt='' />
      </div>
    </header>
  );
};

export default Header;
