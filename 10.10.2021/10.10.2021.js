// let numberFromUser = Number(prompt("give a number"));
// console.log(numberFromUser);
const END = 0;
let largeNumberEntered = [];
function getNUmber(num) {
  if (num == 0) {
    alert("end!");
  }
  while (num != END) {
    let i = 0;
    largeNumberEntered.push(num);

    i++;
    console.log(i);
  }
  //   let number = num;
  console.log(num);

  //   return number;
}
let numberFromUser = Number(prompt("give a number"));

getNUmber(numberFromUser);
