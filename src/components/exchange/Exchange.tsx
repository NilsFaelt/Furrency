import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./exchange.module.css";

interface ExchangedRate {
  rate: number;
}

const Exchange = () => {
  const [exchangedRate, setExchangedRate] = useState<ExchangedRate | null>(
    null
  );
  const [fromRate, setFromRate] = useState("us");
  const [toRate, setToRate] = useState("nok");
  const [amount, setAmount] = useState<any>(1);
  const [toogleInfo, setToogleInfo] = useState<boolean>(false);
  console.log(exchangedRate);

  const fetchAllRAtes = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate.host/convert?from=${fromRate}&to=${toRate}`
      );
      console.log(response);
      setExchangedRate(response.data.info);
    } catch (err) {
      console.log(`something wnet wrong in fecthdata, error:${err}`);
    }
  };
  useEffect(() => {
    fetchAllRAtes();
  }, [fromRate, toRate]);

  return (
    <div className={Styles.outerDiv}>
      <form className={Styles.container}>
        <div className={Styles.searchDiv}>
          <label htmlFor=''>From</label>
          <input
            onChange={(e) => setFromRate(e.target.value)}
            className={Styles.input}
            type='text'
            placeholder='currency code'
            maxLength={3}
          />
        </div>
        <div className={Styles.searchDiv}>
          <label htmlFor=''>To</label>
          <input
            onChange={(e) => setToRate(e.target.value)}
            className={Styles.input}
            type='text'
            placeholder='currency code'
            maxLength={3}
          />
        </div>
        <p
          onMouseOver={() => setToogleInfo(true)}
          onMouseLeave={() => setToogleInfo(false)}
          onClick={() => setToogleInfo(!toogleInfo)}
          className={Styles.info}
        >
          i
        </p>
      </form>
      <div>
        <input
          onChange={(e) => setAmount(e.target.value)}
          className={Styles.input}
          type='number'
          placeholder='Amount'
        />
        <p>
          {amount}: {fromRate} <br /> Gives You <br />
          {exchangedRate ? exchangedRate.rate * amount : null}: {toRate}
        </p>
      </div>
      {toogleInfo ? (
        <p className={Styles.infoText}>
          Fill in your 3 letter currency code. <br /> <br /> For example: <br />{" "}
          Us dollar = usd, <br /> Euro = eur
        </p>
      ) : null}
    </div>
  );
};

export default Exchange;
