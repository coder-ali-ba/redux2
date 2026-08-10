import profileModel from "../models/profileModel.js";

const addProfileController =async (req , res)=>{
    const body = req.body
try {
    const {profileName, profileNo , profileClass, profileImage}=body;

    if(!profileName || !profileNo || !profileClass){
        return res.status(400).json({
            success: false,
            message: "Please Fill All Fields"
        })
    }
    const addProfile = await profileModel.create(body)
    res.status(200).json({
        success: true,
        data: addProfile,
        message: "got the fucking Bastard"
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message: error.message
    })    
}
}

const deleteProfileController = async(req , res)=>{
    const ID = req.params.id
    
    try {
      const matchingID = await profileModel.findById(ID)
      if(!matchingID){
        return res.status(400).json({
            success: false,
            message: 'Cannot Delete Without ID'
        })
      }     
      const delProfile = await profileModel.findByIdAndDelete(ID)   
      res.status(200).json({
        success: true,
        message: "Profile Deleted Successfully"
      })
    } catch (error) {
        console.log(error);
        
      res.status(500).json({
        success: false,
        message: "Internal server error"
      })        
    }
}

const editProfileController = async(req, res)=>{
    const ID = req.params.id;
    const body = req.body;    
    try {
        const matchingID = await profileModel.findById(ID)
        if(!matchingID){
            return res.status(400).json({
                success: false,
                message: "ID provided is Valid"
            })
        }
        const editProfile = await profileModel.findByIdAndUpdate(ID, body, {new: true})
        res.status(200).json({
            success: true,
            message: "Profile edited successfully",
            data: editProfile
        })
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}
export {
    addProfileController,
    deleteProfileController,
    editProfileController
}