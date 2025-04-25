const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  profilePic: {
    data: Buffer,
    contentType: String,
  },
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;