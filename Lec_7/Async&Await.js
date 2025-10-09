const Filesystem = require("fs").promises;
const Path = require("path");

let file = "data.txt";
let filepath = Path.join(__dirname, file);

let data = "Lenevo IdepadGaming Laptop 3PH";

async function GetData() {
  try {
    await Filesystem.writeFile(filepath, data, "utf-8"); // file write
    console.log("Create Or Write File Sucssesfully");

    let res = await Filesystem.readFile(filepath, "utf-8"); //file read
    console.log("Sucssesfully File Read:", res);

    let newfile = "\nDell G15 Gaming Laptop H";
    await Filesystem.appendFile(filepath, newfile); // file update
    console.log("File Sucssesfully Update File");

    let res1 = await Filesystem.readFile(filepath, "utf-8"); //newfile read
    console.log(`New File Read:${res1}`);

    // await Filesystem.unlink(filepath)      //delate file
    // console.log("Sucssesfully Delate File !...");
    

  } catch (error) {
    // console.error(error);
    console.error(error)
  }
}

GetData();
