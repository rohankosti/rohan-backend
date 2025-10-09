const http = require("http");
const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "home.html");
const aboutpath = path.join(__dirname, "about.html");
const contactpath = path.join(__dirname, "contact.html");
const servicepath = path.join(__dirname, "service.html");

const { text } = require("stream/consumers");

const server = http.createServer((req, res) => {
  
  if (req.url === "/home") {
    fs.readFile(filepath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        // res.end("<h2>THIS IS A HOME PAGE</h2>");
        res.end(eror);
      }
    });
  }
  
  else if (req.url === "/about") {
    fs.readFile(aboutpath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        // res.end("<h2>THIS IS A HOME PAGE</h2>");
        res.end(eror);
      }
    });
  } 
  
  else if (req.url === "/contact") {
    fs.readFile(contactpath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(500, { "content-type": "text/html" });
        // res.end("<h2>THIS IS A HOME PAGE</h2>");
        res.end(eror);
      }
    });
  } 
  
  else if (req.url === "/service") {
    fs.readFile(servicepath, "utf-8", (eror, data) => {
      if (data) {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      } 
      else {
        res.writeHead(500, { "content-type": "text/html" });
        // res.end("<h2>THIS IS A HOME PAGE</h2>");
        res.end(eror);
      }
    });
} else if(req.url === "/abc"){
      // res.writeHead(500, { "content-type": "text/html" }); 
      res.write("<h2>THISeesdsd PAGE</h2>");
      res.end();
    }
  
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h2>404 PAGE ARE NOT FOUND</h2>");
  }
});


server.listen(3000, () => {
  console.log("SERVER ARE RUNNIG ON PORT 3000"); //node --watch server.js:-  comd hai 
  // console.log(`http://localhost:3000/home`);
  
});
