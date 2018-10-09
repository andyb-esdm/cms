import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.siteCodeChanged$.subscribe(
      siteCode => console.log('map page: ' + siteCode)
    );
  }

}
