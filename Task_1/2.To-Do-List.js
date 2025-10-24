import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

async function Qustion() {
  console.log("======================------------=======================");  
  console.log("1.Enter Any Task...");
  console.log("2.View Task..");
  console.log("3.Exit !...");
  console.log("======================************=======================");  
  const data = await rl.question("Please Selecet Any One Option:-");
  // console.log(data);

  if (data === "1") {
    const task = await rl.question("Enter Task :- \n");
    todos.push(task);
    console.log("Task Add:- \n", task);
   await Qustion();

  } else if (data === "2") {
    console.log("Your Task List:-");
    todos.forEach((task,index) => {
      console.log(`${index+1}.${task}`);
    });
    Qustion();

  } 
  else if (data === "3") {
    console.log("Exiting....");
    rl.close();

  } 
  else{
    console.log("Invalid Option Try Again");
    await Qustion();
  }
}

Qustion();
