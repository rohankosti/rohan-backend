const FileSystem = require("fs").promises;
const path = require("path");
// const Path = require("path");

let data = "Rohan Koshti\nMittal Koshti";
let File = "data.txt";
let FilePath = path.join(__dirname, File);

FileSystem.writeFile(FilePath, data, "utf-8")
  .then(() => {
    console.log("FileWrite & Create Sucssesfully");
    return FileSystem.readFile(FilePath, "utf-8");
  })
  .then((data) => {
    console.log(`File Read:${data}`);
    let file1 = "data1.txt";
    let data1 = "Jimmy The Rotwiller Most Dangerous Breade";
    let filepath1 = path.join(__dirname, file1);
    return FileSystem.appendFile(filepath1, data1);
  })
  .then(() => {
    console.log("Update File Sucssesfully");
    return FileSystem.readFile(filepath1, "utf-8");
  })
  .then((data) => {
    console.log(`File Read:${data}`);
    // return FileSystem.unlink(FilePath)
  })
  // .then(()=>{
  //     console.log("Delate File Sucssesfully !...");
  // })
  .catch((err) => {
    console.error(err);
    //  console.("Some Error In Your File !.....",error);
  });

//Promise chain
