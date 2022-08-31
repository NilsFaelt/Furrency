import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

interface Props {
  setToogleMenu: (toogle: boolean) => void;
}

const Menu: React.FC<Props> = ({ setToogleMenu }) => {
  return (
    <div
      onClick={() => setToogleMenu(false)}
      className={Styles.clickClosemenuDiv}
    >
      <nav
        onMouseLeave={() => setToogleMenu(false)}
        className={Styles.container}
      >
        <ul className={Styles.ul}>
          <Link className={Styles.li} to={"/"}>
            <li className={Styles.li}>Exchange</li>
          </Link>
          <Link className={Styles.li} to={"/kryptoexchange"}>
            <li className={Styles.li}>Crypto Exchange</li>
          </Link>
          <Link className={Styles.li} to={"/travelinsurance"}>
            <li className={Styles.li}>Travel Insurance</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
