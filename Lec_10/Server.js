const http = require("http");
// console.log(http);

// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'});

//     res.end("Server Runnig in 3000 port");
// });

// // let port = 3000;
// server.listen(3000,()=>{
//  console.log("Server Runnig in port 3000");

// });

// writeHead,end:-  ye dono res ki method  hai 


//Simple Routing:----------------------------------

const server = http.createServer((req, res) => {
    res.writeHead(200,{"content-type":"text/html"})
  if (req.url === "/home") {
    res.end(`<h3>This Is A Home Page</h3>`);
  } else if (req.url === "/about") {
    res.end(`<h3>This Is A About Page</h3>`);
  } else if (req.url === "/contact") {
    res.end(`<h3>This Is A Contact Us Page</h3>`);
  }
  else{
    res.writeHead(404,{"content-type":"text/html"})
    res.end(`<h3>This Page Is Not Found</h3>`);
  }
});

server.listen(3000, () => {
  console.log("Server Are Runnig On Port 3000");
});
