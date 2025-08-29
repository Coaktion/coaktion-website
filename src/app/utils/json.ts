import socials from "@/app/config/socials.json";
import projects from "@/app/config/projects.json";
import experience from "@/app/config/experience.json";
import { Project, Socials } from "../../@types";
import { Experience } from "../components/timeline";

export const loadSocialConfigs = (): Socials => {
  return socials as unknown as Socials;
};

export const loadProjects = (): Project[] => {
  return projects.data as unknown as Project[];
};

export const loadExperience = (): Experience[] => {
  return experience as unknown as Experience[];
};
