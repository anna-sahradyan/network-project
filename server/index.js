import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routes/auth-router.js";
import postRouter from "./routes/post-router.js";
dotenv.config();
//?CONSTANTS
const PORT = process.env.PORT || 4000

const app = express();
//?MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(`/auth`, authRouter);
app.use(`/post`, postRouter);


const start = async () => {
    try {
        app.use(express.urlencoded({extended: false}));
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL).then(() => {
            console.log("DB OK")
        })
            .catch((err) => console.log(err))


        app.listen(PORT, (err) => {
            if (err) {
                return console.log(err)
            }
            console.log(`Server is running in http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start();
