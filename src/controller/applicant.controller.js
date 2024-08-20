import ApplicantModel from "../model/applicant.model.js";

export default class ApplicantController {
  getApplyJob(req, res) {
    res.render("apply-job");
  }
  postApplyJob(req, res) {
    console.log(req.body);
    const { name, email, contact } = req.body;
    console.log(req.file)
    if (req.file) {
      const resume = "resume/" + req.file.filename;
      let newApplicant = ApplicantModel.add(name, email, contact, resume);
      let applicants = ApplicantModel.get();
      return res.redirect('/getApplicants')
    //   return res.render("applicant", { applicants });
    } else {
      return res.status(400).send("File Upload Failed");
    }
  }
  getApplicants(req, res) {
    let applicants = ApplicantModel.get();
    res.render("applicant", {
      applicants: applicants,
    });
  }
  viewPdf(req, res) {}
}
