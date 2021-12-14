// import NUMBER from "./module.js";
// console.log(NUMBER)

// import MY_NAME from "./module.js";
// console.log(MY_NAME);

// import OBJECT from "./module.js";
// console.log(OBJECT);

// import { MY_NAME , printName } from "./module.js";
// printName("my name is liel from main")

import returnSom,{ MY_NAME, NUMBER, OBJECT, bool}   from "./module.js";

console.log(MY_NAME, ",", NUMBER, ",", OBJECT, ",", bool);

const aschaleArray = [10, 4, 50, 40, 32, 78];
console.log(returnSom(aschaleArray));
