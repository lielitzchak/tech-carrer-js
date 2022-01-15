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
