import readline from "node:readline/promises"; // return promise built in module ecma script module

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//readline promise return nhi krta vo callback hai means 2 parameter pr uska ulternative path hai async await 

// rl.question("what is your name? :- ", (name) => {
//   console.log(`Hello ${name}`);
  
//   rl.question("What is your age:-", (age) => {
//     console.log(`My age is ${age}`);
//     rl.close();
   
//   });
// });

async function main() {

  let data1= await rl.question("What is your Hobby :- ");
   console.log(data1);

  let data2= await rl.question("Kis color ki chaddi phene ho  :- ");
   console.log(data2);
   
   rl.close();
}

main(); 





