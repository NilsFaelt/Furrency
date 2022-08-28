import Styles from "./header.module.css";
import { Button } from "@mui/material";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

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
  console.log(flagUrl);
  return (
    <header className={Styles.container}>
      <ShoppingCartIcon
        onClick={() => setToogleCart(!toogleCart)}
        className={Styles.cart}
      />
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
