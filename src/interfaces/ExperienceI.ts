export interface ExperienceI {
    initDate: string,
    endDate?: string,
    title: string,
    company: string,
    description: string,
    technologies?:string[],
    country: 'spain' | 'argentina' | 'USA' | 'chile'
}