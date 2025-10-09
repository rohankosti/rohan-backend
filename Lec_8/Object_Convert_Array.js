const FileSystem = require("fs");
const path = require("path");
// const Path = require("path");

let Obj1 = {
  Company: "Samsung S24 Ultra 5G",
  Price: "50,000",
  ModelYear: "2025",
};
let Obj2 = {
  Company: "IQOO",
  Price: "32,000",
  ModelYear: "2025",
};

let File = "Object.json";
let Filepath = path.join(__dirname, File);
async function Writefile() {
  try {
    await FileSystem.promises.writeFile( Filepath,JSON.stringify(Obj1, null, 3),"utf-8");
    console.log("Sucssesfully File Write ");

    let res = await FileSystem.promises.readFile(Filepath, "utf-8");
    console.log("File Read1:-", res);
    console.log("Sucssesfully File Read1");

    await FileSystem.promises.appendFile(Filepath,JSON.stringify(Obj2, null, 3));
    console.log("Sucssesfully Append File");

    let res1 = await FileSystem.promises.readFile(Filepath, "utf-8");
    console.log("File Read2:-", res1);
    console.log("Sucssesfully File Read2");
  } catch (error) {
    console.error(error);
  }
}

// Writefile();

async function Convert() {
  try {
    let data = [];

    if (FileSystem.existsSync(Filepath)) {
      console.log("File Path Founded");

      let read = await FileSystem.promises.readFile(Filepath, "utf-8");
      // console.log("File Read:-", read);
      console.log(typeof read);

      if (read.trim().length > 0) {
        console.log("White Space Clean Line");

        data = JSON.parse(read);
        console.log(typeof data); //object
        console.log(data);

        if (!Array.isArray(data)) {
          //data = object, condition = false
          console.log("Your File Is Not In Array Form");
          data = [data];
        }
      }
    }
    // data.push(Obj1);
    //  data.push(Obj2);

    FileSystem.promises.writeFile(
      Filepath,
      JSON.stringify(data, null, 3),
      "utf-8"
    );
  } catch (error) {
    console.error(error);
  }
}

// Convert();

(async (name) => {
  try {
    if (FileSystem.existsSync(Filepath)) {
      console.log("File Found");
    }

    let serch = await FileSystem.promises.readFile(Filepath, "utf-8");
    //  console.log(serch);
    console.log("File Read Complate");

    if (serch.trim().length > 0) {
      console.log("Clean Line");
    }

    let data = JSON.parse(serch);
    // console.log(data);
    // console.log(typeof(data));

    if (!Array.isArray(data)) {
      console.log("Your File Is Not In Array");
      data = [data];
    }

    let filter = data.filter((e) => {
      if (e.Company === name) {
        console.log(
          "~~~~~~~~~~~~~~~~~~~~~~~~~~Details~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        );
        console.log(
          `Company:- ${e.Company}\nPrice:- ${e.Price}\nModel-Year:-${e.ModelYear}`
        );
        console.log(
          "~~~~~~~~~~~~~~~~~~~~~~~~~~Details~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        );
        return;
      } 
      //else {
      //   console.log(`Your Entred Company  Is Not Found`);
      // }
    });
  } catch (error) {
    console.error(error);
  }
})("Vivo");
