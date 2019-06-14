const Card = require("../../../models/Card");
const List = require("../../../models/List");

const createCard = async (req, res) => {
    const { board, content, list } = req.body;

    const cardData = {
        list,
        board,
        createdBy: req.user.id,
        content
    }

    const card = new Card(cardData);

    try {
        await card.save();

        //Add Card to List
        addCardToList(card._id, list)

        res.json(card);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


}

const addCardToList = async (cardId, listId) => {

    try {
        let list = await List.findById(listId);
        list.cards.unshift(cardId);
        list.save();
        console.log(list);

    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }


}

module.exports = {
    createCard
}