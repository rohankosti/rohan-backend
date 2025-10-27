import http from "http";
import fs from "fs/promises";
import path, { dirname } from "path";
import url, { fileURLToPath } from "url";

let filurl = fileURLToPath(import.meta.url);
// console.log(filurl);

let dir = path.dirname(filurl);
// console.log(dir);

let filepath = path.join(dir, "index.html");
let csspath = path.join(dir,"style.css");
let jspath = path.join(dir,"app.js");
// console.log(filepath);
// console.log(csspath);
// console.log(jspath);



const server = http.createServer(async (req, res) => {
  try {
    // res.writeHead(200, { "content-type": "text/html" });
    if (req.url === "/" || req.url ==="/index.html") {
      let file1 = await fs.readFile(filepath, "utf-8");
      res.writeHead(200, { "content-type": "text/html" });
      res.end(file1);
    }

    else if(req.url ==="/style.css"){
        let file2 = await fs.readFile(csspath,"utf-8");
        res.writeHead(200,{"content-type":"text/css"});
        res.end(file2);

    }
    else if(req.url ==="/app.js"){
        let file3 = await fs.readFile(jspath,"utf-8");
        res.writeHead(200,{"content-type":"text/js"});
        res.end(file3);

    }
  } catch (error) {
    console.error(error);
  }
});

server.listen(5500, () => {
  console.log("server are runnig on port http://localhost:5500");
});
