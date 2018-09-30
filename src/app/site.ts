import { Project } from './project';

export interface Site {
    siteCode: string;
    name: string;
    projects?: Project[];
}
