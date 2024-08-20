import express from "express";
import ApplicantController from "../controller/applicant.controller.js";
import { uploadFile } from "../middleware/file-upload.middleware.js";

//initialize express Router
const applicantRouter = express.Router();

//initialize the job controller
const applicantController = new ApplicantController();

applicantRouter.get("/apply", applicantController.getApplyJob);
applicantRouter.post("/", uploadFile.single('resume') ,applicantController.postApplyJob);
applicantRouter.get("/getApplicants", applicantController.getApplicants);

export default applicantRouter;
