import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
    profileName: {
        type: String,
        required: true
    },
    profileNo: {
        type: String,
        required: true
    },
    profileClass: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    }
},{timestamps: true})

const profileModel = mongoose.model("profiles" , profileSchema);
export default profileModel