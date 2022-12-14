import axios from "axios";
import Styles from "./kryptoExchange.module.css";
import { CRYPTO_API_KEY } from "../../../keys";
import { useEffect, useState } from "react";
import CryptoCard from "./cryptoCard/CryptoCard";
import cryptoCodes from "../../json/cryptoCodes.json";
import { useDispatch, useSelector } from "react-redux";
import AddedToCartPopUp from "../addedToCartPopUP/AddedToCartPopUp";

interface Crypto {
  asset_id_base: string;
  asset_id_quote: string;
  rate: number;
  time: string;
}

interface FilteredCodes {
  symbol: string;
}

const KryptoExchange = () => {
  const currencys = useSelector((state: any) => state.cart);
  const [addedToCart, setAddedToCart] = useState<Boolean>(false);
  const [crypto, setCrypto] = useState<Crypto | null>(null);
  const [filteredCryptoCodes, setFilteredCryptoCodes] = useState<
    FilteredCodes[] | null
  >(null);
  const [searchCrypto, setSearchCrypto] = useState<string>("BTC");

  const filterCryptoCodes = () => {
    setFilteredCryptoCodes(
      cryptoCodes.filter((code) =>
        code.symbol.includes(searchCrypto.toUpperCase())
      )
    );
  };
  const fetchCryptoRates = async () => {
    try {
      const response = await axios.get(
        `https://rest.coinapi.io/v1/exchangerate/${searchCrypto}/USD`,
        {
          headers: {
            "X-CoinAPI-Key": `${CRYPTO_API_KEY}`,
          },
        }
      );
      setCrypto(response.data);
    } catch (err) {
      console.log(`something went wring in fetch crypto: ERR ${err}`);
    }
  };

  const handleCodeClick = (code: string) => {
    setSearchCrypto(code);
  };

  useEffect(() => {
    filterCryptoCodes();
  }, [searchCrypto]);

  useEffect(() => {
    if (searchCrypto.length >= 3) {
      fetchCryptoRates();
    }
  }, [searchCrypto]);

  if (addedToCart) {
    setTimeout(() => {
      setAddedToCart(false);
    }, 1500);
  }

  return (
    <div className={Styles.outerDiv}>
      <h2 className={Styles.title}>Crypto Rates</h2>
      <p className={Styles.underTitle}>All Crypto rates exhanges against USD</p>
      <input
        onChange={(e) => setSearchCrypto(e.target.value)}
        className={Styles.input}
        type='text'
        placeholder='Search'
        value={searchCrypto.toLocaleUpperCase()}
        maxLength={3}
      />

      {searchCrypto.length === 3 ? null : (
        <div className={Styles.rollOutCodes}>
          {filteredCryptoCodes?.map((code) => (
            <p
              key={code.symbol}
              onClick={() => handleCodeClick(code.symbol)}
              className={Styles.code}
            >
              {code.symbol}
            </p>
          ))}
        </div>
      )}

      <div>
        <CryptoCard setAddedToCart={setAddedToCart} crypto={crypto} />
      </div>
      {addedToCart ? <AddedToCartPopUp /> : null}
    </div>
  );
};

export default KryptoExchange;
