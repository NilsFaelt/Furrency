import axios from "axios";

export   const fetchFlag = async (choseFlag:string | null) => {
    try {
      const response = await axios.get(
        `https://countryflagsapi.com/svg/${choseFlag}`
      );
      console.log(response.config.url);
      if (response.config.url) {
        return response.config.url;
      }
      else return 'swe'
    } catch (err) {
      console.log(`something wnet wrong in fecthdata, error:${err}`);
    }
  };

  