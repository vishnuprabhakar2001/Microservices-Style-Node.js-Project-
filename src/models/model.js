import mongoose from "mongoose";
import { getDB1 } from "../database/db_1.js";
import { getDB2 } from "../database/db_2.js";

const profileSchema = new mongoose.Schema({
  f_name: String,
  l_name: String,
  email: {
    type: String,
    unique: true,
  },
});

const completeProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  address: String,
});

const Profile = () => {
  return getDB1().model("Profile", profileSchema);
};

const CompleteProfile = () => {
  return getDB2().model("CompleteProfile", completeProfileSchema);
};

export { Profile, CompleteProfile };
