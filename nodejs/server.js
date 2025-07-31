console.log("Hellooooo");
// console.log(global);

const os = require("os")
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

const path = require("path")
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// Importing from other files 

const math = require("./math")
console.log(math.mul(5,5));

const {add,sub,mul,div} = require("./math")

console.log(div(35,5));












