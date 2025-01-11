import type { TechnologiesType } from "./ExperienceI";

export interface ProjectI {
    name: string,
    description: string,
    technologies: TechnologiesType[],
    image: string,
    preview: string
}