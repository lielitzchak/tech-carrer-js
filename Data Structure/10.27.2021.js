// const ARRAY_NUMBER = [];
// function recursionFunction(number) {
//   if (number) {
//     ARRAY_NUMBER.push(number);
//   }
//   if (ARRAY_NUMBER.length < 3) {
//     ARRAY_NUMBER.push(number);
//     let numberFromUser = Number(prompt("one more"));
//     recursionFunction(numberFromUser);
//     console.log(ARRAY_NUMBER);
//   }
// }
// recursionFunction(Number(prompt("number")));

//! ###################################################################################################

// let family = {
//   name: "moshe",
//   child: {
//     name: "omer",
//     child: {
//       name: "liel",
//       child: {
//         name: "shilat",
//         child: { name: "benjamin" },
//       },
//     },
//   },
// };
// function shoeAll(tree) {
//   console.log(tree.name);
//   if (tree.child) {
//     return shoeAll(tree.child);
//   }
// }

// shoeAll(family);

//! ###################################################################################################
// let family = {
//   name: "1",
//   children: [
// { name: "2" },
// {
//   name: "3",
//   children: [
//     { name: "4" },
//     {
//       name: "5",
//       children: [
//         {
//           name: "6",
//           children: [
//             { name: "8" },
//             { name: "9" },
//             { name: "10", children: [{ name: "12" }, { name: "13" }] },
//             {
//               name: "11",
//               children: [
//                 {
//                   name: "14",
//                   children: [
//                     { name: "18" },
//                     {
//                       name: "20",
//                       children: [
//                         { name: "26" },
//                         { name: "28" },
//                         { name: "29" },
//                         { name: "30" },
//                       ],
//     },
//   ],
// },
// { name: "15" },
// {
//   name: "16",
//   children: [
//     { name: "19" },
//     {
//       name: "21",
//       children: [{ name: "32" }, { name: "31" }],
//     },
//   ],
// },
// { name: "17" },
//                   ],
//                 },
//               ],
//             },
//             { name: "7" },
//           ],
//         },
//       ],
//     },
//     {
//       name: "22",
//       children: [
//         { name: "23" },
//         { name: "24" },
//         { name: "25" },
//         { name: "26" },
//       ],
//     },
//   ],
// };
// function showAllFamilyToLog(objFamily) {
//   console.log(objFamily.name);
//   printToWindow(objFamily);
//   if (objFamily.children) {
//     for (let i = 0; i < objFamily.children.length; i++) {
//       showAllFamilyToLog(objFamily.children[i]);
//     }
//   }
// }
// function printToWindow(object) {
//   document.body.innerHTML += `${object.name}<br>`;
// }
// // showAllFamily(family);
// //! ###################################################################################################

// const LINUX = {
//   name: "root",
//   children: [
//     { name: "bin" },
//     { name: "var", children: [{ name: "log" }] },
//     { name: "etc" },
//     {
//       name: "home",
//       children: [
//         {
//           name: "json",
//           children: [
//             { name: "document" },
//             { name: "download" },
//             { name: "music" },
//           ],
//         },
//         { name: "pat" },
//       ],
//     },
//     { name: "user", children: [{ name: "bin" }, { name: "lib" }] },
//     { name: "tmp" },
//     { name: "opt" },
//   ],
// };
// showAllFamilyToLog(LINUX);
//! ###################################################################################################
// let sortArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numbToFind = 8;
// function binaryTree(arr, numberTo) {
//   let right = sortArray.slice(sortArray.length / 2);
//   let left = arr.slice(0, arr.length);
//   console.log(right, "all");
  // console.log(left);
//   if (right[0] == numberTo) {
//     return true;
//   }
//   if (right[0] < numberTo) {
    // binaryTree(right, numberTo);
//     console.log(right);
//   } else {
    // binaryTree(left, numberTo);
//   }
// }
// binaryTree(sortArray, numbToFind);
//! ###################################################################################################
