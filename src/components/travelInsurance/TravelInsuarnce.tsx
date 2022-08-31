import { Button } from "@mui/material";
import { useState } from "react";
import Styles from "./travelInsurance.module.css";

const TravelInsuarnce = () => {
  const [flipCard, setFlipCard] = useState<boolean>(true);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ssn, setSsn] = useState("");
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Travel Insurance</h2>
      {flipCard ? (
        <div onClick={() => setFlipCard(!flipCard)} className={Styles.card}>
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
      ) : (
        <div onClick={() => setFlipCard(!flipCard)} className={Styles.card}>
          <div className={Styles.infoDivContaienrWrapper}>
            <div className={Styles.imgDiv}>
              <img
                className={Styles.img}
                src='https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png'
                alt=''
              />
            </div>
          </div>
        </div>
      )}
      <p>Make sure all info is correct</p>
      <form className={Styles.form} action=''>
        <input
          onChange={(e) => setName(e.target.value)}
          className={Styles.input}
          placeholder='Name'
          type='text'
          maxLength={10}
        />
        <input
          onChange={(e) => setFamilyName(e.target.value)}
          className={Styles.input}
          placeholder='Family Name'
          type='text'
          maxLength={10}
        />
        <input
          onChange={(e) => setBirthDate(e.target.value)}
          className={Styles.input}
          placeholder='Date Of Birth'
          type='text'
          maxLength={12}
        />
        <input
          onChange={(e) => setSsn(e.target.value)}
          className={Styles.input}
          placeholder='SSN'
          type='text'
          maxLength={10}
        />
      </form>

      <Button id='uiBtn' variant='contained'>
        NEXT
      </Button>
    </div>
  );
};

export default TravelInsuarnce;
