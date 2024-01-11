import express from "express";
import { appRouter } from "./app.js";
import { connectDb } from "./src/db/formDB.js";
import cors from "cors";
import "dotenv/config";

const app=express();

app.use(express.json());
app.use(cors());

app.use(appRouter);

const PORT=process.env.PORT || 400;

app.listen(PORT,()=>{
    console.log("Server Started on",PORT);
    connectDb();
});