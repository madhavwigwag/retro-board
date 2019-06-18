const Profile = require('../../../models/Profile');

const createProfile = async (req, res) => {

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}


//TODO:
// CreatedBy Currently returns a userID. It should be Username. 
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id })
      .populate('user', ['name']);

    if (!profile) {
      //If profile does not exist. Create one.
      createProfile(req, res);
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

//Whenever ueser creates a board or visits one, the board should be added to his profile. 
const addBoardToProfile = async (userid, createdBy, boardName, createdOn, boardId) => {
  const boardData = {
    boardName,
    createdBy,
    createdOn,
    boardId
  }
  
  try {
    const profile = await Profile.findOne({ user: userid });
    
    //Check if board exists
    let boardExists = true;
    const boards = profile.boards;
    boards.forEach(b => {if(b.boardId == boardId) boardExists=false;})

    if (boardExists) {
      profile.boards.unshift(boardData);
      profile.save();
    }
    
  } catch (err) {
    console.error(err)
  }

}

const vistedBoard = (req, res) => {
  const {createdBy, boardName, createdOn, boardId} = req.body;
  addBoardToProfile(req.user.id, createdBy, boardName, createdOn, boardId);
  res.status(200)
}


module.exports = {
  createProfile,
  getProfile,
  addBoardToProfile,
  vistedBoard
}