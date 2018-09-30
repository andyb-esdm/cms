import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {

  site: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cmsService: CmsService
  ) { }

  ngOnInit() {
    const siteCode = this.route.snapshot.params['siteCode'];
    this.site = this.cmsService.getSite(siteCode);
  }

}
