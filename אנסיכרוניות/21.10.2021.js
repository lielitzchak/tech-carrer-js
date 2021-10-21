let Section = document.getElementById("SEction");
let btnClick = document.getElementById("btnClick");
let numUser = document.getElementById("numUser");
function newPromise(numOut) {
  return new Promise((resolve, reject) => {
    numOut ? resolve("yes") : reject("false");
  });
}
// newPromise(true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });

let randomNumbers = Math.floor(Math.random() * 11);
let random = 0;

function returnPromise(numFromUser) {
  return new Promise((resolve, reject) => {
    numFromUser == randomNumbers
      ? resolve(" nice work, do it again")
      : reject("you lost try again");
  });
}

btnClick.onclick = () => {
  returnPromise(numUser.value)
    .then((res) => {
      Section.innerHTML = res;
    })
    .catch((rej) => {
      Section.innerHTML = rej;
    })
    .finally(console.log(random++));
};
