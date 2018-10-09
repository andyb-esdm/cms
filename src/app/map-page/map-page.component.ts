import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../map.service';
import { Subscription } from 'rxjs';
import { CmsService } from '../cms.service';
import { Site } from '../site';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  showSiteDetails = false;
  site: Site;

  constructor(private mapService: MapService, private cmsService: CmsService) { }

  ngOnInit() {
    this.subscription = this.mapService.siteCodeChanged$.subscribe(
      siteCode => this.showSite(siteCode)
    );
  }

  showSite(siteCode) {
    if (siteCode) {
      this.showSiteDetails = true;
      this.site = this.cmsService.getSite(siteCode);
    } else {
      this.showSiteDetails = false;
      this.site = null;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
