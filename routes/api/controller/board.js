const Board = require("../../../models/Board");
const List = require("../../../models/List");
const { confirmMongooseIdValidity } = require("../helpers");
const {addBoardToProfile} = require("./profile")

const createBoard = async (req, res) => {
    const { name, lists } = req.body;
    const boardData = {
        name,
        lists,
        createdBy: req.user.id
    }

    try {
        
        board = new Board(boardData);

        await board.save();
        
        //Add board to the users Profile
        addBoardToProfile(req.user.id, board.createdBy, board.name, board.createdOn, board._id)


        //creating lists with the id. 
        const lists = board.lists;
        lists.map(l => { createListById(l.id, l.name, board._id) })

        res.json(board)
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ errors: [{ msg: 'Invalid Credentials' }] });
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
    } catch (err) {
        console.error(err.message);
        return res.status(500).send({ errors: [{ msg: 'Server Error' }] });
    }
}

const getBoardDetailsById = async (req, res) => {
    const boardId = req.params.boardId;

    //Checking if board id is valid. 
    //Incase of invalid ID. MongoDB Returns and error saying cast to objectID failed. 
    
    if (!confirmMongooseIdValidity(boardId)) return res.status(400).send({ msg: "Board ID is invalid." })

    try {
        const board = await Board.findById(boardId).populate("createdBy", ["name"]);

        if (!board) {
            return res.status(400).send({ msg: "Board does not exist." })
        }
        res.send(board);



    } catch (err) {
        console.error(err.message);
        res.status(500).send({ errors: [{ msg: 'Server Error' }] });
    }


}

module.exports = {
    createBoard,
    getBoardDetailsById
}

