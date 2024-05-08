import express from "express";
import JobController from "../controller/jobs.controller.js";

//initialize express Router
const jobRouter = express.Router();

//initialize the job controller
const jobController = new JobController();

jobRouter.get('/',jobController.getJob)

export default jobRouter;