import express from "express";
import { addProfileController, deleteProfileController, editProfileController } from "../controllers/profileControllers.js";

const profileRouter = express.Router()

profileRouter.post("/addProfile" , addProfileController)
profileRouter.delete("/:id", deleteProfileController)
profileRouter.put("/:id", editProfileController)

export default profileRouter