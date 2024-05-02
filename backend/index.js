import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import foodRoute from "./routes/foodRoute.js"

config()

const app = express();


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server running on port no ${process.env.PORT} port `)

});

mongoose.connect(process.env.mongodbURL).then(() => console.log("Database is connected")).catch((erro) => console.log(erro))

app.use(express.json());
app.use('/food', foodRoute);