import express from "express";
import cors from "cors";
import userRoute from "./routes/userRoute.js"
import topicRoute from "./routes/topicRoute.js"
import subTopicRoute from "./routes/subTopicRoute.js"
import connDB from "./db/conn.js";
import dotenv from "dotenv";
dotenv.config() 
const app = express()
app.use(express.json())
app.use(cors())
connDB()
// Routes
app.use('/api',userRoute)
app.use('/api',topicRoute)
app.use('/api',subTopicRoute)

app.use('/',(req,res) =>{
    res.send('This is Home Page')
}) 
const PORT = 8080
app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`)
})