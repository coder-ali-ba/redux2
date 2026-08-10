const addProfileController = (req , res)=>{
try {
    res.status(200).json({
        message: "got the fucking Bastard"
    })
} catch (error) {
    console.log(error);
    
}
}

export {
    addProfileController
}