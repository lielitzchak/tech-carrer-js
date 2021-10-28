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
function showAllFamilyToLog(objFamily) {
  //! the family is the arguments now
  console.log(objFamily.name); //!print to log name in this iteration
  printToWindow(objFamily); //! call to function again
  if (objFamily.children) {
    //! if to every child have a children (so its true) , you can get it
    for (let i = 0; i < objFamily.children.length; i++) {
      // ! loop on object's children's.
      showAllFamilyToLog(objFamily.children[i]);
    }
  }
}
function printToWindow(object) {
  document.body.innerHTML += `${object.name}<br>`;
}
// showAllFamily(family); //! call function  with arguments
//! ###################################################################################################

const LINUX = {
  name: "root",
  children: [
    { name: "bin" },
    { name: "var", children: [{ name: "log" }] },
    { name: "etc" },
    {
      name: "home",
      children: [
        {
          name: "json",
          children: [
            { name: "document" },
            { name: "download" },
            { name: "music" },
          ],
        },
        { name: "pat" },
      ],
    },
    { name: "user", children: [{ name: "bin" }, { name: "lib" }] },
    { name: "tmp" },
    { name: "opt" },
  ],
};
showAllFamilyToLog(LINUX);
//! ###################################################################################################
