// const  error  = require("console");
const filesystem = require("fs");
const path = require("path");

let file = "data.txt";
let data = "Hello Node.js";

let filepath = path.join(__dirname, file);

//callback give 2 parameter  beacuse callback hall not provide eroor function
//  like promise(catch ) or Async or Await (catch)

filesystem.writeFile(filepath, data, "utf-8", function (eror) {
    if (eror) {
        error.log("Can Not Write A File");
    } else {
        console.log("File Write Sucssesfully");
    }
    
    filesystem.readFile(filepath, "utf-8", (eror, data) => {
        if (eror) {
            console.log("Can't Read a File");
        } else {
            console.log(`Sucssesfully Read File${data}`);
        }
        
        let newdata = "Today Topic is Callback Hall !!...";
    filesystem.appendFile(filepath, newdata, (eror) => {
        if (eror) {
            error.log("Cant Update File ");
        } else {
            console.log("Sucssesfully Update File");
        }
        // filesystem.unlink(filepath, (eror) => {
        //     if (eror) {
        //         error.log("Cant Delate File");
        //     } else {
        //         console.log("Delate Sucssesfully");
        //     }
            
            let file1 = "data1.txt";
            let filepath1 = path.join(__dirname, file1);
            let newdata1 ="\ncallback give 2 parameter beacuse callback hall not provide eroor function\nlike promise(catch ) or Async or Await (catch)";
            filesystem.appendFile(filepath1, newdata1, (eror) => {
                if (eror) {
                    error.log("Can't Append or Create a File");
                } else {
                    console.log("Sucssesfully Update File");
                }
            });
        });
    });
  });
// });


//Agar Asyncronise kam krna hai to callnack funct use krna pdega ya to promise or async 


// or normal to syncronisly to fileSystem.readFileSync() use 