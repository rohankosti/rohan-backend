const fs = require("fs").promises;
let file = "data.txt";

async function run() {
  try {
    await fs.writeFile(file, "Hello, I am learning Node.js", "utf8");
    console.log("File Written Successfully");

    let data = await fs.readFile(file, "utf8");
    console.log("File Content:", data);

    await fs.appendFile(file, "\nI am MERN Stack Developer");
    console.log("File Appended Successfully");

    await fs.unlink(file);
    console.log("File Deleted Successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
