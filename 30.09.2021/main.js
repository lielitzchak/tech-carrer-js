const num = document.getElementsByClassName("num");
const cleanAll = document.getElementById("clearAll");
const deleteLastItem = document.getElementById("deleteLastItem");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let answer = document.getElementById("answer");
function plus_number_to_number(num, num2) {
  let sum = 0;
  return (sum += num + num2);
}
function removal_number_from_number(num, num2) {
  let sum = 0;
  return (sum += num - num2);
}
function multiplication_number_from_number(num, num2) {
  let sum = 0;
  return (sum += num * num2);
}
function Division_number_from_number(num, num2) {
  let sum = 0;
  return (sum += num / num2);
}

cleanAll.onclick = () => {
  return (answer.innerHTML = "");
};

// for (let i = 0; i < num.length; i++) {
//   num[i].onclick = () => {
//     return (answer.innerHTML += `${num[i].value}`);
//   };
// }
deleteLastItem.onclick = (srt) => {
    
};
