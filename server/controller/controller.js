const itemList = require('./db.json')
let globalId = 4

module.exports = {

    getTasks: (req, res) => {
        res.status(200).send(itemList)
    },

    addTask: (req, res) => {
        let { newTask } = req.body
        let newTaskItem = {
            id: globalId,
            newTask
        }
        itemList.push(newTaskItem)
        res.status(200).send(photos)
        globalId++
    },

}




                                                                                   