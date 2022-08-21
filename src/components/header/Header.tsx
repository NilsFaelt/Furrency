import Styles from "./header.module.css";
import { Button } from "@mui/material";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

interface Props {
  flagUrl: string;
  setChooseFlag: (flag: string) => void;
  setToogleMenu: (flag: boolean) => void;
  toogleMenu: boolean;
}

const Header: React.FC<Props> = ({
  flagUrl,
  setChooseFlag,
  setToogleMenu,
  toogleMenu,
}) => {
  console.log(flagUrl);
  return (
    <header className={Styles.container}>
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
