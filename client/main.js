const getSubmit = document.getElementById("form")
let responseSection = document.getElementById("responseSection")


document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  console.log('button clicked!')
  axios.get("http://localhost:4000/api/fortune/")
  .then(function (response) {
    const data = response.data;
    alert(data);
  });
};

const itemsCallback = ({data : tasks }) => {
createList(tasks)}

const getAllListItems = () => axios.get("http://localhost:4000/api/toDo").then(itemsCallback).catch(err => console.log(err))
const createTask = (body) => axios.post("http://localhost:4000/api/toDo", body).then(itemsCallback).catch(err => console.log(err))



function submitHandler(e) {
  e.preventDefault()
  let newTask = document.querySelector("#newTask")

  let bodyObj = {
    newTask: newTask.value
  }
  createTask(bodyObj)

  newTask.value = ''
}

function createList() {
  const listItem = document.createElement('div')
  listItem.classList.add('listItem')

  listItem.innerHTML = 
  `
  <section class='listItem'>
      <button id="deleteButton" onclick='deleteListItem(${listItem.id})'>x</button>
      <p class='listItem'>${listItem.task}</p>
  </section>
  `

  responseSection.appendChild(listItem)
}



form.addEventListener('submit', submitHandler)

window.addEventListener('DOMContentLoaded', )

                           