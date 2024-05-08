export default class JobModel {
  constructor(id, name, role, location, ctc, skills) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.location = location;
    this.ctc = ctc;
    this.skills = skills;
  }
  static get() {
    return jobs;
  }
}

var jobs = [
  new JobModel(1, "Coding Ninja", "React Developer", "Noida", "4-6Lpa", [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Git",
    "Github",
    "React",
  ]),
  new JobModel(2, "Netflix", "React Developer", "Noida", "4-6Lpa", [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Git",
    "Github",
    "React",
  ]),
  new JobModel(3, "Meta", "React Developer", "Noida", "4-6Lpa", [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Git",
    "Github",
    "React",
  ]),
  new JobModel(4, "Google", "React Developer", "Noida", "4-6Lpa", [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Git",
    "Github",
    "React",
  ]),
];
