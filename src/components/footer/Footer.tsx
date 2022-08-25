import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={Styles.container}>
      <div className={Styles.infoDivWrapper}>
        <div className={Styles.leftInfoDiv}></div>
        <div className={Styles.rightInfoDiv}></div>
      </div>
      <div className={Styles.lowerDiv}>
        <p className={Styles.footerText}>
          Furrency brings you the lowest exchange rates, and the most reliable
          exchange.{" "}
        </p>
        <p className={Styles.contactInfo}>
          Furrecny is located at: AdamsRoad 75, LA, 667-34 California, <br />{" "}
          Phone: 00-34 76442-45 <br />
          Mail: Furrency@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
