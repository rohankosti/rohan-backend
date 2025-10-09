

// os_demo.js
const os = require("os");
// console.log(os);

console.log("CPU Architecture:", os.arch());              // x64, arm, etc.
console.log("Platform:", os.platform());                 // win32, linux, darwin
console.log("OS Type:", os.type());                      // Windows_NT, Linux, Darwin
console.log("Hostname:", os.hostname());                // Computer ka naam
console.log("OS Release:", os.release());               // OS version
console.log("System Uptime (seconds):", os.uptime());   // Uptime in seconds
console.log("Total Memory (bytes):", os.totalmem());    // Total RAM
console.log("Free Memory (bytes):", os.freemem());      // Free RAM
console.log("CPU Info:", os.cpus());                    // Array of CPU cores
console.log("Network Interfaces:", os.networkInterfaces()); // IP & MAC
console.log("Current User Info:", os.userInfo());       // username, homedir, shell
