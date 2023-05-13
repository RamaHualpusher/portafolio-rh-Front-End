import { Education } from "./Education";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { SkillGroup } from "./SkillGroup";
import { Social } from "./Social";

export class User {
  id: number;
  name: string;
  lastname: string;
  alias: string;
  imgProfile: string;
  email: string;
  phone: string;
  address: string;
  profession: string;
  aboutme: string;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projects: Project[];
  social: Social[];

  constructor(
    id: number,
    name: string,
    lastname: string,
    alias: string,
    imgProfile: string,
    email: string,
    phone: string,
    address: string,
    profession: string,
    aboutme: string,
    experience: Experience[],
    education: Education[],
    skills: SkillGroup[],
    projects: Project[],
    social: Social[]
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.alias = alias;
    this.imgProfile = imgProfile;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.profession = profession;
    this.aboutme = aboutme;
    this.experience = experience;
    this.education = education;
    this.skills = skills;
    this.projects = projects;
    this.social = social;
  }
}
