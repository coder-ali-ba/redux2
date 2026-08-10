import express from "express";
import { addProfileController } from "../controllers/profileControllers.js";

const profileRouter = express.Router()

profileRouter.post("/addProfile" , addProfileController)

export default profileRouter