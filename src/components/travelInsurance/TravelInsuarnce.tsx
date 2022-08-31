import { useState } from "react";
import Styles from "./travelInsurance.module.css";

const TravelInsuarnce = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ssn, setSsn] = useState("");
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Travel Insurance</h2>
      <div className={Styles.card}>
        <h2>My Insurance card</h2>
        <div className={Styles.infoDivContaienrWrapper}>
          <div>
            <p className={Styles.textCard}>{name}</p>
            <p className={Styles.textCard}>{familyName}</p>
          </div>
          <div>
            <p className={Styles.textCard}>{birthDate}</p>
            <p className={Styles.textCard}>{ssn}</p>
          </div>
        </div>
        <div>
          <p>CALL: 0046-5562-88</p>
          <p>FURRENCY TRAVEL INSUARNCE</p>
        </div>
      </div>
      <form className={Styles.form} action=''>
        <input
          onChange={(e) => setName(e.target.value)}
          className={Styles.input}
          placeholder='Name'
          type='text'
        />
        <input
          onChange={(e) => setFamilyName(e.target.value)}
          className={Styles.input}
          placeholder='Family Name'
          type='text'
        />
        <input
          onChange={(e) => setBirthDate(e.target.value)}
          className={Styles.input}
          placeholder='Date Of Birth'
          type='number'
        />
        <input
          onChange={(e) => setSsn(e.target.value)}
          className={Styles.input}
          placeholder='SSN'
          type='text'
        />
      </form>
    </div>
  );
};

export default TravelInsuarnce;
