//! exeresie 1 a

// function returnStringAndHi(str) {
//   str = prompt("write something");
//   return console.log(`${str} hi`);
// }
// returnStringAndHi()
//! exeresie 1 b
//  o(1)

//! exeresie 2 a
// let array = [1, 2, 3, 4];

// function returnTheResult(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
//   return sum;
// }
// returnTheResult(array);
//! exeresie 3
// o(n)
// let arr = [4, 5, 2, 9, 7, 1, 12, 0, 5, 7, 5];
// function returnSmallNumber(theArray) {
//   let smallNumber = theArray[0];
//   for (let i = 0; i < theArray.length; i++) {
//     if (smallNumber > theArray[i]) {
//       smallNumber = theArray[i];
//     }
//   }
//   return smallNumber;
// }
// console.log(returnSmallNumber(arr));
//! exeresie 4
// let ar = [5, 7, 4, 8, 2, 54];
// function returnIndex(array, number) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === number) {
//       return i;
//     }
//   }
//   return false;
// }
// console.log(returnIndex(ar, 5));
//! exeresie 4 a
// o(1)
//! exeresie 4 b
//  o(n)
// let arrayNotSort = [5, 4, 7, 2, 1];
// function sortArray(arr) {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     let isSorted = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         isSorted = true;
//       }
//     }
//     if (isSorted == false) break;
//   }
//   return arr;
// }
// console.log(sortArray(arrayNotSort));
