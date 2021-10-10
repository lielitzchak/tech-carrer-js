//! exeresie 1
// let theNumbers = [];
// let smallNumber;
// let biggestNumber;
// function getNUmber(number) {
//   if (number != 0) {

//   } else {
//     while (number != 0) { prompt("try again");
//       document.body.innerHTML = `
//     <h1>good for you</h1>
//     <h1>the smaller number is ${smallNumber}, and the biggest number is ${biggestNumber}</h1>
//     `;
//     }
//   }
// }
// getNUmber()
// getNUmber(+prompt("give a number"))
// const END = 0;
// let largeNumberEntered = [9, 5, 0, 1, 7, 322, 8, 2, 4, 6];
// let numbersFromUsers = [845164, 7, 8, 12129, 5];
// let numbersFromUsersIndex0 = numbersFromUsers[0];
// let smallNumber;
// let biggestNumber = largeNumberEntered[0];
// function findTheBiggest(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (numbersFromUsersIndex0 < arr[j]) {
//         numbersFromUsersIndex0 = arr[j];
//        return console.log("big", numbersFromUsersIndex0);
//       }
//     }
//   }
// }
// console.log(findTheBiggest(numbersFromUsers));
// console.log();
// var arr = [3, 6, 2, 56, 852741, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// function getNUmber(num) {
//   if (num == 0) {

//     }
//     document.body.innerHTML = `
//     <h1>good for you</h1>
//     <h1>the smaller number is ${smallNumber}</h1>
//     <h1>the biggest number is ${biggestNumber}</h1>
//     `;
//   } else {
// while (num != 0) {
//   let i = 0;
//   largeNumberEntered.push(num);
//   console.log(largeNumberEntered);
//   i++;
// }
//   }
// }

// getNUmber(Number(prompt("give a number")));

//! exercise 4
// let Fname = document.getElementById("UserName");
// let btn4 = document.getElementById("btn");
// const ABC_Array = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// btn4.onclick = (e) => {
//   e.preventDefault();
//   let FirstChar = Fname.value.charAt(0);
//   checkTheName(FirstChar, ABC_Array);
// };

// function checkTheName(FirstName, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     switch (FirstName.toUpperCase()) {
//       case "A":
//         return console.log("nice");
//       case "Z":
//         return console.log("GOOD");
//       default:
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
