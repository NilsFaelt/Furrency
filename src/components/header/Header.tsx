import Styles from "./header.module.css";
import { Button } from "@mui/material";
import { MenuIcon } from "@heroicons/react/outline";

interface Props {
  flagUrl: string;
  setChooseFlag: (flag: string) => void;
}

const Header: React.FC<Props> = ({ flagUrl, setChooseFlag }) => {
  return (
    <header className={Styles.container}>
      <MenuIcon className={Styles.burger} />
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
