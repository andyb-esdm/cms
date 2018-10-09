import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapService } from '../map.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.subscription = this.mapService.siteCodeChanged$.subscribe(
      siteCode => console.log('map page: ' + siteCode)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
