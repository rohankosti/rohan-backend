// import http from 'http';   //normal import
import { createServer } from "http"; // this calld destructing
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url"; // import method  mai use ke liye
import { URLSearchParams } from "url";

let filedir = fileURLToPath(import.meta.url);
// console.log(filedir);

let dirname = path.dirname(filedir);
// console.log(dirname);

let filepath = path.join(dirname, "register.html");
// console.log(filepath);

const server = createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/" || req.url === "/register.html") {
        let data = await readFile(filepath, "utf-8");
        // console.log(data);
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else if (req.url === "/register.css") {
        let csspath = path.join(dirname, "register.css");
        // console.log(csspath);
        let read = await readFile(csspath, "utf-8");
        // console.log(read);
        res.writeHead(200, { "content-type": "text/css" });
        res.end(read);
      } else if (req.url === "/login.html") {
        let loginpath = path.join(dirname, "login.html");
        let logpath = await readFile(loginpath, "utf-8");
        console.log(logpath);
        res.writeHead(200, { "content-type": "text/html" });
        res.end(logpath);
      } else if (req.url === "/login.css") {
        let logincsspath = path.join(dirname, "login.css");
        let logcsspath = await readFile(logincsspath, "utf-8");
        console.log(logcsspath);
        res.writeHead(200, { "content-type": "text/css" });
        res.end(logcsspath);
      }
    }

    if (req.method === "POST" && req.url === "/RegisterData") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
        // console.log(body);
        let urlpara = new URLSearchParams(body);
        let object = Object.fromEntries(urlpara);
        console.log(object);
      });
    }
  } catch (error) {
    console.error(error);
  }
});

server.listen(5500, () => {
  console.log(`SERVER ARE RUNNING ON PORT 5500`);
  console.log("http://localhost:5500");
});
