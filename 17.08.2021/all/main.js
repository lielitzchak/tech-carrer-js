let myString = "liela itzrchak";

// function takingStringLanth(theString) {
//   for (let i = 0; i < theString.length; i++) {
//     if (theString.length > 5) {
//       return "to long";
//     }
//     return "to short";
//   }
// }
// // console.log(takingStringLanth(myString));

// function backStrinnga(theString) {
//   if (theString.indexOf("a") == -1) {
//     return theString;
//   } else {
//     return "not found";
//   }
// }

// // console.log(backStrinnga(myString));

// function RbackStrinng(string) {
//   if (string.indexOf("r") > -1) {
//     return string.indexOf("r");
//   } else {
//     return "not found";
//   }
// }

// // console.log(RbackStrinng(myString));

// function findStringAndTav(myString, tav) {
//     if (myString.lastIndexOf(tav) != -1) {
//       return `this ${myString} in the string`;
//     } else {
//     //   return `this ${myString[i]} not found`;
//     }

// }
// let newNameFunction = findStringAndTav(myString , "f")

// // console.log(newNameFunction);

let TheName = "sayonara";
function exe6(theSrting) {
  return theSrting.substr(0, 3);
}
// console.log(exe6(TheName));

function exe6A1(theSrting) {
  return theSrting.substr(2, 4);
}
// console.log(exe6A1(TheName));

function exe6A12(theSrting) {
  return theSrting.substr(3);
}
//   console.log(exe6A1(TheName));

function getStringAndIndex(allString, myIndex) {
  if (allString < myIndex) {
    return "the index to big";
  } else {
    return allString.substr(myIndex);
  }
}

// console.log(getStringAndIndex(myString, 94));

function theStringAndMyIndex(theString, theIndex) {
  if (theString < theIndex) {
    return "to long";
  } else {
    return theString.substr(theIndex);
  }
}
// console.log(theStringAndMyIndex(myString , 4.1));

function returnName(NaMe) {
  return NaMe.substring(0, 4);
}
// console.log(returnName(TheName));

function returnLass(theName) {
  return;
}

// let userInput = prompt("enter tyour full name");

function UserInputFunction(fullName) {
  if (fullName.length) {
    return fullName.length;
  }
}
let some = "jhgfdxcvbnm";
// console.log(UserInputFunction(userInput));
// ...............................................................................
function thelLowerCase(theSrting, theSecundString) {
  if (theSrting.toLowerCase() == theSecundString.toLowerCase()) {
    return true;
  }
  return false;
}

function thelupperCase(theString, theSecundString) {
  if (theString.toUpperCase() == theSecundString.toUpperCase()) {
    return true;
  }

  return false;
}

// console.log(thelupperCase(myString , myString));

// .................................................................................

let myName = "liel",
  secundName = "lkjhgfdscdvfghjkl";

// 18.	צרו פונקציה שמקבלת שם פרטי ושם משפחה מהמשתמש.
// הפונקציה מדפיסה את השם הארוך יותר.
function longerName(theName, lastName) {
  if (theName.length < lastName.length) {
    // console.log(lastName);
  }

  //   console.log(theName);
}

// console.log(longerName(myName, secundName));
// ................................................................................
// 19.	צרו פונקציה שמקבלת שם פרטי ושם משפחה מהמשתמש.
// הפונקציה מדפיסה האם השם הפרטי מכיל את התו 'a' .
// .........................................................................................
// 1.	צרו פונקציה שמחזירה מספר רנדומלי בין 0 ל 99.

function randomNumberOF100(theRendom) {
  theRendom = Math.random() * 100;
  return theRendom;
}
console.log(randomNumberOF100());

// 2.	צרו פונקציה שמחזירה מספר רנדומלי בין 0 ל 9999.

function randomNumberOF1000(theRendom) {
  theRendom = Math.random() * 10000;
  return theRendom;
}
console.log(randomNumberOF1000());

// 3.	צרו פונקציה שמחזירה מספר רנדומלי בין 0 ל 54.

function randomNumberOF55(theRandom) {
  theRandom = Math.random() * 55;
  return theRandom;
}
console.log(randomNumberOF55());

// 4.	צרו פונקציה שמקבלת מספר מהמשתמש ומחזירה מספר רנדומלי מ0 ועד המספר.

function randomNumberFromUser(userInput , rendomNumber) {
    
}

// 5.	צרו פונקציה שמקבלת מהמשתמש מספר בין 0 ל9 ובודקת האם המספר זהה למספר רנדומלי.
// 6.	צרו פונקציה שמקבלת מהמשתמש מספר בין 0 ל99 ובודקת האם המספר זהה למספר רנדומלי.
// 7.	צרו פונקציה שמקבלת מהמשתמש שם פרטי ומספר בין 0 ל9, הפונקציה מדפיסה למשתמש עם השם, הודעה האם הוא זכה ואת המספר שיצא בהגרלה .
