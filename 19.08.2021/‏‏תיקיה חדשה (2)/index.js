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


