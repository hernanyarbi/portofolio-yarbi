export interface ExperienceI {
  initDate: string;
  endDate?: string;
  title: string;
  company: string;
  description: string;
  technologies?: TechnologiesType[];
  country: "spain" | "argentina" | "USA" | "chile" | "remote";
  link?: string;
}

export type TechnologiesType =
  | "NEXT"
  | "TAILWIND"
  | "REACT"
  | "NODE"
  | "EXPRESS"
  | "POSTGRESQL"
  | "STYLED COMPONENTS"
  | "ANGULAR"
  | "MONGO"
  | "TS"
  | "VUE"
  | "VUEX"
  | "PYTHON"
  | "AWS"
  | "MYSQL"
  | "JAVA"
  | "TERRAFORM"
  | "SQLITE"
  | "NEST"
