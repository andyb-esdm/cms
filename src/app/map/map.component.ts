import { Component, OnInit, AfterViewInit } from '@angular/core';

import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON';
import proj from 'ol/proj';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
import Select from 'ol/interaction/select';
import condition from 'ol/events/condition';

import { CmsService } from '../cms.service';
import { MapService } from '../map.service';


const mapExtent = proj.transformExtent([5, 50.9, 6, 53], 'EPSG:4326', 'EPSG:3857');

const marker = new Style({
  image: new Icon({
      anchor: [0.5, 14],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.85,
      src: '/assets/map-marker-red.png'
  })
});

const markerSelected = new Style({
  image: new Icon({
      anchor: [0.5, 14],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.85,
      src: '/assets/map-marker-green.png'
  })
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  map: Map;
  geoJsonObject;
  sitesLayer;
  selectClick;

  constructor(private cmsService: CmsService, private mapService: MapService) { }

  ngOnInit() {

    // this.geoJsonObject = this.cmsService.getSitesGeoJson();
    this.geoJsonObject = this.cmsService.getSitesGeoJson();
  }

  ngAfterViewInit() {
    this.setupMap();
    this.setupVectorLayers();
    this.setupFeatureSelect();
  }

  private setupMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
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
      features: (new GeoJSON()).readFeatures(this.geoJsonObject)
    });

    this.sitesLayer = new VectorLayer({
      source: vectorSource
    });

    this.sitesLayer.setStyle(marker);
    this.map.addLayer(this.sitesLayer);
  }

  private setupFeatureSelect() {
    this.selectClick = new Select({
        condition: condition.click,
        toggleCondition: condition.never,
        layers: [this.sitesLayer],
        multi: false,
        style: markerSelected
    });

    this.map.addInteraction(this.selectClick);
    this.selectClick.on('select', (e) => {
        const features = e.target.getFeatures().getArray();
        if (features.length) {
            const siteCode = features[0].get('siteCode');
            this.mapService.siteSelected(siteCode);
            // this.map.updateSize();
            } else {
              this.mapService.siteUnselected();
            }
        });
    }
}
