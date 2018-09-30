import { Component, OnInit } from '@angular/core';
import { CmsService } from '../cms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  siteCode: string;
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmsService: CmsService
  ) { }

  ngOnInit() {
    this.siteCode = this.route.snapshot.params['siteCode'];
    this.projects = this.cmsService.getProjects(this.siteCode);
  }

}
