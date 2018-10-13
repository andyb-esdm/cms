import { Component, OnInit, Input } from '@angular/core';
import { CmsService } from '../cms.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() siteCode: string;
  projects: Project[] = [];

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    this.projects = this.cmsService.getProjects(this.siteCode);
  }

}
