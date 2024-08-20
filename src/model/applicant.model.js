export default class ApplicantModel {
  constructor(id, name, email, contact, resume) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.resume = resume;
  }
  static get() {
    return applicants;
  }
  static add(name, email, contact, resume) {
    let newApplicant = new ApplicantModel(
      applicants.length + 1,
      name,
      email,
      contact,
      resume
    );
    applicants.push(newApplicant)
  }
}
var applicants = [
  new ApplicantModel(
    1,
    "Abdus Samad",
    "samadabdus550@gmail.com",
    "8887622884",
    "resume.pdf"
  ),
];
