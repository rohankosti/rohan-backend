const fileSystem = require("fs");
const path = require("path");
// const path = require("path");
// console.log(path);

let file= "data.txt";
let newfile = "data1.txt";
let data = "Heyy I Am Rohan Kosti ,\nAnd i Am Currently Learn Node.js"

let filepath = path.join(__dirname,file);
let filepath1 = path.join(__dirname,newfile);
// console.log(p);

fileSystem.writeFileSync(filepath,data,"utf-8");

let f = fileSystem.readFileSync(filepath,"utf-8");
console.log(f);
console.log("Sucssesfull Read File");

let newdata= "\nI Am MERN Stack Devloper !.."
fileSystem.appendFileSync(filepath,newdata);
console.log("Succesfully Update File");

// fileSystem.unlinkSync(filepath);
// console.log("Sucssesfully Delate File");

let newdata1 = "Complate My Bachlor Degre And Currently Coaching in Patel Web Solution"
let append =fileSystem.appendFileSync(filepath1,newdata1);
console.log("newfile append");




// syncronisly kam krna hai to normal fileSystem.readFileSync() use 
//Asyncronisly to use kro callback async promise
 






