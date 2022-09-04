import { Button } from "@mui/material";
import { useState } from "react";
import Styles from "./travelInsurance.module.css";

const TravelInsuarnce = () => {
  const [toogleImgInput, setToogleImgInput] = useState<boolean>(false);
  const [changeImg, setchangeImg] = useState<string>(
    "https://images.unsplash.com/photo-1547499417-29204c97a299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  );
  const [flipCard, setFlipCard] = useState<boolean>(true);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ssn, setSsn] = useState("");
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Travel Insurance</h2>
      <p
        onClick={() => setToogleImgInput(!toogleImgInput)}
        className={Styles.changeImgText}
      >
        Change background?
      </p>
      <form action=''>
        <input
          placeholder='Paste Url to img'
          type='text'
          onChange={(e) => setchangeImg(e.target.value)}
        />
      </form>
      {flipCard ? (
        <div
          style={{ backgroundImage: `url(${changeImg})` }}
          onClick={() => setFlipCard(!flipCard)}
          className={Styles.card}
        >
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
        <div
          style={{ backgroundImage: `url(${changeImg})` }}
          onClick={() => setFlipCard(!flipCard)}
          className={Styles.card}
        >
          <div className={Styles.infoDivContaienrWrapper}>
            <div className={Styles.imgDiv}>
              <img
                src='https://www.investopedia.com/thmb/KfGSwVyV8mOdTHFxL1T0aS3xpE8=/1148x1148/smart/filters:no_upscale()/qr-code-bc94057f452f4806af70fd34540f72ad.png'
                className={Styles.img}
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
