import axios from "axios";
import Styles from "./kryptoExchange.module.css";
import { CRYPTO_API_KEY } from "../../../keys";
import { useEffect, useState } from "react";
import CryptoCard from "./cryptoCard/CryptoCard";
import cryptoCodes from "../../json/cryptoCodes.json";
import { useSelector } from "react-redux";

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
  console.log(currencys);
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
  console.log(filteredCryptoCodes);

  useEffect(() => {
    if (searchCrypto.length === 3) {
      console.log("fetching mufker");
      fetchCryptoRates();
    }
  }, [searchCrypto]);

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
        <CryptoCard crypto={crypto} />
      </div>
    </div>
  );
};

export default KryptoExchange;
