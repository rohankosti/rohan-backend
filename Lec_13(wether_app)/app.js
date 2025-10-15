// import { Readline } from "readline/promises";
import readline from "readline/promises";

const API_KEY = "46dfe177296c0b28925441215611e07d";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function weather() {
  try {
    const CITY = await rl.question("ENTER CITY NAME:- ");
    console.log(CITY);
    rl.close();

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
    // console.log(URL);

    const FETCH_URL = await fetch(URL);
    // console.log(FETCH_URL);

     if (FETCH_URL.status) {
      
       const JSON_DATA = await FETCH_URL.json();
      //  console.log(JSON_DATA);
      console.log(`TEMPRETURE:-${JSON_DATA.main.temp} ℃`);
      console.log(`MAX_TEMPRETURE:-${JSON_DATA.main.temp_max} ℃`);
      console.log(`HUMIDITY:-${JSON_DATA.main.humidity}`);
      console.log(`WIND:-${JSON_DATA.wind}`);
      console.log(`COUNTRY:-${JSON_DATA.sys.country} ℃`);
      
       
     }

  } catch (error) {
    console.error(error);
  }
}

weather();
