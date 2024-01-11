import express from "express";
import { formModel } from "./src/models/formModel.js";

export const appRouter = express.Router();

appRouter.post("/", async (req, res) => {
    const { name, message } = req.body;
    try {
        await formModel.create(
            {
                name, message
            }
        );
        res.status(200).send(
            {
                message: "added"
            }
        );
    } catch (error) {
        console.log(error);
        res.status(501).send(
            {
                message: "not added"
            }
        );
    }
});

