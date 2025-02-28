import data from '../data/projects.json';

export type Project = {
  id: string
  title: string
  date: string
  location: string
  cover_image: string
  description_short: string
  description_full: string
  quotes: Array<{
    name: string
    quote: string
  }>
  external_links: Array<{
    title: string
    url: string
  }>
  media: {
    images: string[]
    videos: string[]
  }
}

export async function getProjects(): Promise<Project[]> {
  return data.projects as Project[];
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = data.projects as Project[];
  return projects.find(project => project.id === id) || null;
}