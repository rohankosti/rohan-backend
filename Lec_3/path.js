let path = require("path");
// console.log(path);

console.log(__dirname);
console.log(__filename);

const file = path.join("hr", "emp", "emp.js");
console.log(file);

const exname = path.extname("abc.xyz");
console.log(exname);

if (exname == ".xyz") {
  console.log("Extension Is Valid");
} else {
  console.log("Extension Is Not Valid");
}
const pars = path.parse(file);
console.log("pars",pars);
const bsname = path.basename(file);
console.log("bsname",bsname);
const res = path.resolve(file);
console.log("resolve",res);
console.log(path.relative(__dirname,'../lec_1/lec_1_calculation.js'));
