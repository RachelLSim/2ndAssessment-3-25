const getSubmit = document.getElementById("form")
let responseSection = []


document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios.get("http://localhost:4000/api/fortune/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

//document.getElementById("form")

let body = "text"

 getSubmit.addEventListener('click', () => {
  axios.get('http://localhost:4000/api/addToDo')
      .then(res => addToView(res.data))
});

