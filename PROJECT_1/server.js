import http from "http";
import fs from "fs/promises";
import path, { dirname } from "path";
import url, { fileURLToPath, URLSearchParams } from "url";
import crypto from "crypto";
import { error } from "console";

let filurl = fileURLToPath(import.meta.url);
// console.log(filurl);

let dir = path.dirname(filurl);
console.log(dir);

let filepath = path.join(dir, "index.html");
let csspath = path.join(dir, "style.css");
let jspath = path.join(dir, "app.js");
// console.log(filepath);
// console.log(csspath); 
// console.log(jspath);

let linkpath = path.join(dir, "Data", "link.json");
// console.log(linkpath);

//Data le rha hai link.json file mai se and store object form
const loadlinks = async () => {
  try {
    let linkread = await fs.readFile(linkpath, "utf-8");
    //  console.log(linkread);
    //  if (!linkread.trim()) return {};
    return JSON.parse(linkread);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(linkpath, JSON.stringify({}), "utf-8");
      return {};
    }
    throw error;

    console.log(error);
  }
};

// savelinks () function save links variable data(jo object form hai) store  and write link.json file
const savelinks = async (links) => {
  await fs.writeFile(linkpath, JSON.stringify(links), "utf-8");
};

const server = http.createServer(async (req, res) => {
  try {
    // res.writeHead(200, { "content-type": "text/html" });
    if (req.url === "/" || req.url === "/index.html") {
      let file1 = await fs.readFile(filepath, "utf-8");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file1);
    } else if (req.url === "/style.css") {
      let file2 = await fs.readFile(csspath, "utf-8");
      res.writeHead(200, { "content-type": "text/css" });
      res.end(file2);
    } else if (req.url === "/app.js") {
      let file3 = await fs.readFile(jspath, "utf-8");
      res.writeHead(200, { "content-type": "text/js" });
      res.end(file3);
    }
    //show link one by in html form
    else if (req.url === "/links") {
      let links = await loadlinks();
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(links));
    } else if (req.method === "POST" && req.url === "/urlshort") {
      //loadlinks() function store link.json file data an object form and store link variable
      let links = await loadlinks();
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        console.log(body);
        // const urlpara = URLSearchParams(body);//  both are optional
        // const object = Object.fromEntries(urlpara)// both are optional

        const { url, shortcode } = JSON.parse(body);
        if (!url) {
          res.writeHead(400, { "content-type": "text/plain" });
          res.end("URL Is Required !...");
          return;
        }
        //shortcode mai value hai to truthy to vo use kro ni falsy to randome generate
        const finalshortcode =
          shortcode || crypto.randomBytes(4).toString("hex"); //shortcode :truthy

        //links ek object hai or finalshortcode ek string hai to usek liye []
        if (links[finalshortcode]) {
          res.writeHead(400, { "content-type": "text/plain" });
          res.end("Short Code Already Exits. Pls Choose Another");
          return;
        }

        links[finalshortcode] = url;

        await savelinks(links);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ success: true, shortCode: finalshortcode })); //optional
      });
    } else {
      //URL redirect in click in html form
      const links = await loadlinks();
      const shortCode = req.url.slice(1);
      console.log("links red.", req.url);
      if (links[shortCode]) {
        res.writeHead(302, { location: links[shortCode] });
        return res.end();
      }
      res.writeHead(404, { "content-type": "text/plain" });
      return res.end("Shortend URL Is Not Foound");
    }
  } catch (error) {
    console.error(error);
  }
});

server.listen(5500, () => {
  console.log("server are runnig on port http://localhost:5500");
});
