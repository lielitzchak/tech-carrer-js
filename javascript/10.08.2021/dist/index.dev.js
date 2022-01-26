"use strict";

// function deleteLoop(myArray = []) {
//     for (var i = 0; i < myArray.length; i++) {
//         for (var j = i + 1; j < myArray.length; j++) {
//             if (myArray[i] == myArray[j]) {
//                 myArray.splice(j, 1)
//             }
//         }
//     } return myArray
// }
// console.log(deleteLoop([1,4,1,4,5,2,1,4,4]));
// function nameAndArray(array, theNam) {
//     if (array== theNam) {
//     }
// }
// nameAndArray([12, 23, "kjkn", "kjnhb", 54, "kjnbv", 65]);
// after
// ["liel", "liel", "kjkn", "kjnhb", "liel", "kjnbv", "liel"]
//אלו משתנים שיצרתי איך שבא לי בשביל שנפעיל עליהם את הפונקציה
var array = ['moshe', 'david', '3', 2, 'avi', 23];
var myname = 'liel'; ///הפונקציה שכתבתי

function myfunction(name, arr) {
  arrayLength = arr.length;

  for (var i = 0; i < arrayLength; i++) {
    if (!isNaN(arr[i]) == true) {
      //הפונקציה איז נאן היא פונקציה שבודקת אם אותו משתנה הוא מספר ואז הוספתי על התנאי שלילה
      arr[i] = name; //במידה והתנאי מתקיים נכניס את השם ליאל לתוך המערך במקום האיי כשזיהינו שזה לא מספר
    }
  }

  return arr;
} //כאן אני מפעיל את הפונקציה על המשתנים


var answer = myfunction(myname, array); //כאן הרצתי לולאה שמדפיסה את כל המערך שחזר לנו כתשובה מהפונקציה

for (var i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}