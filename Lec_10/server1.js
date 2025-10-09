const http = require("http");
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "home.html");
const aboutpath = path.join(__dirname, "about.html");
const contactpath = path.join(__dirname, "contact.html");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/home") {
    fs.readFile(filepath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(eror);
      }
    });
  } else if (req.url === "/about") {
    fs.readFile(aboutpath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(eror);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile(contactpath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(eror);
    }
});
}

else{
      res.writeHead(404, { "content-type": "text/html" });
       res.end("<h2>Page Is Not Found</h2>")
  }
});

server.listen(5000, () => {
  console.log("server runnig on 5000 port");
});
