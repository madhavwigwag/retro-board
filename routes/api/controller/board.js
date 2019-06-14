const Board = require("../../../models/Board");
const List = require("../../../models/List");

const createBoard = async (req, res) => {
    const { name, lists } = req.body;
    const boardData = {
        name,
        lists,
        createdBy: req.user.id
    }

    try {
        let board = await Board.findOne({ name });
        if (board) {
            return res.status(400).send({ msg: "Board with the same name already exists. Please Choose another name" })
        }
        board = new Board(boardData);

        await board.save();

        //creating lists with the id. 
        const lists = board.lists;
        lists.map(l => { createListById(l.id, l.name, board._id) })

        res.json(board)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


}

//Helper Functions
const createListById = async (id, name, board) => {
    const listData = {
        _id: id,
        name,
        board
    }
    const list = new List(listData);
    try {
        await list.save();
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = {
    createBoard
}

