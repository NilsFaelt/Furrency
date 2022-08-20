import axios from "axios";


export let allRates = null;

export  async function  fetchAllRAtes(){
try{
    const response = await axios.get('https://api.exchangerate.host/latest')
    allRates = response.data

}catch(err){
    console.log(`something wnet wrong in fecthdata, error:${err}`)
}
}