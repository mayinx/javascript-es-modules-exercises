// Importing specific functions / variables from a module
import sum, { substract, multiply, divide } from "./lib/math.js";
import { hehaheha as suedkorea } from "./lib/math.js";

console.log(sum(4, 5));
console.log(substract(8, 4));
console.log(multiply(6, 4));
console.log(divide(8, 2));
console.log(suedkorea);

// Alt: Include the whole module (including default + named export) in one go
// import sum, * as MyElaboratedMath from "./lib/math.js";

// console.log(sum(4, 5));
// console.log(MyElaboratedMath.substract(8, 4));
// console.log(MyElaboratedMath.multiply(6, 4));
// console.log(MyElaboratedMath.divide(8, 2));
// console.log(MyElaboratedMath.hehaheha);
