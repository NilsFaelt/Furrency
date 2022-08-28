import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Exchange from "./components/exchange/Exchange";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import KryptoExchange from "./components/kryptoExchange/KryptoExchange";
import MyCart from "./components/myCart/MyCart";

function App() {
  const [toogleCart, setToogleCart] = useState<boolean>(true);
  const [flagUrl, setFlagUrl] = useState<string>("");
  const [choseFlag, setChooseFlag] = useState<string | null>("nor");
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);

  const fetchFlag = async () => {
    try {
      const response = await axios.get(
        `https://countryflagsapi.com/svg/${choseFlag}`
      );
      console.log(response.config.url);
      if (response.config.url) {
        setFlagUrl(response.config.url);
      }
    } catch (err) {
      console.log(`something wnet wrong in fecthdata, error:${err}`);
    }
  };

  useEffect(() => {
    fetchFlag();
  }, [choseFlag]);

  return (
    <div className='App'>
      {toogleMenu ? <Menu setToogleMenu={setToogleMenu} /> : null}

      <Header
        toogleCart={toogleCart}
        setToogleCart={setToogleCart}
        setToogleMenu={setToogleMenu}
        toogleMenu={toogleMenu}
        flagUrl={flagUrl}
        setChooseFlag={setChooseFlag}
      />
      {toogleCart ? <MyCart /> : null}
      <div className='titleWrapper'>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          <h1>FURRENCY</h1>
        </Link>
        <p className='underTitle'>exchange at the lowest rates</p>
        <hr className='homeHr' />
        <Routes>
          <Route path='/' element={<Exchange />} />
          <Route path='/kryptoexchange' element={<KryptoExchange />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
