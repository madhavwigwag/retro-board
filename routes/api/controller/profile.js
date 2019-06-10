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

  const getProfile = async (req, res) => {
    try {
      const profile = await Profile.findOne({ user: req.user.id }).populate(
        'user',
        ['name']
      );
  
      if (!profile) {
        return res.status(400).json({ msg: 'There is no profile for this user' });
      }
  
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  module.exports = {
      createProfile,
      getProfile
  }