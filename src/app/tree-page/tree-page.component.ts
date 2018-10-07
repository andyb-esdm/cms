import { Component, OnInit, TemplateRef } from '@angular/core';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css']
})
export class TreePageComponent implements OnInit {

  projectCodes = [];
  collapseAll: boolean;
  selectAll: boolean;

  name: string;
  projectTypeCode: number | string;

  constructor(private cmsService: CmsService) {
  }

  ngOnInit() {
    this.projectCodes = this.cmsService.getProjectCodes();
    this.projectTypeCode = 'MI40';
  }

}

