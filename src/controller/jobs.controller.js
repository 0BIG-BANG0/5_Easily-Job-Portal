import JobModel from "../model/jobs.model.js";

export default class JobController {
  getJob(req, res) {
    let jobs = JobModel.get()
    console.log(jobs)
    res.render("jobs",{jobs:jobs});
  }
}
