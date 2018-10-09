import { Component, OnInit } from '@angular/core';

import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import VectorLayer from 'ol/layer/vector';
import XYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/vector';
import GeoJSON from 'ol/format/GeoJSON.js';
import proj from 'ol/proj';

import { CmsService } from '../cms.service';

const mapExtent = proj.transformExtent([5, 50, 6, 53], 'EPSG:4326', 'EPSG:3857');

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: Map;
  geoJsonObject;

  constructor(private cmsService: CmsService) { }

  ngOnInit() {
    // this.geoJsonObject = this.cmsService.getSitesGeoJson();
    this.geoJsonObject = this.cmsService.getSitesGeoJson();
    this.setupMap();
    this.setupVectorLayers();
  }

  private setupMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
    this.map.getView().fit(mapExtent);
  }

  private setupVectorLayers() {
    const vectorSource = new VectorSource({
      features: (new GeoJSON()).readFeatures(this.geoJsonObject, {
        featureProjection: 'EPSG:3857',
        dataProjection: 'EPSG: 4326'
       })
    });

    const sitesLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(sitesLayer);

    console.log(vectorSource.getFeatures());
  }
}
