let movies = JSON.stringify({
  success: true,
  data: [
    {
      _id: "606d7d2c110a540674caa27a",
      movieName: "The Starling",
      rating: 3,
      date: "2021-04-07T09:36:44.053Z",
      __v: 0,
    },
    {
      _id: "607828bcd9def60015535fcc",
      movieName: "All the Bright Places",
      rating: 3,
      date: "2021-04-15T11:51:24.833Z",
      __v: 0,
    },
    {
      _id: "60815daa6b305d8dcd07c674",
      movieName: "Guilty",
      rating: 3,
      date: "2021-04-22T11:27:38.067Z",
      __v: 0,
    },
    {
      _id: "6122459bdbf6109484b6d2eb",
      movieName: "He's All That",
      rating: 4,
      date: "2021-08-22T12:39:55.115Z",
      __v: 0,
    },
    {
      _id: "612245fcbb593194fcda74d0",
      movieName: "The Forgotten Battle",
      rating: 3,
      date: "2021-08-22T12:41:32.969Z",
      __v: 0,
    },
  ],
});

// ! exeresie 1

function returnJs() {
  return new Promise((resolve, reject) => {
    JSON.parse(movies).success == true
      ? resolve(JSON.parse(movies))
      : reject("error");
  });
}

async function getReturnJs() {
  try {
    return await returnJs();
  } catch (error) {
    return error;
  }
}
getReturnJs()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});
// ! exeresie 2
function lielFUNCTION() {
  return new Promise((resolve, reject) => {
    let temp = JSON.parse(movies).data;
    if (temp.length > 0) {
      resolve(temp);
    } else {
      reject("error");
    }
  });
}
async function gatLielFUNCTION() {
  try {
    return await lielFUNCTION();
  } catch (error) {
    return { massage: error };
  }
}
gatLielFUNCTION()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});
// ! exeresie 3
function searchMovieByName(nameMovie) {
  let arrayMovies = JSON.parse(movies).data;
  return new Promise((resolve, reject) => {
    for (let movie of arrayMovies) {
      if (movie.movieName == nameMovie) {
        resolve(movie);
      }
    }
    reject({ massage: "error" });
  });
}
async function getSearchMovieName(nameFile) {
  try {
    return await searchMovieByName(nameFile);
  } catch (error) {
    return console.log(error);
  }
}
getSearchMovieName("Guilty")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});
// ! exeresie 4

function searchMovieById(idMovie) {
  let moviesData = JSON.parse(movies).data;
  return new Promise((resolve, reject) => {
    for (let item of moviesData) {
      if (item._id === idMovie) {
        resolve("good");
      }
    }
    reject("error");
  });
}
async function getSearchMovieById(file) {
  try {
    return await searchMovieById(file);
  } catch (error) {
    return { massage: error };
  }
}
getSearchMovieById("60815daab305d8dcd07c674")
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});

// ! exeresie 5
function searchMovieByRating(numFromUser) {
  let moviesData = JSON.parse(movies).data;
  let moviesByRating = [];
  console.log(moviesData);
  return new Promise((resolve, reject) => {
    for (let item of moviesData) {
      if (item.rating > numFromUser) {
        moviesByRating.push(item);
        resolve(moviesByRating);
      }
    }
    reject({ massage: "error" });
  });
}
async function getSearchMovieByRating(num) {
  try {
    return await searchMovieByRating(num);
  } catch (error) {
    return error;
  }
}
getSearchMovieByRating(3)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(() => {});
// ! exeresie 6

let myForm = document.getElementById("myForm");
let printMovies = document.getElementById("printMovies");
let allMOvise = JSON.parse(movies).data;
console.log(allMOvise);

for (const move of allMOvise) {
  printMovies.innerHTML += ` 
    <tr>
        <td>${move._id}<td>
        <td>${move.movieName} <td>
        <td>${move.rating} <td>
        <td>${move.date} <td>
        <td>${move.__v} <tr>
    </tr>
`;
}
