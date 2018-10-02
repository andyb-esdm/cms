import { Site } from './site';
import { CmsData } from './cms-data';

export const cmsData: CmsData = {
  sites: [
    {
      siteCode: 'NNR001', name: 'Gwernvale Farm', projects: [
        { id: 1, name: 'monitor small mammals with traps', projectTypeCode: 1, percentageCompleted: 50 },
        { id: 2, name: 'monitor basking lizards by survey', projectTypeCode: 1 },
        { id: 3, name: 'clear litter', projectTypeCode: 8 }
      ]
    },
    {
      siteCode: 'NNR002', name: 'Bluebell Wood', projects: [
        { id: 4, name: 'andyb mammal survey', projectTypeCode: 1, percentageCompleted: 20 }
      ]
    },
    {
      siteCode: 'NNR003', name: 'Beech Wood', projects: [
        { id: 5, name: 'andyb other', projectTypeCode: 5 }
      ]
    },
    { siteCode: 'NNR004', name: 'Table Mountain' },
    { siteCode: 'NNR005', name: 'Llangattock Escarpment' }
  ],
  projectTypes: [
    { id: 1, name: 'Mammal survey', type: 'Monitoring and Surveys' },
    { id: 2, name: 'Bird survey', type: 'Monitoring and Surveys' },
    { id: 3, name: 'Reptile survey', type: 'Monitoring and Surveys' },
    { id: 4, name: 'Plant survey', type: 'Monitoring and Surveys' },
    { id: 5, name: 'Clear undergrowth', type: 'Site Maintenance' },
    { id: 6, name: 'Remove dead wood', type: 'Site Maintenance' },
    { id: 7, name: 'Maintain paths', type: 'Site Maintenance' },
    { id: 8, name: 'Litter collection', type: 'Site Maintenance' },
  ]
};

export const geojsonObject = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'EPSG:3857'
    }
  },
  'features': [{
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [0, 0]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'LineString',
      'coordinates': [[4e6, -2e6], [8e6, 2e6]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'LineString',
      'coordinates': [[4e6, 2e6], [8e6, -2e6]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'Polygon',
      'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'MultiLineString',
      'coordinates': [
        [[-1e6, -7.5e5], [-1e6, 7.5e5]],
        [[1e6, -7.5e5], [1e6, 7.5e5]],
        [[-7.5e5, -1e6], [7.5e5, -1e6]],
        [[-7.5e5, 1e6], [7.5e5, 1e6]]
      ]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'MultiPolygon',
      'coordinates': [
        [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
        [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
        [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]]
      ]
    }
  }, {
    'type': 'Feature',
    'geometry': {
      'type': 'GeometryCollection',
      'geometries': [{
        'type': 'LineString',
        'coordinates': [[-5e6, -5e6], [0, -5e6]]
      }, {
        'type': 'Point',
        'coordinates': [4e6, -5e6]
      }, {
        'type': 'Polygon',
        'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]]
      }]
    }
  }]
};

export const helpItems =
[
  {id: 1, title: 'Work Recording Guidance', helpText: 'this is the help'},
  {id: 2, title: 'Copying mapping from an external GIS layer into CMSi', helpText: 'this is the help'},
  {id: 3, title: 'Management Planning Guidance', helpText: 'this is the help'},
  {id: 4, title: 'End of Year Review', helpText: 'this is the help'},
  {id: 5, title: 'Producing a Full Management Plan Report', helpText: 'this is the help'},
  {id: 6, title: 'Quick Ways to Enter a Management Plan', helpText: 'this is the help'}
];


