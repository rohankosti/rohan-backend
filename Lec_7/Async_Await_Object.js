const FileSystem = require("fs").promises;
const Path = require("path");
const { json } = require("stream/consumers");

//Note:- Json Always Single Object Or Array Store Multiple object In Json File Then Store Object Inside The Array
//object no data direact write nai thatu use json
//json is a global method
// json =X , JSON =_/ uppercase mai hona chahioye 

let Data = {
  Name: "Samsung S24 Ultra",
  Price: "1,25,000",
  ManufactureYear: "2025",
};
let file = "product.json";
let filepath = Path.join(__dirname, file);

async function Writefile() {
  try {
    await FileSystem.writeFile(filepath,JSON.stringify(Data,null,3),"utf-8");
    console.log("Sucssesfully File Create And Write");
     } 
  catch (error) 
  {
    console.error(error);
  }
}

Writefile();


// const ReadFile = async ()=>{
 
//     try {
//         let read = await FileSystem.readFile(filepath,"utf-8")
        
//         console.log("Sucssesfully Read File:\n",read);
//         // console.log(typeof(read));
        
//         let obj = JSON.parse(read)
//         // console.log(typeof(obj));
//         console.log(obj);
        
//         console.log("!!**********Product Data**********!!");
//         console.log(`Product Name is : ${obj.Name}`);
//         console.log(`Product Price is : ${obj.Price}`);
//         console.log(`Product Model Year is : ${obj.ManufactureYear}`);
//         console.log("!!**********END**********!!");
//         } 

//     catch (error) 
//     {
//         console.error(error);
//     }
// }

// ReadFile();  

let NewData = {
  Name: "Apple 17 Pro Max",
  Price: "1,00,000",
  ManufactureYear: "2025",
};
async function Appendfile() {
  try {
    await FileSystem.appendFile(filepath,JSON.stringify(NewData,null,3),"utf-8");
    console.log("Sucssesfully File Create And Write");
     } 
  catch (error) 
  {
    console.error(error);
  }
}

Appendfile();


