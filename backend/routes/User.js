import express from "express";
import {SendMessage} from '../controllers/Message.js'

export const userRouter=express.Router();


userRouter.route("/message").post(SendMessage);
