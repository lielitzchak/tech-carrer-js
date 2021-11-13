// var family = ["omer", "liel", "shilat", "benjamin", "malachi"];
// console.log(family);
// var city = ["tel-aviv", "talmon", "jerusalem", "eilat", "haifa"];
// console.log(family.sort());
// console.log(city);
// console.log(city.sort());

// var num = [3,41, 1, 9, 4, 2, 7];
// console.log(num.sort());

// var num2 = [30, 1, 13, 40, 2, 7, 51, 23];
// console.log(num2);

// console.log(num2.sort(big_or_small));

// console.log(num2.sort(Small_or_big));

// function big_or_small(a, b) {
//   return a - b;
// }

// function Small_or_big(a, b) {
//   return b - a;
// }

// var obj = [
//   { name: "shirts", price: 40 },
//   { name: "dress", price: 10 },
//   { name: "dress", price: 5 },
//   { name: "dress", price: 91 },
//   { name: "dress", price: 564 },
// ];
// function to_big(a, b) {
//   return a.price - b.price;
// }
// var result1 = obj.sort(to_big);
// console.log(result1);

// function to_small(a, b) {
//   return b.price - a.price;
// }

// var result2 = obj.sort(to_small);

// console.log(result2);
// var sting = ["liel", "moshe", "orly"];
// console.log(sting.reverse());

// var num = [1, 2, 3, 4, 5];
// console.log(sting.toString());

// var sting = ["liel", "moshe", "orly"];
// console.log(sting.join(""));
// console.log(sting.join(" "));
// console.log(sting.join(" # "));
// var fruit = ["Banana", "Strawberry", "Anonymous", "Tomato", "Olive"];
// console.log(fruit);

// var fruit_a_b = fruit.sort();
// console.log(fruit_a_b.reverse());

//? exeresie 1
// var btn = document.getElementById("expensive_to_cheep");
// var the_days = new Date();
// var car = [
//   { model: "lexus", price: 675, year: the_days.getFullYear() - 15 },
//   { model: "Motors", price: 21, year: the_days.getFullYear() - 5 },
//   { model: "Subaru", price: 120, year: the_days.getFullYear() - 14 },
//   { model: "Audi ", price: 86532, year: the_days.getFullYear() - 10 },
//   { model: "Toyota ", price: 256, year: the_days.getFullYear() - 74 },
//   { model: "Mercedes ", price: 5223, year: the_days.getFullYear() - 38 },
// ];
// var to_cheep = car.sort(to_big);

// btn.onclick = () => {
//   for (let i = 0; i < to_cheep.length; i++) {
//     document.getElementById(
//       "pElement"
//     ).innerHTML += `model: ${car[i].model}<br> <b>price: ${car[i].price}</b> <br> year: ${car[i].year}<br><br><br>`;
//   }
// };

// function to_big(a, b) {
//   return a.price - b.price;
// }

// exeresie 2

// var btn2 = document.getElementById("btn2");
// function to_new(a, b) {
//   return a.year - b.year;
// }
// btn2.onclick = () => {
//   for (let i = 0; i < to_cheep.length; i++) {
//     document.getElementById(
//       "pElement"
//     ).innerHTML += `model: ${car[i].model}<br> <b>price: ${car[i].price}</b> <br> year: ${car[i].year}<br><br><br>`;
//   }
// };

// 19.09.2021

//! exeresie 1

var num1 = 5;
// switch (num1) {
//   case 2:
//     console.log(num1 * 2);
//     break;
//   case 5:
//     console.log(num1 * 5);
//     break;
//   case 7:
//     console.log(num1 * 7);
//     break;
//   case 10:
//     console.log(num1 * 10);
//     break;
//   default:
//     console.log(num1);
// }
//! exeresie 2

// if (num1 == 2) {
//   console.log(num1 * 2);
// } else if (num1 == 5) {
//   console.log(num1 * 5);
// } else if (num1 == 7) {
//   console.log(num1 * 7);
// } else if (num1 == 10) {
//   console.log(num1 * 10);
// } else {
//   console.log(num1);
// }
//! exeresie 3
// var num2 = 5;

// if (num2 % 2 == 0) {
//   console.log(num2 * 2, "if1");
// } else if (num2 / 5) {
//   console.log(num2 * 5, "if2");
// } else {
//   console.log("not found");
// }

// switch (num2 % 2 == 0) {
//   case 2:
//   case 5:
//     console.log(num2 * 5);
//   default:
//     console.log("not found");
// }

//! exeresie 4
// var num3 = 5;
// switch (num3) {
//   case 1:
//     console.log("day1");
//     break;
//   case 2:
//     console.log("day2");
//     break;
//   case 3:
//     console.log("day3");
//     break;
//   case 4:
//     console.log("day4");
//     break;
//   case 5:
//     console.log("day5");
//     break;
//   case 6:
//     console.log("day6");
//     break;
//   case 7:
//     console.log("day7");
//     break;
// }
//! exeresie 5
// var user = {
//   name: "",
//   email: "",
//   type: "super-admin",
// };

// switch (user.type) {
//   case "super-admin":
//     console.log("U R super-admin");
//     break;
//   case "admin":
//     console.log("U R admin");
//     break;
//   case "client":
//     console.log("U R client");
//     break;
//   default:
//     console.log("you are our loyal client");
// }
//! exeresie 6

// var Pomegranate_btn = document.getElementById("Pomegranate_btn");
// var Pears_btn = document.getElementById("Pears_btn");
// var Apples_btn = document.getElementById("Apples_btn");
// var Bananas_btn = document.getElementById("Bananas_btn");
// var orange_btn = document.getElementById("orange_btn");

// function clickOnBtn(btnClick) {
//   switch (btnClick) {
//     case "Pomegranate":
//       console.log(btnClick);
//       break;
//     case "Bananas":
//       console.log(btnClick);
//       break;
//     case "orange":
//       console.log(btnClick);
//       break;
//     case "Apples":
//       console.log(btnClick);
//       break;
//     default:
//       console.log("kk");
//       break;
//   }
// }

// Apples_btn.onclick=()=>{

// }

// Pomegranate_btn.onclick = () => {
//   clickOnBtn("Pomegranate");
// };
// Pears_btn.onclick = () => {
//   clickOnBtn("Pears");
// };

//! yoni's code
// banana.onclick = () => { printFruit("banana") }
// grapes.onclick = () => { printFruit("grapes") }
// peach.onclick = () => { printFruit("peach") }
// apple.onclick = () => { printFruit("apple") }
// orange.onclick = () => { printFruit("orange") }
// orange2.onclick=()=>{printFruit("orange2")}

// function printFruit(fruit) {

//     switch (fruit) {
//         case "banana": console.log(banana.innerText);
//             break
//         case "grapes": console.log(grapes.innerText);
//             break
//         case "peach": console.log(peach.innerText);
//             break
//         case "apple": console.log(apple.innerText);
//             break
//         default: console.log(orange.innerText);
//             break
//     }
// }
// function printFruit(fruit) {
//   switch (fruit) {
//     case "banana":
//       console.log(banana.innerText);
//       break;
//     case "grapes":
//       console.log(grapes.innerText);
//       break;
//     case "peach":
//       console.log(peach.innerText);
//       break;
//     case "apple":
//       console.log(apple.innerText);
//       break;
//     default:
//       console.log(orange.innerText);
//       break;
//   }
// // }
// grapes.onclick = () => {
//   printFruit("grapes");
// };
// peach.onclick = () => {
//   printFruit("peach");
// };
// apple.onclick = () => {
//   printFruit("apple");
// };
// orange.onclick = () => {
//   printFruit("orange");
// };
// orange2.onclick = () => {
//   printFruit("orange2");
// };banana.onclick = () => {printFruit("banana");};

// ! 14.09.2021