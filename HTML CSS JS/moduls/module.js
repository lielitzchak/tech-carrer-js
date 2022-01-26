const NUMBER = 5;
const OBJECT = {
  name: "liel",
  age: 21,
};
const bool = true;
const MY_NAME = "liel";
function printName(name) {
  console.log(name);
}
function returnSom(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// export default NUMBER;
// export default MY_NAME;
// export default OBJECT;
// export {MY_NAME , printName} ;
export { NUMBER, OBJECT, bool, MY_NAME };
export default returnSom;