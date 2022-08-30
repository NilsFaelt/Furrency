import { Link } from "react-router-dom";
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <div className={Styles.infoDivWrapper}>
        <div className={Styles.leftInfoDiv}>
          <div className={Styles.linkDiv}>
            <Link className={Styles.li} to={"/"}>
              Exchange
            </Link>
            <Link className={Styles.li} to={"/"}>
              Exchange
            </Link>
            <Link className={Styles.li} to={"/"}>
              Exchange
            </Link>
          </div>
          <div className={Styles.linkDiv}>
            <Link className={Styles.li} to={"/kryptoexchange"}>
              CryptoExchange
            </Link>
            <Link className={Styles.li} to={"/kryptoexchange"}>
              CryptoExchange
            </Link>
            <Link className={Styles.li} to={"/kryptoexchange"}>
              CryptoExchange
            </Link>
          </div>
        </div>
        <div className={Styles.rightInfoDiv}>
          <p className={Styles.sideTitle}>FURENCY EXCHANGE</p>
        </div>
      </div>
      <div className={Styles.lowerDiv}>
        <p className={Styles.footerText}>
          Furrency brings you the lowest exchange rates, and the most reliable
          exchange.{" "}
        </p>
        <p className={Styles.contactInfo}>
          Furrecny is located at: AdamsRoad 75, LA, 667-34 California, <br />{" "}
          Phone: 00-34 76442-45 <br />
          <a
            style={{ color: "white" }}
            href='mailto:TheNewDorkerMagazine@gmail.com'
          >
            {" "}
            Mail: TheNewDorkerMagazine@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
