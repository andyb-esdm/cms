import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CmsService } from '../../cms.service';
import { Subscription } from 'rxjs';
import { Site } from '../../site';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit, OnDestroy {

  site: Site;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cmsService: CmsService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.site = this.cmsService.getSite(params['siteCode']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
