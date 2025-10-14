// import { Readline } from "readline/promises";
import readline from "readline/promises";

const API_KEY = "46dfe177296c0b28925441215611e07d";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const city =await rl.question("Enter City Name");
console.log(city);
rl.close();

async function weather() {
  try {
      
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
     console.log(url);

     const fech =await fetch(url);
     console.log(fech);

          
} 
catch (error) {
    console.error(error);
}
}

weather();
