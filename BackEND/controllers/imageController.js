export const uploadImageController = (req , res)=> {
    try {
        res.status(200).json({
            message: "got this bastard"
        })
    } catch (error) {
        console.log(error);
        
    }
}