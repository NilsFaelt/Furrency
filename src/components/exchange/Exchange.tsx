import { Button, tooltipClasses } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./exchange.module.css";
import { SwitchHorizontalIcon } from "@heroicons/react/outline";
import currencyCodes from "../../json/currencyCode.json";
import visa from "../../assets/visa.png";
import payPal from "../../assets/payPal.svg";
import { useDispatch } from "react-redux";
import { addCurrency } from "../../redux/addToCart";
import { nanoid } from "nanoid";
import AddedToCartPopUp from "../addedToCartPopUP/AddedToCartPopUp";

interface ExchangedRate {
  rate: number;
}
interface CurrencyCodes {
  code: string;
  symbol?: string;
  name?: string;
}

const Exchange = () => {
  const dispatch = useDispatch();
  const [exchangedRate, setExchangedRate] = useState<ExchangedRate | null>(
    null
  );
  const [redAmount, setRedAmount] = useState<boolean>(false);
  const [addedToCartPopUp, setaddedToCartPopUp] = useState<boolean>(false);
  const [fromRate, setFromRate] = useState("USD");
  const [fromRateRed, setFromRateRed] = useState<boolean>(false);
  const [toRateRed, setToRateRed] = useState<boolean>(false);
  const [toRate, setToRate] = useState("NOK");
  const [amount, setAmount] = useState<any>(0);
  const [toogleInfo, setToogleInfo] = useState<boolean>(false);
  const [currenccyRollOutFrom, setCurrenccyRollOutFrom] = useState<
    CurrencyCodes[] | null
  >(null);
  const [currenccyRollOutTo, setCurrenccyRollOutTo] = useState<
    CurrencyCodes[] | null
  >(null);
  const money: number | null = exchangedRate
    ? exchangedRate.rate * amount
    : null;

  const totalToPay = amount * 1.04;

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

  const addToCart = () => {
    const checkCodesFrom = currencyCodes.filter(
      (code) => fromRate === code.code
    );
    const checkCodesTo = currencyCodes.filter((code) => toRate === code.code);

    console.log(checkCodesFrom, "from,", checkCodesTo, "to");

    if (
      amount > 0 &&
      fromRate.length === 3 &&
      toRate.length === 3 &&
      checkCodesFrom.length === 1 &&
      checkCodesTo.length === 1 &&
      amount > -1
    ) {
      setRedAmount(false);
      setaddedToCartPopUp(true);
      setFromRateRed(false);
      setToRateRed(false);
      dispatch(
        addCurrency({
          fromRate: fromRate,
          toPay: amount,
          symbol: toRate,
          value: money?.toFixed(2),
          id: nanoid(),
          iGet: money,
          rate: exchangedRate?.rate,
        })
      );
    }
    if (amount < 0) {
      setRedAmount(true);
    }
    if (!amount) {
      setRedAmount(true);
    }
    if (amount && amount > 0) {
      setRedAmount(false);
    }
    if (fromRate.length !== 3 || checkCodesFrom.length !== 1) {
      setFromRateRed(true);
    }
    if (fromRate.length === 3 && checkCodesFrom.length === 1) {
      setFromRateRed(false);
    }
    if (toRate.length !== 3 || checkCodesTo.length !== 1) {
      setToRateRed(true);
    }
    if (toRate.length === 3 && checkCodesTo.length === 1) {
      setToRateRed(false);
    }
  };

  useEffect(() => {
    filterCurrencyCodeFrom();
  }, [fromRate]);
  useEffect(() => {
    filterCurrencyCodeTo();
  }, [toRate]);

  if (addedToCartPopUp) {
    setTimeout(() => {
      setaddedToCartPopUp(false);
    }, 1500);
  }

  return (
    <div className={Styles.outerDiv}>
      <SwitchHorizontalIcon onClick={switchRates} className={Styles.switch} />
      <form className={Styles.container}>
        <div className={Styles.searchDiv}>
          <label style={{ color: "white" }} htmlFor=''>
            From
          </label>
          <input
            value={fromRate}
            onChange={(e) => setFromRate(e.target.value.toUpperCase())}
            className={fromRateRed ? Styles.inputRed : Styles.input}
            type='text'
            placeholder='currency code'
            maxLength={3}
          />
          {fromRateRed ? <p style={{ color: "red" }}>Please add code</p> : null}
        </div>
        <div className={Styles.searchDiv}>
          <label style={{ color: "white" }} htmlFor=''>
            To
          </label>
          <input
            value={toRate}
            onChange={(e) => setToRate(e.target.value.toUpperCase())}
            className={toRateRed ? Styles.inputRed : Styles.input}
            type='text'
            placeholder='currency code'
            maxLength={3}
          />
          {toRateRed ? <p style={{ color: "red" }}>Please add code</p> : null}
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
            className={redAmount ? Styles.inputRed : Styles.input}
            type='number'
            placeholder='Amount'
            min={0}
          />
          {redAmount ? <p style={{ color: "red" }}>Please add amount</p> : null}
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
      <div className={Styles.amountAndCodesDivWrapper}>
        <div className={Styles.exchnageInfoText}>
          <p>
            All rates comes with a 4% exchange rate when purchasing a currency.{" "}
            <br />
            It's always better to buy before you leave for your trip.
          </p>
          <div className={Styles.exchnageInfoTextunderDiv}>
            <img className={Styles.payPalLogo} src={payPal} alt='' />
          </div>
        </div>
        <div className={Styles.currencyInfoDiv}>
          <p className={Styles.rateTitle}>Exchange Rate:</p>
          <hr style={{ width: "100%", marginBottom: "2vh" }} />
          <div className={Styles.innerRateText} style={{ textAlign: "start" }}>
            I Pay: {amount ? amount : 0}.00{" "}
            {currenccyRollOutFrom?.length === 1
              ? currenccyRollOutFrom[0]?.symbol + " "
              : null}
            <br />I Get: {money ? money.toFixed(2) + " " : null}
            {currenccyRollOutTo?.length === 1
              ? currenccyRollOutTo[0]?.symbol
              : null}
            <br />
            <p className={Styles.ratesToPay}>
              Exchange Rate: {money ? money * 0.04 : null} <br />
              Exchange Rate Percent: 4%
            </p>
            <p style={{ marginTop: "2vh" }}>
              Total to pay: {totalToPay.toFixed(2)}{" "}
              {currenccyRollOutFrom?.length === 1
                ? currenccyRollOutFrom[0]?.symbol
                : null}
            </p>
          </div>
          <div className={Styles.btnVisaLogoDiv}>
            <img style={{ width: "calc(30px + 2vw)" }} src={visa} alt='' />
            <Button onClick={addToCart} id='uiBtn' variant='contained'>
              To Cart
            </Button>
          </div>
        </div>
      </div>

      {toogleInfo ? (
        <p className={Styles.infoText}>
          Fill in your 3 letter currency code. <br /> <br /> For example: <br />{" "}
          Us dollar = usd, <br /> Euro = eur
        </p>
      ) : null}
      {addedToCartPopUp ? <AddedToCartPopUp /> : null}
    </div>
  );
};

export default Exchange;
