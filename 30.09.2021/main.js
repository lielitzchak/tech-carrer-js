const num = document.getElementsByClassName("num");
const cleanAll = document.getElementById("clearAll");
const deleteLastItem = document.getElementById("deleteLastItem");
const operators = document.getElementsByClassName("operators");
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
let nums = [];
function clear_from_section() {
  cleanAll.onclick = () => {
    return (answer.innerHTML = "");
  };
}

function View_in_section() {
  for (let i = 0; i < num.length; i++) {
    num[i].onclick = () => {
      return (answer.innerHTML += `${num[i].value}`);
    };
  }
}

function Using_operators() {
  switch (operators[i]) {
    case "+":
      console.log("its +");
      break;
    case "-":
      console.log("its -");
      break;
    case "/":
      console.log("its *");
      break;
    case "*":
      console.log("its *");
      break;
    case "=":
      console.log("its =");
      break;
  }
}

View_in_section();
clear_from_section();
