import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { Profile, CompleteProfile } from "../models/model.js";

const create_profile = asyncHandler(async (req, res) => {
  const { f_name, l_name, email } = req.body;

  if (!f_name || !l_name || !email) {
    throw new apiError(400, "All fields are required");
  }

  const profile = await Profile().create({
    f_name,
    l_name,
    email,
  });

  res
    .status(200)
    .json(new apiResponse(200, "Profile created successfully", profile));
});

const complete_profile = asyncHandler(async (req, res) => {
  const { email, age, address } = req.body;

  const user = await Profile().findOne({ email });

  if (!user) {
    throw new apiError(
      400,
      "This user is not present in db_1 so first create the profile"
    );
  }

  const profile = await CompleteProfile().create({
    email,
    age,
    address,
  });

  res
    .status(200)
    .json(new apiResponse(200, "Profile completed successfully", profile));
});

const getprofilebyemail = asyncHandler(async (req, res) => {
  const { email } = req.query;

  const profile = await Profile().findOne({ email });

  if (!profile) {
    throw new apiError(400, "User not found in db_1");
  }

  const extra = await CompleteProfile().findOne({ email });

  const result = {
    ...profile.toObject(),
    age: extra?.age,
    address: extra?.address,
  };

  res
    .status(200)
    .json(new apiResponse(200, "Profile fetched successfully", result));
});

export { create_profile, complete_profile, getprofilebyemail };
