import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { fetchAllRAtes } from "./functions/fetchData";
import { Routes, Route } from "react-router-dom";
import Exchange from "./components/exchange/Exchange";
import Menu from "./components/menu/Menu";

function App() {
  const [allRates, setAllRates] = useState<any>([]);
  const [flagUrl, setFlagUrl] = useState<string>("");
  const [choseFlag, setChooseFlag] = useState<string | null>("nor");
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);

  // const fetchAllRAtes = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://api.exchangerate.host/convert?from=USD&to=EUR"
  //     );
  //     setAllRates(response.data);
  //   } catch (err) {
  //     console.log(`something wnet wrong in fecthdata, error:${err}`);
  //   }
  // };
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
        setToogleMenu={setToogleMenu}
        toogleMenu={toogleMenu}
        flagUrl={flagUrl}
        setChooseFlag={setChooseFlag}
      />
      <div className='titleWrapper'>
        <h1>FURRENCY</h1>
        <p>exchange at the lowest rates</p>
        <hr className='homeHr' />
        <Routes>
          <Route path='/' element={<Exchange />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
