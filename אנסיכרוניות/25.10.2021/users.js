const USERS = JSON.stringify([
  {
    _id: "605acace4ab389d8ed54c496",
    age: 35,
    name: {
      last: "Hensley",
      first: "Dollie",
    },
    email: "dollie.hensley@undefined.org",
    index: 0,
    phone: "+1 (904) 421-3160",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceed1f0e1cfa1eee67",
    age: 21,
    name: {
      last: "Hunt",
      first: "Dolores",
    },
    email: "dolores.hunt@undefined.com",
    index: 1,
    phone: "+1 (967) 432-2905",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acacefedd0fe77874d78f",
    age: 28,
    name: {
      last: "Pennington",
      first: "Milagros",
    },
    email: "milagros.pennington@undefined.net",
    index: 2,
    phone: "+1 (922) 492-2085",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace6d3f84fc9b40849f",
    age: 32,
    name: {
      last: "Anderson",
      first: "Myrtle",
    },
    email: "myrtle.anderson@undefined.biz",
    index: 3,
    phone: "+1 (858) 404-3273",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace06d24518b6419d23",
    age: 29,
    name: {
      last: "York",
      first: "Terry",
    },
    email: "terry.york@undefined.co.uk",
    index: 4,
    phone: "+1 (816) 492-3475",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace46f0669738455d6b",
    age: 38,
    name: {
      last: "Bridges",
      first: "Effie",
    },
    email: "effie.bridges@undefined.info",
    index: 5,
    phone: "+1 (856) 423-3786",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace5ab5217354268532",
    age: 26,
    name: {
      last: "Walter",
      first: "Krista",
    },
    email: "krista.walter@undefined.me",
    index: 6,
    phone: "+1 (849) 513-2888",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaced68677a5dca08a9b",
    age: 20,
    name: {
      last: "Buchanan",
      first: "Gomez",
    },
    email: "gomez.buchanan@undefined.biz",
    index: 7,
    phone: "+1 (888) 494-2462",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceb7ece55cb38e546a",
    age: 20,
    name: {
      last: "Potter",
      first: "Caitlin",
    },
    email: "caitlin.potter@undefined.io",
    index: 8,
    phone: "+1 (801) 514-3055",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace98de45687c4c6279",
    age: 26,
    name: {
      last: "Dillon",
      first: "Guzman",
    },
    email: "guzman.dillon@undefined.ca",
    index: 9,
    phone: "+1 (857) 407-2403",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "31605c6eb7ebc255946a9197",
    age: 21,
    name: {
      last: "itzchak",
      first: "liel",
    },
    email: "liel.itzchak@undefined.ca",
    index: 10,
    phone: "54080093",
    picture: "http://placehold.it/32x32",
  },
]);
let notJSON = JSON.parse(USERS);

// ! exeresie 1

function checkArrayEmpty() {
  return new Promise((resolve, reject) => {
    notJSON.length > 0 ? resolve(notJSON) : reject({ massage: "error" });
  });
}
async function getCheckArrayEmpty() {
  try {
    return await checkArrayEmpty();
  } catch (error) {
    return error;
  }
}
// getCheckArrayEmpty()
//   .then((res) => {
// console.log(
//     res;
// );
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});

// ! exeresie 2

function checkId(id) {
  return new Promise((resolve, reject) => {
    for (let item of notJSON) {
      if (item._id == id) {
        resolve(item);
      }
    }
    reject({ massage: "the user not found with your id number" });
  });
}
async function getCheckId(id) {
  try {
    return await checkId(id);
  } catch (error) {
    return error;
  }
}
// getCheckId("605acacefedd0fe77874d78f")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});
// ! exeresie 3
function checkEmail(email) {
  return new Promise((resolve, reject) => {
    for (let user of notJSON) {
      if (user.email == email) {
        resolve(user);
      }
    }
    reject({ massage: "the user not found with your email" });
  });
}
async function getCheckEmail(id) {
  try {
    return await checkEmail(id);
  } catch (error) {
    return error;
  }
}
// getCheckEmail("effie.bridges@undefined.info")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});
// ! exeresie 4

function CheckAge(num) {
  let userAge = [];
  return new Promise((resolve, reject) => {
    for (let user of notJSON) {
      if (user.age > num) {
        userAge.push(user);
      }
    }
    if (userAge.length > 0) {
      resolve(userAge);
    } else {
      reject({ massage: "the user not found with your age number" });
    }
  });
}
async function getCheckAge(age) {
  try {
    return await CheckAge(age);
  } catch (error) {
    return error;
  }
}
// getCheckAge(21)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   })
//   .finally(() => {});

// ! exeresie 5
function CheckFirstName(firstName) {
  return new Promise((resolve, reject) => {
    for (let user of notJSON) {
      if (user.name.first == firstName) {
        resolve(user);
      }
    }
    reject({ massage: "the user not found with your first name" });
  });
}
async function getCheckFirstName(name) {
  try {
    return await CheckFirstName(name);
  } catch (error) {
    return error;
  }
}
//! exeresie 5 a
function CheckLastName(lastName) {
  return new Promise((resolve, reject) => {
    for (let user of notJSON) {
      if (user.name.last == lastName) {
        resolve(user);
      }
    }
    reject({ massage: "the user not found with your last name" });
  });
}
async function getCheckLastName(name) {
  try {
    return await CheckLastName(name);
  } catch (error) {
    return error;
  }
}

// getCheckIsUserName()
// .then((res) => {
//   console.log(res);
// })
// .catch((rej) => {
//   console.log(rej);
// })
// .finally(() => {});

// ! exeresie 6
let formFrom = document.getElementById("formFromUser");
let printTble = document.getElementById("printTble");
formFrom.onclick = (ev) => {
  ev.preventDefault();
  // let userName = document.getElementById("firstName").value;
  // let userLName = document.getElementById("userLName").value;
  // let userEmail = document.getElementById("userEmail");
  // let userIndex = document.getElementById("userIndex").value;
  // let userPhone = document.getElementById("userPhone").value;
  // let _id = document.getElementById("_id");
  // let userAge = document.getElementById("userAge").value;
  // let textFromUser = document.getElementById("textFromUser").value;

  let selectOption = document.getElementById("selectOption");
  let printError = document.getElementById("printError");
  switch (selectOption.value) {
    case "_1id":
      return checkId(textFromUser.value)
        .then((res) => {
          printTble.innerHTML += ` 
          <tr>
          <td>${res._id}</td>
          <td>${res.age}</td>
          <td>${res.name.first}</td>
          <td>${res.name.last}</td>
          <td>${res.email}</td>
          <td>${res.index}</td>
          <td>${res.phone}</td>
          <td><img src="${res.picture}" alt=""></td>
          </tr>`;
          console.log(res);
        })
        .catch((rej) => {
          console.log(rej);
          printError.innerHTML = `${rej.massage}`;
        })
        .finally(() => {});
    case "userAge":
      return getCheckAge(textFromUser.value)
        .then((res) => {
          printTble.innerHTML += ` 
          <tr>
          <td>${res._id}</td>
          <td>${res.age}</td>
          <td>${res.name.first}</td>
          <td>${res.name.last}</td>
          <td>${res.email}</td>
          <td>${res.index}</td>
          <td>${res.phone}</td>
          <td><img src="${res.picture}" alt=""></td>
          </tr>`;
          console.log(res);
        })
        .catch((rej) => {
          console.log(rej);
          printError.innerHTML = `${rej.massage}`;
        })
        .finally(() => {});

    // case "firstName":
    //   return getCheckFirstName(textFromUser.value)
    //     .then((res) => {
    //       printTble.innerHTML += `
    //       <tr>
    //       <td>${res._id}</td>
    //       <td>${res.age}</td>
    //       <td>${res.name.first}</td>
    //       <td>${res.name.last}</td>
    //       <td>${res.email}</td>
    //       <td>${res.index}</td>
    //       <td>${res.phone}</td>
    //       <td><img src="${res.picture}" alt=""></td>
    //       </tr>`;
    //     })
    //     .catch((rej) => {
    //       printTble.innerHTML += `this id not found ${rej}`;
    //     })
    //     .finally(() => {});
    // case "LastLName":
    //   return getCheckLastName(textFromUser.value)
    //     .then((res) => {
    //       `
    //     <tr>
    //     <td>${res._id}</td>
    //     <td>${res.age}</td>
    //     <td>${res.name.first}</td>
    //     <td>${res.name.last}</td>
    //     <td>${res.email}</td>
    //     <td>${res.index}</td>
    //     <td>${res.phone}</td>
    //     <td><img src="${res.picture}" alt=""></td>
    //     </tr>`;
    //       console.log(res);
    //     })
    //     .catch((rej) => {
    //       console.log(rej);
    //     })
    //     .finally(() => {});
    // case "email":
    //   return getCheckEmail(textFromUser.value)
    //     .then((res) => {
    //       `
    //     <tr>
    //     <td>${res._id}</td>
    //     <td>${res.age}</td>
    //     <td>${res.name.first}</td>
    //     <td>${res.name.last}</td>
    //     <td>${res.email}</td>
    //     <td>${res.index}</td>
    //     <td>${res.phone}</td>
    //     <td><img src="${res.picture}" alt=""></td>
    //     </tr>`;
    //       console.log(res);
    //     })
    //     .catch((rej) => {
    //       console.log(rej);
    //     })
    //     .finally(() => {});
    default:
      return console.log("the default");
  }
};
