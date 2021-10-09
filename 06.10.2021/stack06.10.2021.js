// סטק זה מבנה נתנוים שעובד בצורה שבה מה שנכנס ראשון יוצא אחרון,
// lifo
function Stack_Push() {
  let array = [];
  this.to_push = function (num) {
    return array.push(num);
  };

  this.Stack_Pop = function (to_pop) {
    return array.pop(to_pop);
  };
}
const array_stack = new Stack_Push();
array_stack.to_push(8)
// console.log(array_stack);
//!\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function Stack_30() {
//   this.data = [];
//   this.add = function (num) {
//     if (this.data.length != 3) {
//       return this.data.push(num);
//     } else {
//       console.error(num);
//     }
//   };
//   this.remove = function () {
//     return this.data.pop();
//   };
// }

// const theArray = new Stack_30();
// theArray.add(1);
// theArray.add(2);
// theArray.add(3);
// theArray.add(4);
// theArray.add(5);
// console.log(theArray);
// theArray.remove();
// console.log(theArray);
