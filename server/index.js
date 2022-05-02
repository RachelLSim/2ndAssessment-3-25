const express = require("express");
const cors = require("cors");
const { getTasks  } = require('/controller.js')

const app = express();

app.use(cors());
app.use(express.json());

//get random compliment///////////////
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
});

//get random fortune/////////////
app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "Love truth, but pardon error.",
    "Miles are covered one step at a time.",
    "What’s yours in mine, and what’s mine is mine.",
    "Protective measures will prevent costly disasters.",
    "Help! I’m being held prisoner in a chinese bakery!",
    "Chance favors those in motion."
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
})


//to-do list////////////////////////////////////////////////////
app.get('/api/toDo', getTasks)











// add to to-do list
// app.post("/api/toDo",  => {
  // let newItem = req.body
  //       newItem.push(toDoListDisplay)
  //       res.status(200).send(toDoListDisplay)

  //       //I need to add and increment global id. Do I need a loop here?
// })






app.listen(4000, () => console.log("Server running on 4000"));
