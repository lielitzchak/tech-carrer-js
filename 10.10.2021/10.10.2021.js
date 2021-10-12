//! exeresie 1
// let numberFromUser =+prompt("giva a number");
// let smallerNumber;
// let biggestNumber;
// let arrWrongNumber = [];
// let counter = 0;
// function j(numberUser) {
//   if (numberUser == 0) {
//     console.log("wohoo");
//   }
//   while (numberUser == 0) {
//     arrWrongNumber.push(numberUser);
//     console.log("not wohoo");
//     counter++;
//   }
// }
// j(numberFromUser);
// console.log("מגיב");

// let numberFromUser = +prompt("giva a number");
// let theNumbersFromUser = [];
// let smallNumber;
// let biggestNumber;

// function getNUmber(numberUser) {
//   let tem;
//   while (numberUser != 0) {
//     theNumbersFromUser.push(numberUser);
//     numberUser = +prompt("give another number");
//     console.log(theNumbersFromUser);
//     tem = theNumbersFromUser.sort((a, b) => {
//       return a - b;
//     });
//     biggestNumber = tem.length[-1];
//     console.log(biggestNumber);
//   }
// document.body.innerHTML = `
//       <h1>good for you</h1>
//       <h1>the smaller number is ${b}, and the biggest number is ${a}</h1>
//       `
// else {
//    (number != 0)
//     prompt("try again");
// }
// getNUmber(numberFromUser);
// getNUmber(numberFromUser)
// }
// document.body.innerHTML = `
//   <h1>good for you</h1>
//   <h1>the smaller number is ${smallNumber}</h1>
//   <h1>the biggest number is ${biggestNumber}</h1>
//   `;

//! exercise 4
// let Fname = document.getElementById("UserName");
// let btn4 = document.getElementById("btn");
// const ABC_Array = ["A", "Z"];
// btn4.onclick = (e) => {
//   e.preventDefault();
//   let FirstChar = Fname.value.charAt(0);
//   checkTheName(FirstChar.toUpperCase(), ABC_Array);
// };
// function checkTheName(FirstName, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     switch (FirstName) {
//       case "A":
//         return console.log("nice");
//       case "Z":
//         return console.log("GOOD");
//       default:
//         console.log("nada");
//         break;
//     }
//   }
// }
//! exercise 5- שאלת ריאיון
// function repeatOnString() {
//   for (let i = 1; i < 101; i++) {
//     console.log("fizz".repeat(3));
//     console.log("buzz".repeat(5));
//     console.log("fizzbuzz".repeat(3, 5));
//   }
// }
// repeatOnString();
//! exercise 5- לוטו
// const USER_NUMBERS = [];
// USER_NAME = prompt("that is your name?");
// let theRandom = [];
// Math.floor(Math.random() * 50);

// for (let i = 0; i < 10; i++) {
//   if (condition) {
//   }
//   USER_NUMBERS.push(Number(prompt(`choose a number חלק ${i}`)));
// }
// for (let j = 0; j < 10; j++) {
//   theRandom.push(Math.floor(Math.random() * 10));
//   console.log("the random", theRandom);
// }

// USER_NUMBERS.forEach((k) => {
//   theRandom.forEach((i) => {
//     if (k === i) {
//       let numb = 0;
//       console.log("the same");
//     }
//   });
// });
// console.log("the numbers", USER_NUMBERS);
// console.log("the random", theRandom);
// TODO  משימות לולאה- לא סיימתי

//! exeresie 6   משימת לוטו

const inputNumbers = document.getElementsByClassName("numbers");
const btn = document.getElementById("btn");

btn.onclick = () => {
  let inputNumbers = [];
  let randomNumbers = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    let currentNumber = Number(inputNumbers[i].value);
    let chack = (numbers =
      currentNumber < 1 ||
      currentNumber > 100 ||
      inputNumbers.indexOf(currentNumber) != -1);
    if (chack) {
      alert(`${currentNumber} is not a good number' try again`);
      return;
    } else {
      inputNumbers.push(currentNumber);
    }
  }
  alert("all good");
  for (let i = 0; i < 50; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumbers.indexOf(randomNumber) == -1) {
      randomNumbers.push(randomNumber);
    }
  }
  let counter = 0;
  for (let i = 0; i < inputNumbers.length; i++) {
    if (randomNumbers.indexOf(inputNumbers[i] != -1)) {
      counter++;
    }
  }
  alert(`you wan ${counter} point`);
};
//! משימות לולאה- לא סיימתי
// let BUILDING = { height: 450, width: 852, Floors: 95, Apartments: 4123 };

// function obj_to_Run(objToRun) {
//   for (const iterator of objToRun) {
//     console.log(`${iterator.height}`);
//   }
// }

// obj_to_Run(BUILDING);

//! תרגילי מחלקה
// !exercise 1
// class Teacher {
//   firstName;
//   LastName;
//   HourlyWage;
//   WorkingHoursPerWeek;
//   phone;
//   backHourlyWage = function () {
//     return console.log(this.HourlyWage);
//   };
//!exercise 2
//   constructor(firstName, LastName, HourlyWage, WorkingHoursPerWeek, phone) {
//     this.firstName = firstName;
//     this.LastName = LastName;
//     this.HourlyWage = HourlyWage;
//     this.WorkingHoursPerWeek = WorkingHoursPerWeek;
//     this.phone = phone;
//   }
// }
//! exercise 3
// let obj1 = new Teacher("liel", "itzchak", 250, 87, 547080093);
// let obj2 = new Teacher("omer", "itzchak", 985, 897, 547080093);
// let obj3 = new Teacher("shilat", "itzchak", 5898, 9656, 547080093);
// const NEW_TEACHER = [];
// NEW_TEACHER.push(obj1, obj2, obj3);
//! exercise4
// console.table(NEW_TEACHER);

//! exercise 5- אתגר
// obj1.backHourlyWage();
//! exercise 6
//! exercise 7
// let firstName = document.getElementById("firstName");
// let lastName = document.getElementById("lastName");
// let HourlyWage = document.getElementById("HourlyWage");
// let HoursPerWeek = document.getElementById("WorkingHoursPerWeek");
// let phone = document.getElementById("phone");
// let btn = document.getElementById("btn");
// let tbaleForExercise7 = document.getElementById("tbaleForExercise7");
// btn.onclick = (e) => {
//   e.preventDefault();
//   let NewTeacher = new Teacher(
//     firstName.value,
//     lastName.value,
//     HourlyWage.value,
//     HoursPerWeek.value,
//     phone.value
//   );
//   console.table(NEW_TEACHER);

//   NEW_TEACHER.push(NewTeacher);
//   for (const iterator of NEW_TEACHER) {
//     tbaleForExercise7.innerHTML += `
//     <tr>${iterator.firstName}</tr>
//     <tr>${iterator.LastName}</tr>
//     <tr>${iterator.HourlyWage}</tr>
//     <tr>${iterator.WorkingHoursPerWeek}</tr>
//     <tr>${iterator.phone}</tr>
//     `;
//   }
// };
