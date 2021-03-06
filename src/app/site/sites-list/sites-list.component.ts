import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../cms.service';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {

  sites = [];
  filter = '';

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    // this.sites = this.cmsService.getSites();
    this.filterSites();
  }

  filterSites() {
    this.sites = this.cmsService.getFilteredSites(this.filter);
  }

}
