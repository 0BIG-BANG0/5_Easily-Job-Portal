export default class JobModel {
  constructor(
    id,
    category,
    role,
    name,
    location,
    ctc,
    skills,
    numOfOpening,
    applyBy
  ) {
    this.id = id;
    this.category = category;
    this.role = role;
    this.name = name;
    this.location = location;
    this.ctc = ctc;
    this.skills = skills;
    this.numOfOpening = numOfOpening;
    this.applyBy = applyBy;
  }
  static get() {
    return jobs;
  }
  static getByID(id) {
    const index = jobs.find((j) => j.id == id);
    return index;
  }
  static addJob(
    category,
    role,
    location,
    name,
    ctc,
    skills,
    numOfOpening,
    applyBy
  ) {
    let newJob = new JobModel(
      jobs.length + 1,
      category,
      role,
      name,
      location,
      ctc,
      skills,
      numOfOpening,
      applyBy
    );
    jobs.push(newJob);
  }
  static update(
    id,
    category,
    role,
    name,
    location,
    ctc,
    skills,
    numOfOpening,
    applyBy
  ) {
    console.log(id, category, role, name);
    const index = jobs.findIndex((j) => j.id == id);
    if (index !== -1) {
      jobs[index].category = category;
      jobs[index].role = role;
      jobs[index].name = name;
      jobs[index].location = location;
      jobs[index].ctc = ctc;
      jobs[index].skills = skills;
      jobs[index].numOfOpening = numOfOpening;
      jobs[index].applyBy = applyBy;
      return true; // Return true upon successful update
    } else {
      return false; // Return false if job is not found
    }
  }
  static deleteById(id) {
    const index = jobs.findIndex((j) => j.id == id);
    return jobs.splice(index, 1);
  }
}

var jobs = [
  new JobModel(
    1,
    "Tech",
    "React Developer",
    "Coding Ninja",
    "Noida",
    "4-6Lpa",
    ["HTML", "CSS", "Bootstrap", "Tailwind", "Git", "Github", "React"],
    5,
    "date"
  ),
  new JobModel(
    2,
    "Tech",
    "React Developer",
    "Service Now",
    "Noida",
    "4-6Lpa",
    ["HTML", "CSS", "Bootstrap", "Tailwind", "Git", "Github", "React"],
    5,
    "date"
  ),
  new JobModel(
    3,
    "Tech",
    "React Developer",
    "Netflix",
    "Noida",
    "4-6Lpa",
    ["HTML", "CSS", "Bootstrap", "Tailwind", "Git", "Github", "React"],
    5,
    "date"
  ),
  new JobModel(
    4,
    "Tech",
    "React Developer",
    "Google",
    "Noida",
    "4-6Lpa",
    ["HTML", "CSS", "Bootstrap", "Tailwind", "Git", "Github", "React"],
    5,
    "date"
  ),
];
