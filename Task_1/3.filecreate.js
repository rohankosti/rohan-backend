import readline from "readline/promises";
import fs from "fs/promises";


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const createfile =async ()=>{

  let file =  await rl.question("Enter Your File Name:-");
  let data=  await rl.question("What should be Content added to your file ?:-");

 await fs.writeFile(`${file}.txt`,data,"utf-8");
 console.log(`Your ${file}.txt File Created successfully!`);
 
    rl.close();

};

createfile();