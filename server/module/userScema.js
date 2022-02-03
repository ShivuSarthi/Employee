import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  DOB: { type: String, required: true },
  jobtype: { type: String, required: true, trim: true },
  image: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
