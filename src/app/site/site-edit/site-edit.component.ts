import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Site } from '../../site';
import { CmsService } from '../../cms.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.css']
})
export class SiteEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  siteCode: string;
  site: Site;

  constructor(private route: ActivatedRoute, private cmsService: CmsService) {
    this.subscription = this.route.params.subscribe(params => {
      this.site = this.cmsService.getSite(params['siteCode']);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
