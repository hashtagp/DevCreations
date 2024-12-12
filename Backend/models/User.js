import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [{ itemId: String, quantity: Number }],
});

const User = mongoose.model('User', UserSchema);

export default User;