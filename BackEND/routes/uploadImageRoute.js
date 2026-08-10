import express from "express";
import upload from "../middlewares/multermiddleware.js";
import { uploadImageController } from "../controllers/imageController.js";

const uploadRouter =express.Router()

uploadRouter.post("/image" , upload.single("image") , uploadImageController)

export default uploadRouter