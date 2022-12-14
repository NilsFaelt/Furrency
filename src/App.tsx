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
import TravelInsuarnce from "./components/travelInsurance/TravelInsuarnce";
import { fetchFlag } from "./functions/fetch/fetchFlag";

function App() {
  const [toogleCart, setToogleCart] = useState<boolean>(false);
  const [flagUrl, setFlagUrl] = useState<string>("nor");
  const [choseFlag, setChooseFlag] = useState<string | null>("nor");
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);

  const fetchFlagWrapperFunc = async () => {
    const flag = await fetchFlag(choseFlag);
    flag ? setFlagUrl(flag) : null;
  };

  useEffect(() => {
    fetchFlagWrapperFunc();
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
      {toogleCart ? <MyCart setToogleCart={setToogleCart} /> : null}
      <div className='titleWrapper'>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          <h1>FURRENCY</h1>
        </Link>
        <p className='underTitle'>exchange at the lowest rates</p>
        <hr className='homeHr' />
        <Routes>
          <Route path='/' element={<Exchange />} />
          <Route path='/kryptoexchange' element={<KryptoExchange />} />
          <Route path='/travelinsurance' element={<TravelInsuarnce />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
