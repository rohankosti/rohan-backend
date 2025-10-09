const filesystem = require("fs").promises;
const { error } = require("console");
const path = require("path");

let data = "Hello Rohan ";
let file = "data.txt";
let filepath =path.join(__dirname,file);

//This Is Promise Chain

filesystem.writeFile(filepath,data,"utf-8")
.then(()=>{
  console.log("Sucssesfully Write Or Create File");
  return filesystem.readFile(filepath,"utf-8")
})
.then((data)=>{
 console.log("Sucssesfully ReadFile",data);
 return filesystem.appendFile("\nHow Reach In Node.js")
})
// .then(()=>{
//     console.log("Sucssesfully Update Or Append File");
//     return filesystem.unlink(filepath);
// })
.then(()=>{
    console.log("Sucssesfully Delate File");
})

.catch((error)=>{
  console.log("Any Error In Your File",error);
  
});

