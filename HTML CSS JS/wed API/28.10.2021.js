// ! 1

async function webIPI() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (err) {
    console.log(err);
  }
}
// webIPI();
// ! 2
async function PrintPost() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch(() => {});
  } catch (error) {
    return error;
  }
}
// PrintPost();

// ! 3
async function printComments() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/posts/5")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
// printComments();
// !4

async function PrintIdFive() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/comments/9")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    return error;
  }
}
// PrintIdFive();

// ! 5
async function printAllAlbum() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums").then(
      (response) => {
        return response.json();
      }
    );
  } catch (error) {
    return error;
  }
}

// printAllAlbum()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {});

// ! 6

async function printSecAlbum() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums/2").then(
      (response) => {
        return response.json().then((response) => {
          document.body.innerHTML += `
          userId: ${response.userId}<br>
          id: ${response.id}<br>
          title: ${response.title} <br>`;
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}

// ! 7
async function PrintDomAllUsers() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        for (let user of users) {
          for (let key in user) {
            document.body.innerHTML += `${user[key]}<br></br>`;
          }
        }
      });
  } catch (error) {
    return error;
  }
}
// PrintDomAllUsers();
//  ! 8

function getDataFromApi(api, numId) {
  return new Promise((resolve, reject) => {
    fetch(`${api}/${numId}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        res.id ? resolve(res) : reject({ massage: "no data found" });
      });
  });
}
async function testPromise() {
  try {
    return await getDataFromApi(
      "https://jsonplaceholder.typicode.com/users",
      888
    );
  } catch (error) {
    return error;
  }
}

// ! 10
const options = {
  method: "POST",
};
async function SendToToDo() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/todos", options)
      .then((response) => {
        return response.json();
      })

      .catch(() => {});
  } catch (error) {
    return error;
  }
}

// ! 11

async function SendToPost(api, option) {
  try {
    return await fetch(api, option).then((response) => {
      return response.json();
    });
  } catch (error) {
    return error;
  }
}

//! 12
const option = {
  method: "POST",
};
async function SendToAlbums() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/albums", option)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return console.log(res);
      });
  } catch (error) {
    return error;
  }
}

// !13

async function fg() {
  try {
    return await fetch("https://jsonplaceholder.typicode.com/users", option)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return console.log(res);
      });
  } catch (error) {
    return error;
  }
}
// ! 14
let x = "https://jsonplaceholder.typicode.com/users";

async function gingrichFunction(api, option) {
  try {
    return await fetch(api, option).then((response) => {
      return response.json();
    });
  } catch (error) {
    return error;
  }
}
//  ! 15
let show = document.getElementById("show");
function showImg() {
  show.innerHTML = `<img src="https://monophy.com/media/cnzP4cmBsiOrccg20V/monophy.gif">`;
}
btn.onclick = (e) => {
  e.preventDefault();
  let nameUser = document.getElementById("nameUser").value;
  let lNameUser = document.getElementById("lNameUser").value;
  let emailUser = document.getElementById("emailUser").value;
  let cityUser = document.getElementById("cityUser").value;
  let select = document.getElementById("select");
  let userInputs = {
    name: nameUser,
    lName: lNameUser,
    email: emailUser,
    city: cityUser,
  };
  option.body = userInputs;
  switch (select.value) {
    case "posts":
      gingrichFunction("https://jsonplaceholder.typicode.com/posts", option)
        .then((res) => console.log(res))
        .catch((er) => console.log(er));
      break;
    case "comments":
      gingrichFunction("https://jsonplaceholder.typicode.com/comments", option)
        .then((res) => console.log(res))
        .catch((rej) => console.log(rej));
      break;
    case "albums":
      gingrichFunction("https://jsonplaceholder.typicode.com/albums", option)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      break;
    case "todo":
      gingrichFunction("https://jsonplaceholder.typicode.com/todos", option)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      break;
    case "photos":
      gingrichFunction("https://jsonplaceholder.typicode.com/photos", option)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      break;
    case "users":
      gingrichFunction("https://jsonplaceholder.typicode.com/users", option)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      break;
    default:
      break;
  }
};
