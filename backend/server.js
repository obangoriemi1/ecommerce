import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/MongoDb.js"
import connectCloudinary from "./config/Cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoutes.js"



//app confiq
const app = express()

const port = process.env.PORT || 4000
connectDb()
connectCloudinary()
//middleware
app.use(express.json())
app.use(cors())

//api end point
app.use("/api/user", userRouter)
app.use("/api/products", productRouter)
app.get("/",(req,res) =>{
    res.send("my api is working")
})

app.listen(port,() =>{
   console.log("server started on " + port);
   
})
