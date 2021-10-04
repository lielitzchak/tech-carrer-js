let x= [5,8,7,4,5]
function switchOnArrays(theArray, Sign) {
  switch (theArray) {
    case Sign == "S":
      return theArray.sort();
    case Sign == "R":
      return theArray.revers();
    case Sign == "T":
      return theArray.toString();
    case Sign == "J":
      return theArray.join("&");
    default:
      break;
  }
}
switchOnArrays(x,"J")