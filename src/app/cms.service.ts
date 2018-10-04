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

  getFilteredSites(filter: string) {
    filter = filter.toLowerCase();
    return data.cmsData.sites.filter(
      site => site.siteCode.toLowerCase().indexOf(filter) !== -1 || site.name.toLowerCase().indexOf(filter) !== -1
    );
  }

  getProjectTypes() {
    return data.cmsData.projectTypes;
  }

  getProjects(siteCode: string): Project[] {
    const site = data.cmsData.sites.find(s => s.siteCode === siteCode);
    return site.projects;
  }

  getGeoJSON() {
    return data.geojsonObject;
  }

  getHelpItems() {
    return data.helpItems;
  }

  getHelp(id: number) {
    return data.helpItems.find(item => {
      return item.id === id;
    });
  }

  getProjectCodes() {
    return data.projectCodes;
  }
}
