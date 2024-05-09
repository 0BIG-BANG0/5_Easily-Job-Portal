import express from "express";
import JobController from "../controller/jobs.controller.js";

//initialize express Router
const jobRouter = express.Router();

//initialize the job controller
const jobController = new JobController();

jobRouter.get("/", jobController.getJob);
jobRouter.get("/view-details/:id", jobController.getViewDetail);
jobRouter.get("/addNewJob", jobController.getAddNewJob);
jobRouter.post("/postNewJob", jobController.postAddNewJob);
jobRouter.get("/updateJob/:id", jobController.getUpdateJob);
jobRouter.post("/updateJob", jobController.postUpdateJob);

export default jobRouter;
