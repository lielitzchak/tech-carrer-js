//? exercise 1
// var pElement1 = document.getElementById("pElement1"),
//   pElement2 = document.getElementById("pElement2"),
//   pElement3 = document.getElementById("pElement3"),
//   pElement4 = document.getElementById("pElement4"),
//   pElement5 = document.getElementById("pElement5"),
//   pElement6 = document.getElementById("pElement6"),
//   pElement7 = document.getElementById("pElement7"),
//   pElement8 = document.getElementById("pElement8"),
//   pElement9 = document.getElementById("pElement9"),
//   pElement10 = document.getElementById("pElement10"),
//   pElements = document.getElementsByClassName("pElements");
//   exercise 1.a

// window.setTimeout(() => {
//   pElement1.style.backgroundColor = "green";
//   pElement3.style.backgroundColor = "pink";
//   pElement6.style.backgroundColor = "red";
// }, 1000);
//? exercise 1.b
// window.setTimeout(() => {
//   for (let i = 0; i < pElements.length; i++) {
//     pElements[i].style.border = "50px";
//   }
// }, 2000);
//? exercise 1.c
// window.setTimeout(() => {
//   pElement1.style.display = "none";
//   pElement2.style.display = "none";
//   pElement3.style.display = "none";
// }, 3000);
//? exercise 2
// פונקציית JS parseInt משמשת אותנו להמרה של משתנה המכיל מספר השמור כמחרוזת (למשל: "04") למספר שלם
//? exercise 3
// var btnexe3 = document.getElementById("btnexe3"),
//   divExe3 = document.getElementById("divExe3");
// btnexe3.onclick = () => {
//   divExe3.style.width += divExe3.style.width - 10 + "px";
//   divExe3.style.height = divExe3.style.height - 10 + "px";
//   divExe3.style.borderBottom = 50 + "px";
// };
//! exercise 4

// inputWithoutValue = document.getElementById("inputWithoutValue");
// function
// exercise 5

//!                      Form Validation

//? exercise 1.a
// var form = document.getElementById("form");
// form.onsubmit = function (event) {
//   event.preventDefault();
//   var eMail = document.getElementById("eMail").value,
//     passwords = document.getElementById("passwords").value,
//     RepeatPassword = document.getElementById("PasswordAuthentication").value,
//     p = document.getElementById("p");
//   // exercise b
//   PasswordAuthentication(passwords, RepeatPassword);

//   //!   exercise1.c

// var minLength = 3,
//   maxLength = 8;

// if (passwords.length > maxLength && passwords.length > minLength) {
//   passwords.substring(0, maxLength);
// }
//?   exercise.d
//   var clientArray = [];
//   var newObject = {};
//   newObject["01"] = eMail;
//   newObject["02"] = passwords;
//   clientArray.push(newObject);
//   console.log(clientArray);
// };

// function PasswordAuthentication(passwordsInput, Repeat) {
//   if (passwordsInput == Repeat) {
//     p.innerText = "הסיסמה אומתה";
//   } else {
//     p.innerText = "הסיסמאות אינן תואמות";
//   }
// }

// ?exercise 2
// var formExercise2 = document.getElementById("formExercise2");
// formExercise2.onsubmit = function (event) {
//? exercise2.a
//   event.preventDefault();
//?   formExercise2.b
//   var nameInput = document.getElementById("nameInput").value,
//     emailInput = document.getElementById("emailInput").value,
//     p2 = document.getElementById("p2");
//   if (nameInput.length >= 10) {
//     p2.style.backgroundColor = "green";
//     p2.innerText = "10 תווים ומעלה";
//   } else {
//     p2.style.backgroundColor = "red";
//     p2.innerText = "פחות מ10 תווים";
//   }
//!  formExercise2.c
//   for (let i = 0; i < emailInput.length; i++) {
//     if (emailInput) {
//     }
//   }
// !  לא יודעת איך לגשת לזה
// };
