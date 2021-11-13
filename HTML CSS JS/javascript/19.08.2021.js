// Exercise 1
// function Hello() {
//   document.write("hello there");
// }
// Hello()

// Exercise 2

// function helloDavid() {
//   document.write("hello there david");
// }
// helloDavid()

// Exercise 3
// var userName = prompt("ur name")
// function helloInput(inpUser){
//    document.write( `hello there ${inpUser}`)

// }
// helloInput(userName)

// Exercise 4
// var userName = prompt("name"),
// userLname = prompt("last name"),
// UserAge = prompt("age")
// function PrintInWindow(inp1, inp2, inp3) {
//   document.write(`${inp1} , ${inp2} , ${inp3}`);
// }

// PrintInWindow(userName, userLname, UserAge);

// Exercise 5
// var userName = prompt("first name");
// var lName = prompt("last name");
// var userAge = prompt("age");
// function fullName(userInput1, userInput2, userInput3) {
//   document.getElementById(
//     "myDiv"
//   ).innerText = `${userInput1} , ${userInput2} , ${userInput3}`;
// }
// fullName(userName, lName, userAge);

// Exercise 6
// var nameUser = prompt("first name");
// var LNameUser = prompt("last name");
// var AgeUser = prompt("age");
// function divInDiv(userInput1, userInput2, userInput3) {
//   document.getElementById(
//     "exe9"
//   ).innerHTML = `<div>${userInput1}</div> <div>${userInput2}</div>  <div>${userInput3}</div>`;
// }
// divInDiv(nameUser, LNameUser, AgeUser);

// Exercise 7
// let userAge = prompt("age"),
//   userName = prompt("name");
// function toWindow(inp1 , inp2) {
//     document.write(`<div>myName:${inp1}, age:${inp2}</div> `)
// }
// toWindow(userName,userAge  )

// Exercise 8

// var Fname = prompt("first name");
// FLname = prompt("last name");
// age = +prompt("age");
// function writeToWindo(input1, input2, input3) {
//   document.write(
//     `<div><p>first name: ${input1} , last name: ${input2} , age : ${input3}`
//   );
// }

// writeToWindo(Fname, FLname, age);

// Exercise 9
// var fName = prompt("first name")
//   lName = prompt("last name");
//   ageUseR = prompt("age");

// function writeWithId(inp1, inp2, inp3) {
//   document.write(`<P id= "try">name :${inp1} , fName:${inp2} , age:${inp3}`);
// }
// writeWithId(fName, lName, ageUseR);
// Exercise 10
// var userInput1 = prompt("name")
// var userInput2 = prompt("last name")
// var userInput3 = prompt("age")
// function Exercise10(input1 , input2 , Input3){
//     document.write(`<div><p id="exe10"> ${input1} , ${input2} , ${Input3}</p></div>`)

// }
// Exercise10(userInput1 , userInput2 , userInput3)

// Exercise 11.a
// Fname= prompt("name");
// function Exercise11_a(inUSER){
//     document.write(`<p id="Exe11_a_b">${inUSER}`);

// }
// Exercise11_a(Fname);

// Exercise 11.b
// var Lname = prompt("last name")
// function Exercise11_b (inp1) {
//    document.write(` ${inp1} `)+= document.getElementById("Exe11_a_b");
// }
// Exercise11_b(Lname);

// Exercise 12.a
// var userInputName = prompt("what your name ?");
// function Exercise_12_a(input1) {
//   document.write(`<p id = "exe12ab">${input1}</p>`);
// }
// Exercise_12_a(userInputName);
// Exercise 12.b

// var userInputLastName = prompt("what your  last name ?");
// function Exercise12b(userInput1) {
//    document.write(`${userInput1}`)+= document.getElementById("exe12ab");
// }
// Exercise12b(userInputLastName);

//! Exercise 13- not done
// var inputUserColor = prompt("car's color");
// var inputCompany = prompt("camp");
// var inputCamak = prompt("samak");

// function exe13(inpColor1, inp2Company, inp3samak) {
//   car = [
//     {
//       color: inpColor1,
//       company: inp2Company,
//       Camak: inp3samak,
//       broth: new Date(),
//     },
//   ];
// }
// console.log(exe13(inputUserColor, inputCompany, inputCamak));
// document.write(exe13(inputUserColor, inputCompany, inputCamak));

// Exercise 14

// function exe14(colors, campany, cubicMeter) {
//   return (car = {
//     color: colors,
//     campay: campany,
//     Cc: cubicMeter,
//     dateProduction: new Date(),
//   });
// }
// document.write( exe14(inputUserColor, inputCompany, inputCamak))

// Exercise 15
// Exercise 16
// Exercise 17

// what is this?
// Exercise 1














var ageInput = +prompt("age");
var FnameInput = prompt("name");
function pushToObject(theName, TheAge) {
  var person = {};
  person.Fname = theName;
  person.age = TheAge;
  console.log(person);
}
console.log(pushToObject(FnameInput, ageInput));

// Exercise 2 
// var fNameInput = prompt("first name");
// var lNameInput = prompt("last name");
// var ageInput = prompt("age");

// function printToLog(inp1, inp2, inp3) {
//   person = {};
//   person.firstName = inp1;
//   person.lastName = inp2;
//   person.age = inp3;
//   console.log(person);
// }
// console.log(printToLog(fNameInput, lNameInput, ageInput));
// // Exercise 3
// var fName = prompt("first name"),
//   lName = prompt("last name"),
//   age = prompt("age");
// function addNameToEmail(input1, input2, input3) {
//   var person = {};
//   person.fName = input1;
//   person.lastName = input2;
//   person.age = input3;
//   person.email = input1 + "@gmail.com";
//   console.log(person);
// }
// console.log(addNameToEmail(fName, lName, age));

// // Exercise 4

// var firstNameInputUser = prompt("first name"),
//   lastNameInputUser = prompt("last name"),
//   ageInputUser = prompt("age");
// function printToLogWithDate(inputFName, inputLName, inputAge) {
//   person = {};
//   person.firstName = inputFName;
//   person.lastName = inputLName;
//   person.age = inputAge;
//   person.email = inputFName + "@gmail.com";
//   person.listing = new Date();
//   console.log(person);
// }

// console.log(
//   printToLogWithDate(firstNameInputUser, lastNameInputUser, ageInputUser)
// );
// // Exercise 5

// let colorCar = prompt("color car");
// let Company = prompt("comp");
// let smc = +prompt("סמק");

// function pushingToArray(nameCar, comp, Cc) {
//   var cars = {}; 
//   cars.NameCar = nameCar;
//   cars.Company = comp;
//   cars.smc = Cc;
//   cars.date = new Date();
//   console.log(cars);
  
// }
// console.log(pushingToArray(colorCar, CompanyFunction, Cc));


// exercise 1
// function exe1(randomNumber) {
//   return (randomNumber = Math.random() * 100);
// }

// exercise 2
// function exe2(theRandom) {
//   return (theRandom = Math.random() * 10000);
// }

// exercise 3
// function exe3(myRandom) {
// return  myRandom = Math.random() * 55;
// }
// exercise 4
// inputUser = prompt("put a number");
// function exe4(numbersFromUser) {
//   return Math.random() * numbersFromUser;
// }
//! exercise 5 not work
// var userInputNumber = prompt("pick a number 0-9");
// function exe5(inputNumber) {
//   if (inputNumber == Math.floor() * 10) {
//     return document.write(inputNumber);
//   }
// }
// document.write(exe5(userInputNumber));


 //! exercise 6 not work
// var userInputNumber = prompt("pick a number 0-99");
// function exe6 (userNumber){
//     if (userNumber == Math.random()*99) {
        
//    }
// }
//         document.write(exe6(userInputNumber))


 
//! exercise 7 not done
var FullName 
numberUser

function exe7(firstNameInput , numberInput ){

}


// var divs = document.getElementsByTagName("div");
// function changWith() {
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].style = `width: ${Math.floor(
//       Math.random() * 1000
//     )}px; height:${Math.floor(Math.random() * 100)}px;}`;
//   }
// }
// changWith();
