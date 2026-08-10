import cloudinary from "../configs/cloudinaryConfig.js"
import streamifier from "streamifier";

export const uploadImageController = async (req, res) => {
  const file = req.file;
  try {
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image not provided",
      });
    }
    
    const uploadStream = cloudinary.uploader.upload_stream(
    //   {
    //     folder: "profiles",
    //   },
      async (error, result) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
        res.status(200).json({
          success: true,
          message: "Image Uploaded Successfully",
          imageURL: result.secure_url,
        });
      },
    );
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
