const itemList = require('./db.json')
let globalId = 4

module.exports = {

    getTasks: (req, res) => {
        res.status(200).send(itemList)
    }
}




                                                                                   