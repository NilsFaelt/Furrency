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
      <nav className={Styles.container}>
        <ul className={Styles.ul}>
          <li className={Styles.li}>Crypto Exchange</li>
          <li className={Styles.li}>Crypto Exchange</li>
          <li className={Styles.li}>Crypto Exchange</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
