import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./exchange.module.css";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import currencyCodes from "../../json/currencyCode.json";
import visa from "../../assets/visa.png";

interface ExchangedRate {
  rate: number;
}
interface CurrencyCodes {
  code: string;
  symbol?: string;
  name?: string;
}

const Exchange = () => {
  const [exchangedRate, setExchangedRate] = useState<ExchangedRate | null>(
    null
  );
  const [fromRate, setFromRate] = useState("usd");
  const [toRate, setToRate] = useState("nok");
  const [amount, setAmount] = useState<any>(1);
  const [toogleInfo, setToogleInfo] = useState<boolean>(false);
  const [currenccyRollOutFrom, setCurrenccyRollOutFrom] = useState<
    CurrencyCodes[] | null
  >(null);
  const [currenccyRollOutTo, setCurrenccyRollOutTo] = useState<
    CurrencyCodes[] | null
  >(null);
  console.log(exchangedRate);

  const switchRates = () => {
    const fromHolder = fromRate;
    const toHolder = toRate;
    setToRate(fromHolder);
    setFromRate(toHolder);
  };
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

  const filterCurrencyCodeFrom = () => {
    setCurrenccyRollOutFrom(
      currencyCodes.filter((code) => code.code.includes(fromRate.toUpperCase()))
    );
    console.log(currenccyRollOutFrom);
  };

  const filterCurrencyCodeTo = () => {
    setCurrenccyRollOutTo(
      currencyCodes.filter((code) => code.code.includes(toRate.toUpperCase()))
    );
  };

  const setFromOnClick = (code: string) => {
    setFromRate(code);
  };
  const setToOnClick = (code: string) => {
    setToRate(code);
  };

  useEffect(() => {
    filterCurrencyCodeFrom();
  }, [fromRate]);
  useEffect(() => {
    filterCurrencyCodeTo();
  }, [toRate]);

  return (
    <div className={Styles.outerDiv}>
      <SwitchHorizontalIcon onClick={switchRates} className={Styles.switch} />
      <form className={Styles.container}>
        <div className={Styles.searchDiv}>
          <label htmlFor=''>From</label>
          <input
            value={fromRate}
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
            value={toRate}
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
      <div></div>
      <div className={Styles.amountAndCodesDiv}>
        {currenccyRollOutFrom && fromRate && fromRate.length !== 3 ? (
          <div className={Styles.countryCodes}>
            {currenccyRollOutFrom.map((code) => (
              <p
                className={Styles.curencyCodeText}
                onClick={() => setFromOnClick(code.code)}
              >
                {code.code}
              </p>
            ))}
          </div>
        ) : (
          <div className={Styles.placeholderDiv}></div>
        )}
        <div>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className={Styles.input}
            type='number'
            placeholder='Amount'
          />
          <div className={Styles.amountAndCodesDivWrapper}>
            <p className={Styles.exchnageInfoText}>
              All rates comes with a 4% exchange rate when purchasing a
              currency. <br />
              Itas always better to buy before you leave for your trip.
            </p>
            <div className={Styles.currencyInfoDiv}>
              <p style={{ fontFamily: "serif" }}>Exchange Rate:</p>
              <p>
                <hr style={{ width: "100%", marginBottom: "1vh" }} />
                {amount + ""}
                {currenccyRollOutFrom?.length === 1
                  ? currenccyRollOutFrom[0]?.symbol + " "
                  : null}
                = {exchangedRate ? exchangedRate.rate * amount + " " : null}
                {currenccyRollOutTo?.length === 1
                  ? currenccyRollOutTo[0]?.symbol
                  : null}
              </p>
              <Button id='uiBtn' variant='contained'>
                Purchase
              </Button>
              <img
                style={{ width: "calc(30px + 2vw)", marginTop: "4vh" }}
                src={visa}
                alt=''
              />
            </div>
          </div>
        </div>
        {currenccyRollOutTo && toRate && toRate.length !== 3 ? (
          <div className={Styles.countryCodesTo}>
            {currenccyRollOutTo.map((code) => (
              <p
                className={Styles.curencyCodeText}
                onClick={() => setToOnClick(code.code)}
              >
                {code.code}
              </p>
            ))}
          </div>
        ) : (
          <div className={Styles.placeholderDiv}></div>
        )}
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
