import { Injectable } from '@angular/core';

import * as data from './data';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  constructor() { }

  getSites() {
    return data.cmsData.sites;
  }

  getSite(siteCode: string) {
    return data.cmsData.sites.find(site => site.siteCode === siteCode);
  }

  getProjectTypes() {
    return data.cmsData.projectTypes;
  }

  getProjects(siteCode: string): Project[] {
    const site = data.cmsData.sites.find(s => s.siteCode === siteCode);
    return site.projects;
  }
}
