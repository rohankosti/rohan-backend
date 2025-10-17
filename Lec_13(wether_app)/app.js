// import { Readline } from "readline/promises";
import readline from "readline/promises";
import http from "http";
import fs from "fs/promises";
import url, { fileURLToPath } from "url";
import path from "path";
import { readFile } from "fs/promises";

const fileurl = fileURLToPath(import.meta.url);
// console.log(fileurl);

const dirpath = path.dirname(fileurl);
// console.log(dirpath);

const filepath = path.join(dirpath, "index.html");
console.log(filepath);

const API_KEY = "46dfe177296c0b28925441215611e07d";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function weather() {
  const server = http.createServer(async (req, res) => {
    try {
      if (req.url === "/") 
        {
        const read = await fs.readFile(filepath, "utf-8");
        // console.log(read);
        res.writeHead(200, { "content-type": "text/html" });
        res.end(read);
      } 
      else if (req.url === "/style.css") 
        {
        const csspath = path.join(dirpath, "style.css");
        // console.log(csspath);
        const read1 = await fs.readFile(csspath, "utf-8");
        // console.log(read1);
        res.writeHead(200, { "content-type": "text/css" });
        res.end(read1);
      }

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
        console.log(`WIND:-${JSON_DATA.wind.speed}`);
        console.log(`COUNTRY:-${JSON_DATA.sys.country} ℃`);
      }
    } catch (error) {
      console.error(error);
    }
    //   }
    // }
  });

  server.listen(5500, () => {
    console.log("SERVER ARE RUNNIG ON PORT http://localhost:5500");
  });
}

weather();
