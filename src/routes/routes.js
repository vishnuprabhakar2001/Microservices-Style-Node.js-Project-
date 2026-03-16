import express from "express";

import {
  create_profile,
  complete_profile,
  getprofilebyemail,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create_profile", create_profile);

router.post("/complete_profile", complete_profile);

router.get("/getprofilebyemail", getprofilebyemail);

export default router;
