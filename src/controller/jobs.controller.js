import JobModel from "../model/jobs.model.js";

export default class JobController {
  getJob(req, res) {
    let jobs = JobModel.get();
    // console.log(jobs)
    res.render("jobs", { jobs: jobs });
  }
  getViewDetail(req, res) {
    const id = req.params.id;
    console.log(id);
    let job = JobModel.getByID(id);
    if (!job) {
      res.send("Not Found");
    } else {
      res.render("view-details", { job: job });
    }
  }
  getAddNewJob(req, res) {
    res.render("add-new-job");
  }
  postAddNewJob(req, res) {
    console.log(req.body);
    const {
      category,
      role,
      name,
      location,
      ctc,
      skills, //Ensure Skills is an array
      numOfOpening,
      applyBy,
    } = req.body;

    // Convert skills to an array if it's not already
    const skillsArray = Array.isArray(skills) ? skills : [skills];

    let add = JobModel.addJob(
      category,
      role,
      location,
      name,
      ctc,
      skillsArray,
      numOfOpening,
      applyBy
    );
    let jobs = JobModel.get();
    res.redirect("/");
  }
  getUpdateJob(req, res) {
    const id = req.params.id;
    const job = JobModel.getByID(id);
    if (!job) {
      // Handle case where job is not found
      return res.status(404).send("Job not found");
    }

    res.render("update-job", { job: job });
  }
  postUpdateJob(req, res) {
    console.log(req.body);
    const {
      id,
      category,
      role,
      name,
      location,
      ctc,
      skills, // Ensure skills is an array
      numOfOpening,
      applyBy,
    } = req.body;
    const update = JobModel.update(
      id,
      category,
      role,
      name,
      location,
      ctc,
      Array.isArray(skills) ? skills : [skills], // Pass the skills array to update
      numOfOpening,
      applyBy
    );
    // console.log(update);

    JobModel.get();
    if (!update) {
      return res.status(404).send("Job not found");
    }
    res.redirect("/view-details/" + id); // Redirect to view details page with updated job ID
  }
  getdeleteJobView(req, res) {
    const id = req.params.id;
    console.log(id);
    JobModel.deleteById(id);
    const jobs = JobModel.get();
    res.redirect("/");
  }
  
}
