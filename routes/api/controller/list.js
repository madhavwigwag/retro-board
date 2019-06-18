const List = require("../../../models/List");

const getList = async (req, res) => {
    listId = req.params.listid;

    const list = await List.findById(listId).populate("cards")
    res.send(list)
}

module.exports = {
    getList
}