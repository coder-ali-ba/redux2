import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import uploadRouter from "./routes/uploadImageRoute.js"
import profileRouter from "./routes/profileRoute.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))

// app.get("/", (req , res)=>{
//     res.send("hello")
// })

app.use("/api/upload" , uploadRouter)
app.use("/api/profile" , profileRouter)

app.listen(5000 , ()=>{
    console.log(`server is running on http://localhost:${5000}`);
    
})