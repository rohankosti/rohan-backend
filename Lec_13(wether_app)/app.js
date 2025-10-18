// import { Readline } from "readline/promises";
import readline from "readline/promises";
import http from "http";
import fs from "fs/promises";
import url, { fileURLToPath, URLSearchParams } from "url";
import path from "path";
import { readFile } from "fs/promises";

const fileurl = fileURLToPath(import.meta.url);
// console.log(fileurl);

const dirpath = path.dirname(fileurl);
// console.log(dirpath);

const filepath = path.join(dirpath, "index.html");
console.log(filepath);

const API_KEY = "46dfe177296c0b28925441215611e07d";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

async function weather() {
  const server = http.createServer(async (req, res) => {
    try {
      if (req.url === "/") {
        const read = await fs.readFile(filepath, "utf-8");
        // console.log(read);
        res.writeHead(200, { "content-type": "text/html" });
        res.end(read);
      } else if (req.url === "/style.css") {
        const csspath = path.join(dirpath, "style.css");
        // console.log(csspath);
        const read1 = await fs.readFile(csspath, "utf-8");
        // console.log(read1);
        res.writeHead(200, { "content-type": "text/css" });
        res.end(read1);
      } else if (req.method === "POST" && req.url === "/wetherdata") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
          // console.log(body);
        });
        req.on("end", async () => {
          let urlpara = new URLSearchParams(body);
          // console.log(urlpara);
          let object = Object.fromEntries(urlpara);
          // console.log(object);
          let CITY = object.city;
          console.log(CITY);
          // const CITY = await rl.question("ENTER CITY NAME:- ");
          // console.log(CITY);
          // rl.close();

          const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
          // console.log(URL);
          const FETCH_URL = await fetch(URL);
          // console.log(FETCH_URL);
          if (FETCH_URL.status) {
            const JSON_DATA = await FETCH_URL.json();
            //  console.log(JSON_DATA);
            res.writeHead(200, { "content-type": "text/html" });
            res.write(`
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Weather Report - ${CITY}</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
                    <style>
                      body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: linear-gradient(to right, #74ebd5, #ACB6E5);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                      }
                      .weather-card {
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 20px;
                        padding: 30px;
                        max-width: 400px;
                        text-align: center;
                        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                      }
                      .weather-card h2 {
                        font-weight: bold;
                        margin-bottom: 20px;
                        color: #007BFF;
                      }
                      .weather-card p {
                        font-size: 18px;
                        margin: 8px 0;
                        color: #333;
                      }
                      .weather-icon {
                        font-size: 50px;
                        margin-bottom: 15px;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="weather-card">
                      <div class="weather-icon">🌤️</div>
                      <h2>${CITY} Weather</h2>
                      <p>🌡️ Temperature: ${JSON_DATA.main.temp} ℃</p>
                      <p>🌡️ Max Temp: ${JSON_DATA.main.temp_max} ℃</p>
                      <p>💧 Humidity: ${JSON_DATA.main.humidity}%</p>
                      <p>🌬️ Wind Speed: ${JSON_DATA.wind.speed} m/s</p>
                      <p>🌎 Country: ${JSON_DATA.sys.country}</p>
                    </div>
                  </body>
                  </html>
                  `);
                res.end();
              }
          });
      }
    } catch (error) {
      console.error(error);
    }
  });

  server.listen(5500, () => {
    console.log("SERVER ARE RUNNIG ON PORT http://localhost:5500");
  });
}

weather();
