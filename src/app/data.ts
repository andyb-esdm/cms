import { Site } from './site';
import { CmsData } from './cms-data';

export const cmsData: CmsData = {
  sites: [
    {
      siteCode: 'NNR001', name: 'Gwernvale Farm', siteType: 'National Nature Reserve', confidential: false, area: 100,
      projects: [
        { id: 1, name: 'monitor small mammals with traps', projectTypeCode: 1, percentageCompleted: 50 },
        { id: 2, name: 'monitor basking lizards by survey', projectTypeCode: 1 },
        { id: 3, name: 'clear litter', projectTypeCode: 8 }
      ]
    },
    {
      siteCode: 'NNR002', name: 'Bluebell Wood', siteType: 'Local Nature Reserve', confidential: false, area: 150,
      projects: [
        { id: 4, name: 'andyb mammal survey', projectTypeCode: 1, percentageCompleted: 20 }
      ]
    },
    {
      siteCode: 'NNR003', name: 'Beech Wood', siteType: 'Local Nature Reserve', confidential: false, projects: [
        { id: 5, name: 'andyb other', projectTypeCode: 5 }
      ]
    },
    { siteCode: 'NNR004', name: 'Table Mountain', siteType: 'National Nature Reserve', confidential: false, },
    { siteCode: 'NNR005', name: 'Llangattock Escarpment', siteType: 'National Nature Reserve', confidential: false, }
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

export const sitesGeoJson = {
  'type': 'FeatureCollection',
  'crs': {
    'type': 'name',
    'properties': {
      'name': 'EPSG:4326'
    }
  },
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [589993.30, 6621293.72]
      },
      'properties': {
        'siteCode': 'NNR001'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [634521.10, 6800125.45]
      },
      'properties': {
        'siteCode': 'NNR002'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [612257.20, 6891041.72]
      },
      'properties': {
        'siteCode': 'NNR003'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [508937.71, 6891041.72]
      },
      'properties': {
        'siteCode': 'NNR004'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [434146.01, 6692356.44]
      },
      'properties': {
        'siteCode': 'NNR005'
      }
    }]
};

export const helpItems =
  [
    { id: 1, title: 'Work Recording Guidance', helpText: 'this is the help' },
    { id: 2, title: 'Copying mapping from an external GIS layer into CMSi', helpText: 'this is the help' },
    { id: 3, title: 'Management Planning Guidance', helpText: 'this is the help' },
    { id: 4, title: 'End of Year Review', helpText: 'this is the help' },
    { id: 5, title: 'Producing a Full Management Plan Report', helpText: 'this is the help' },
    { id: 6, title: 'Quick Ways to Enter a Management Plan', helpText: 'this is the help' }
  ];

export const projectCodes = [
  {
    projectCode: 'A',
    description: 'Administration',
    parent: null
  },
  {
    projectCode: 'AA',
    description: 'Site acquisition / declaration',
    parent: 'A'
  },
  {
    projectCode: 'AA++',
    description: 'Site acquisition / declaration, general',
    parent: 'AA'
  },
  {
    projectCode: 'AA00',
    description: 'Acquire site, by purchase / lease / agreement',
    parent: 'AA'
  },
  {
    projectCode: 'AA10',
    description: 'Acquire site, extension, by purchase / lease / agreement',
    parent: 'AA'
  },
  {
    projectCode: 'AA20',
    description: 'Improve protection, by e.g. purchase of shooting rights',
    parent: 'AA'
  },
  {
    projectCode: 'AA30',
    description: 'Declare site',
    parent: 'AA'
  },
  {
    projectCode: 'AA40',
    description: 'De-declare site',
    parent: 'AA'
  },
  {
    projectCode: 'AA50',
    description: 'Update information, owner / occupier details',
    parent: 'AA'
  },
  {
    projectCode: 'AE',
    description: 'Employ staff',
    parent: 'A'
  },
  {
    projectCode: 'AE00',
    description: 'Employ staff, general',
    parent: 'AE'
  },
  {
    projectCode: 'AE10',
    description: 'Employ staff, staff welfare',
    parent: 'AE'
  },
  {
    projectCode: 'AF',
    description: 'Financial planning and recording',
    parent: 'A'
  },
  {
    projectCode: 'AF00',
    description: 'Finance, general',
    parent: 'AF'
  },
  {
    projectCode: 'AF01',
    description: 'Grant applications',
    parent: 'AF'
  },
  {
    projectCode: 'AF02',
    description: 'Fund raising and donations',
    parent: 'AF'
  },
  {
    projectCode: 'AI',
    description: 'Inspections and audits',
    parent: 'A'
  },
  {
    projectCode: 'AI++',
    description: 'Inspections and audits, general',
    parent: 'AI'
  },
  {
    projectCode: 'AI00',
    description: 'Implement inspection, monitoring site integrity',
    parent: 'AI'
  },
  {
    projectCode: 'AI10',
    description: 'Implement inspection, site equipment',
    parent: 'AI'
  },
  {
    projectCode: 'AI20',
    description: 'Implement inspection, site buildings',
    parent: 'AI'
  },
  {
    projectCode: 'AI30',
    description: 'Implement inspection, site safety',
    parent: 'AI'
  },
  {
    projectCode: 'AI40',
    description: 'Implement inspection, other',
    parent: 'AI'
  },
  {
    projectCode: 'AL',
    description: 'Legal matters and payments',
    parent: 'A'
  },
  {
    projectCode: 'AL++',
    description: 'Legal matters and payments, general',
    parent: 'AL'
  },
  {
    projectCode: 'AL00',
    description: 'Maintain holding, legal, by e.g. renewing lease / agreement / tenancy',
    parent: 'AL'
  },
  {
    projectCode: 'AL10',
    description: 'Safeguard title, legal, by e.g. closing site / road one day per year',
    parent: 'AL'
  },
  {
    projectCode: 'AL20',
    description: 'Maintain holding, legal, by making / receiving payments',
    parent: 'AL'
  },
  {
    projectCode: 'AL30',
    description: 'Protect site, legal requirements, by convening annual meeting',
    parent: 'AL'
  },
  {
    projectCode: 'AL40',
    description: 'Prepare / revise policy & legislation',
    parent: 'AL'
  },
  {
    projectCode: 'AN',
    description: 'Site designation',
    parent: 'A'
  },
  {
    projectCode: 'AN++',
    description: 'Site designation, general',
    parent: 'AN'
  },
  {
    projectCode: 'AN00',
    description: 'Classify site',
    parent: 'AN'
  },
  {
    projectCode: 'AN10',
    description: 'Notify site',
    parent: 'AN'
  },
  {
    projectCode: 'AN20',
    description: 'Renotify site',
    parent: 'AN'
  },
  {
    projectCode: 'AN30',
    description: 'Denotify site',
    parent: 'AN'
  },
  {
    projectCode: 'AN40',
    description: 'Register site',
    parent: 'AN'
  },
  {
    projectCode: 'AP',
    description: 'Planning, plan preparation and revision',
    parent: 'A'
  },
  {
    projectCode: 'AP++',
    description: 'Planning, plan preparation and revision, general',
    parent: 'AP'
  },
  {
    projectCode: 'AP00',
    description: 'Prepare / revise legal site description',
    parent: 'AP'
  },
  {
    projectCode: 'AP10',
    description: 'Prepare / revise work programme',
    parent: 'AP'
  },
  {
    projectCode: 'AP20',
    description: 'Prepare / revise plan, management plans',
    parent: 'AP'
  },
  {
    projectCode: 'AP21',
    description: 'Prepare / revise plan, strategic planning',
    parent: 'AP'
  },
  {
    projectCode: 'AP22',
    description: 'Prepare / revise plan, major projects',
    parent: 'AP'
  },
  {
    projectCode: 'AP23',
    description: 'Prepare / revise plan, sector plans',
    parent: 'AP'
  },
  {
    projectCode: 'AP30',
    description: 'Prepare / revise plan, fire protection / control',
    parent: 'AP'
  },
  {
    projectCode: 'AP40',
    description: 'Prepare / revise plan, emergency procedure',
    parent: 'AP'
  },
  {
    projectCode: 'AP50',
    description: 'Prepare / revise plan, safety',
    parent: 'AP'
  },
  {
    projectCode: 'AP60',
    description: 'Prepare plan, annual work',
    parent: 'AP'
  },
  {
    projectCode: 'AP70',
    description: 'Convene meeting, Annual Programme Review',
    parent: 'AP'
  },
  {
    projectCode: 'AP80',
    description: 'Convene meeting, Site Management Committee / advisory group',
    parent: 'AP'
  },
  {
    projectCode: 'AR',
    description: 'Reports and general correspondence',
    parent: 'A'
  },
  {
    projectCode: 'AR++',
    description: 'Reports and general correspondence, general',
    parent: 'AR'
  },
  {
    projectCode: 'AR00',
    description: 'Prepare report, project recording',
    parent: 'AR'
  },
  {
    projectCode: 'AR01',
    description: 'Prepare report, project review, new projects',
    parent: 'AR'
  },
  {
    projectCode: 'AR10',
    description: 'Prepare report, incident, e.g. fire / accident',
    parent: 'AR'
  },
  {
    projectCode: 'AR20',
    description: 'Prepare report, annual progress',
    parent: 'AR'
  },
  {
    projectCode: 'AR30',
    description: 'Prepare correspondence, general',
    parent: 'AR'
  },
  {
    projectCode: 'AR40',
    description: 'Record administrative details, e.g. staff appointments / visits',
    parent: 'AR'
  },
  {
    projectCode: 'AR60',
    description: 'Prepare report, other',
    parent: 'AR'
  },
  {
    projectCode: 'AS',
    description: 'Site and species safeguard, law enforcement & admin.',
    parent: 'A'
  },
  {
    projectCode: 'AS++',
    description: 'Site and species safeguard, law enforcement & admin, general',
    parent: 'AS'
  },
  {
    projectCode: 'AS00',
    description: 'Protect site, legal action',
    parent: 'AS'
  },
  {
    projectCode: 'AS10',
    description: 'Protect site, visitor permit system',
    parent: 'AS'
  },
  {
    projectCode: 'AS20',
    description: 'Protect site / species, activity permit system',
    parent: 'AS'
  },
  {
    projectCode: 'AS30',
    description: 'Protect site, by preparing evidence',
    parent: 'AS'
  },
  {
    projectCode: 'AS40',
    description: 'Protect site, by prosecution',
    parent: 'AS'
  },
  {
    projectCode: 'AS50',
    description: 'Protect species, by prosecution',
    parent: 'AS'
  },
  {
    projectCode: 'AS60',
    description: 'Protect species, by control of harvesting',
    parent: 'AS'
  },
  {
    projectCode: 'AT',
    description: 'Training and management',
    parent: 'A'
  },
  {
    projectCode: 'AT++',
    description: 'Training and management, general',
    parent: 'AT'
  },
  {
    projectCode: 'AT00',
    description: 'Train staff, use of site planning system',
    parent: 'AT'
  },
  {
    projectCode: 'AT10',
    description: 'Train staff, management techniques',
    parent: 'AT'
  },
  {
    projectCode: 'AT20',
    description: 'Train staff, use of machinery / equipment',
    parent: 'AT'
  },
  {
    projectCode: 'AT30',
    description: 'Train staff, other',
    parent: 'AT'
  },
  {
    projectCode: 'AT40',
    description: 'Liaise / supervise staff / contractors',
    parent: 'AT'
  },
  {
    projectCode: 'AT50',
    description: 'Liaise / supervise volunteers',
    parent: 'AT'
  },
  {
    projectCode: 'AT60',
    description: 'Liaise / supervise voluntary working groups',
    parent: 'AT'
  },
  {
    projectCode: 'M',
    description: 'Management',
    parent: null
  },
  {
    projectCode: 'MA',
    description: 'Manage other land',
    parent: 'M'
  },
  {
    projectCode: 'MA0',
    description: 'Manage agricultural land',
    parent: 'MA'
  },
  {
    projectCode: 'MA0+',
    description: 'Manage agricultural land, general',
    parent: 'MA0'
  },
  {
    projectCode: 'MA00',
    description: 'Manage agricultural land, by planting / sowing / propogating',
    parent: 'MA0'
  },
  {
    projectCode: 'MA01',
    description: 'Manage agricultural land, by mowing / harvesting / selective cutting',
    parent: 'MA0'
  },
  {
    projectCode: 'MA02',
    description: 'Manage agricultural land, by weed control / spraying',
    parent: 'MA0'
  },
  {
    projectCode: 'MA03',
    description: 'Manage agricultural land, by pest control',
    parent: 'MA0'
  },
  {
    projectCode: 'MA04',
    description: 'Manage agricultural land, by felling / cutting / pruning / clearing',
    parent: 'MA0'
  },
  {
    projectCode: 'MA05',
    description: 'Manage agricultural land, by path maintenance',
    parent: 'MA0'
  },
  {
    projectCode: 'MA06',
    description: 'Manage agricultural land, artificial, by fertilising',
    parent: 'MA0'
  },
  {
    projectCode: 'MA07',
    description: 'Manage agricultural land, by ploughing',
    parent: 'MA0'
  },
  {
    projectCode: 'MA09',
    description: 'Manage agricultural land, by other activities',
    parent: 'MA0'
  },
  {
    projectCode: 'MA1+',
    description: 'Manage horticulture',
    parent: 'MA'
  },
  {
    projectCode: 'MA2+',
    description: 'Manage urban park',
    parent: 'MA'
  },
  {
    projectCode: 'MA3+',
    description: 'Manage formal gardens',
    parent: 'MA'
  },
  {
    projectCode: 'MB',
    description: 'Manage habitat, hedgerows',
    parent: 'M'
  },
  {
    projectCode: 'MB00',
    description: 'Manage habitat, hedgerows, general',
    parent: 'MB'
  },
  {
    projectCode: 'MB01',
    description: 'Manage habitat, hedgerows, by providing exclosures',
    parent: 'MB'
  },
  {
    projectCode: 'MB02',
    description: 'Manage habitat, hedgerows, by planting / sowing / propagating',
    parent: 'MB'
  },
  {
    projectCode: 'MB03',
    description: 'Manage habitat, hedgerows, by cutting / trimming',
    parent: 'MB'
  },
  {
    projectCode: 'MB04',
    description: 'Manage habitat, hedgerows, by coppicing',
    parent: 'MB'
  },
  {
    projectCode: 'MB05',
    description: 'Manage habitat, hedgerows, by laying',
    parent: 'MB'
  },
  {
    projectCode: 'MB06',
    description: 'Manage habitat, hedgerows, by controlling undesirable species',
    parent: 'MB'
  },
  {
    projectCode: 'MB09',
    description: 'Manage habitat, hedgerows, by other activities',
    parent: 'MB'
  },
  {
    projectCode: 'MC',
    description: 'Manage cultural features',
    parent: 'M'
  },
  {
    projectCode: 'MC0',
    description: 'Manage cultural features, earthwork',
    parent: 'MC'
  },
  {
    projectCode: 'MC0+',
    description: 'Manage cultural features, earthwork, general',
    parent: 'MC0'
  },
  {
    projectCode: 'MC00',
    description: 'Manage cultural features, earthwork, by controlling scrub / sapling',
    parent: 'MC0'
  },
  {
    projectCode: 'MC01',
    description: 'Manage cultural features, earthwork, by controlling grazing  stock',
    parent: 'MC0'
  },
  {
    projectCode: 'MC02',
    description: 'Manage cultural features, earthwork, by spraying',
    parent: 'MC0'
  },
  {
    projectCode: 'MC03',
    description: 'Manage cultural features, earthwork, by mowing',
    parent: 'MC0'
  },
  {
    projectCode: 'MC04',
    description: 'Manage cultural features, earthwork, by felling / cutting',
    parent: 'MC0'
  },
  {
    projectCode: 'MC05',
    description: 'Manage cultural features, earthwork, by controlling cultivation',
    parent: 'MC0'
  },
  {
    projectCode: 'MC06',
    description: 'Manage cultural features, earthwork, by excavation',
    parent: 'MC0'
  },
  {
    projectCode: 'MC09',
    description: 'Manage cultural features, earthwork, by other activities',
    parent: 'MC0'
  },
  {
    projectCode: 'MC1',
    description: 'Manage cultural features, stonework',
    parent: 'MC'
  },
  {
    projectCode: 'MC1+',
    description: 'Manage cultural features, stonework, general',
    parent: 'MC1'
  },
  {
    projectCode: 'MC10',
    description: 'Manage cultural features, stonework, by controlling scrub / sapling',
    parent: 'MC1'
  },
  {
    projectCode: 'MC11',
    description: 'Manage cultural features, stonework, by controlling grazing / stock',
    parent: 'MC1'
  },
  {
    projectCode: 'MC12',
    description: 'Manage cultural features, stonework, by spraying',
    parent: 'MC1'
  },
  {
    projectCode: 'MC13',
    description: 'Manage cultural features, stonework, by mowing',
    parent: 'MC1'
  },
  {
    projectCode: 'MC14',
    description: 'Manage cultural features, stonework, by felling / cutting',
    parent: 'MC1'
  },
  {
    projectCode: 'MC15',
    description: 'Manage cultural features, stonework, by controlling cultivation',
    parent: 'MC1'
  },
  {
    projectCode: 'MC16',
    description: 'Manage cultural features, stonework, by excavation',
    parent: 'MC1'
  },
  {
    projectCode: 'MC17',
    description: 'Manage cultural features, stonework, by repairing stonework',
    parent: 'MC1'
  },
  {
    projectCode: 'MC19',
    description: 'Manage cultural features, stonework, by other activities',
    parent: 'MC1'
  },
  {
    projectCode: 'MC2',
    description: 'Manage cultural features, timber structure',
    parent: 'MC'
  },
  {
    projectCode: 'MC2+',
    description: 'Manage cultural features, timber structure, general',
    parent: 'MC2'
  },
  {
    projectCode: 'MC20',
    description: 'Manage cultural features, timber structure, control scrub / sapling',
    parent: 'MC2'
  },
  {
    projectCode: 'MC21',
    description: 'Manage cultural features, timber structure, control grazing / stock',
    parent: 'MC2'
  },
  {
    projectCode: 'MC22',
    description: 'Manage cultural features, timber structure, by spraying',
    parent: 'MC2'
  },
  {
    projectCode: 'MC23',
    description: 'Manage cultural features, timber structure, by mowing',
    parent: 'MC2'
  },
  {
    projectCode: 'MC24',
    description: 'Manage cultural features, timber structure, by felling / cutting',
    parent: 'MC2'
  },
  {
    projectCode: 'MC25',
    description: 'Manage cultural features, timber structure, control cultivation',
    parent: 'MC2'
  },
  {
    projectCode: 'MC26',
    description: 'Manage cultural features, timber structure, by excavation',
    parent: 'MC2'
  },
  {
    projectCode: 'MC27',
    description: 'Manage cultural features, timber structure, by treating timber',
    parent: 'MC2'
  },
  {
    projectCode: 'MC28',
    description: 'Manage cultural features, timber structure, by repairing timber',
    parent: 'MC2'
  },
  {
    projectCode: 'MC29',
    description: 'Manage cultural features, timber structure, by other activities',
    parent: 'MC2'
  },
  {
    projectCode: 'MC3',
    description: 'Manage cultural features, buried feature',
    parent: 'MC'
  },
  {
    projectCode: 'MC3+',
    description: 'Manage cultural features, buried feature, general',
    parent: 'MC3'
  },
  {
    projectCode: 'MC30',
    description: 'Manage cultural features, buried feature, by controlling scrub/sapling',
    parent: 'MC3'
  },
  {
    projectCode: 'MC31',
    description: 'Manage cultural features, buried feature, control grazing / stock',
    parent: 'MC3'
  },
  {
    projectCode: 'MC32',
    description: 'Manage cultural features, buried feature, by spraying',
    parent: 'MC3'
  },
  {
    projectCode: 'MC33',
    description: 'Manage cultural features, buried feature, by mowing',
    parent: 'MC3'
  },
  {
    projectCode: 'MC34',
    description: 'Manage cultural features, buried feature, by felling / cutting',
    parent: 'MC3'
  },
  {
    projectCode: 'MC35',
    description: 'Manage cultural features, buried feature, by controlling cultivation',
    parent: 'MC3'
  },
  {
    projectCode: 'MC36',
    description: 'Manage cultural features, buried feature, by excavation',
    parent: 'MC3'
  },
  {
    projectCode: 'MC37',
    description: 'Manage cultural features, buried feature, by repairing surface erosion',
    parent: 'MC3'
  },
  {
    projectCode: 'MC39',
    description: 'Manage cultural features, buried feature, by other activities',
    parent: 'MC3'
  },
  {
    projectCode: 'MC4',
    description: 'Manage cultural features, portable antiquities',
    parent: 'MC'
  },
  {
    projectCode: 'MC4+',
    description: 'Manage cultural features, portable antiquities, general',
    parent: 'MC4'
  },
  {
    projectCode: 'MC40',
    description: 'Manage cultural features, portable antiquities, by conserving',
    parent: 'MC4'
  },
  {
    projectCode: 'MC41',
    description: 'Manage cultural features, portable antiquities, by displaying',
    parent: 'MC4'
  },
  {
    projectCode: 'MC42',
    description: 'Manage cultural features, portable antiquities, by disposing',
    parent: 'MC4'
  },
  {
    projectCode: 'MC49',
    description: 'Manage cultural features, portable antiquities, by other activities',
    parent: 'MC4'
  },
  {
    projectCode: 'MC5',
    description: 'Manage cultural features, historic buildings',
    parent: 'MC'
  },
  {
    projectCode: 'MC5+',
    description: 'Manage cultural features, historic buildings, general',
    parent: 'MC5'
  },
  {
    projectCode: 'MC50',
    description: 'Manage cultural features, historic building structure',
    parent: 'MC5'
  },
  {
    projectCode: 'MC51',
    description: 'Manage cultural features, historic building content',
    parent: 'MC5'
  },
  {
    projectCode: 'MC6+',
    description: 'Manage cultural features, archaeological, general',
    parent: 'MC'
  },
  {
    projectCode: 'MC7+',
    description: 'Manage cultural features, industrial archaeological',
    parent: 'MC'
  },
  {
    projectCode: 'MC8+',
    description: 'Manage cultural features, historical landscape',
    parent: 'MC'
  },
  {
    projectCode: 'MC9+',
    description: 'Manage cultural features, religious interest',
    parent: 'MC'
  },
  {
    projectCode: 'MD',
    description: 'Microplan management project codes (specialist)',
    parent: 'M'
  },
  {
    projectCode: 'MD0',
    description: 'Agriculture',
    parent: 'MD'
  },
  {
    projectCode: 'MD00',
    description: 'Improve Agriculture, general',
    parent: 'MD0'
  },
  {
    projectCode: 'MD01',
    description: 'Develop / maintain livestock productivity',
    parent: 'MD0'
  },
  {
    projectCode: 'MD02',
    description: 'Develop / maintain crop productivity',
    parent: 'MD0'
  },
  {
    projectCode: 'MD03',
    description: 'Provide / improve / develop livestock welfare facility',
    parent: 'MD0'
  },
  {
    projectCode: 'MD04',
    description: 'Provide / develop livestock breeding facility',
    parent: 'MD0'
  },
  {
    projectCode: 'MD05',
    description: 'Provide / improve irrigation facility',
    parent: 'MD0'
  },
  {
    projectCode: 'MD1',
    description: 'Forestry',
    parent: 'MD'
  },
  {
    projectCode: 'MD10',
    description: 'Develop / maintain silvicultural activities, general',
    parent: 'MD1'
  },
  {
    projectCode: 'MD11',
    description: 'Develop / maintain fuelwood sources',
    parent: 'MD1'
  },
  {
    projectCode: 'MD12',
    description: 'Develop / maintain timber sources',
    parent: 'MD1'
  },
  {
    projectCode: 'MD13',
    description: 'Develop / maintain tree fodder sources',
    parent: 'MD1'
  },
  {
    projectCode: 'MD14',
    description: 'Develop / maintain Agroforestry systems',
    parent: 'MD1'
  },
  {
    projectCode: 'MD15',
    description: 'Develop / maintain sylvo-pastoral systems',
    parent: 'MD1'
  },
  {
    projectCode: 'MD16',
    description: 'Develop plant nursery facilities',
    parent: 'MD1'
  },
  {
    projectCode: 'MD17',
    description: 'Provide tree seedlings',
    parent: 'MD1'
  },
  {
    projectCode: 'MD2',
    description: 'Soil and Water conservation',
    parent: 'MD'
  },
  {
    projectCode: 'MD20',
    description: 'Soil and water conservation, general',
    parent: 'MD2'
  },
  {
    projectCode: 'MD21',
    description: 'Construct soil / water conservation structures',
    parent: 'MD2'
  },
  {
    projectCode: 'MD22',
    description: 'Plant / maintain trees / other vegetation',
    parent: 'MD2'
  },
  {
    projectCode: 'MD23',
    description: 'Restore / protect vegetation',
    parent: 'MD2'
  },
  {
    projectCode: 'MD3',
    description: 'Agricultural infrastructure',
    parent: 'MD'
  },
  {
    projectCode: 'MD30',
    description: 'Develop / maintain agricultural infrastructure',
    parent: 'MD3'
  },
  {
    projectCode: 'MD31',
    description: 'Provide / maintain livestock control structures',
    parent: 'MD3'
  },
  {
    projectCode: 'MD32',
    description: 'Provide / maintain other agricultural structures',
    parent: 'MD3'
  },
  {
    projectCode: 'MD33',
    description: 'Provide agricultural support facilities',
    parent: 'MD3'
  },
  {
    projectCode: 'MD34',
    description: 'Provide / maintain access roads',
    parent: 'MD3'
  },
  {
    projectCode: 'MD35',
    description: 'Provide / maintain irrigation facilities',
    parent: 'MD3'
  },
  {
    projectCode: 'MD4',
    description: 'Social infrastructure',
    parent: 'MD'
  },
  {
    projectCode: 'MD40',
    description: 'Provide / maintain village infrastructure',
    parent: 'MD4'
  },
  {
    projectCode: 'MD41',
    description: 'Provide / improve medical facilities',
    parent: 'MD4'
  },
  {
    projectCode: 'MD42',
    description: 'Provide / improve social / cultural facilities',
    parent: 'MD4'
  },
  {
    projectCode: 'MD43',
    description: 'Provide alternative energy sources',
    parent: 'MD4'
  },
  {
    projectCode: 'MD44',
    description: 'Improve efficiency, existing energy sources',
    parent: 'MD4'
  },
  {
    projectCode: 'MD45',
    description: 'Provide / improve education facilities',
    parent: 'MD4'
  },
  {
    projectCode: 'MD5',
    description: 'Employment',
    parent: 'MD'
  },
  {
    projectCode: 'MD50',
    description: 'Develop alternative employment',
    parent: 'MD5'
  },
  {
    projectCode: 'ME',
    description: 'Manage site infrastructure',
    parent: 'M'
  },
  {
    projectCode: 'ME0',
    description: 'General site infrastructure',
    parent: 'ME'
  },
  {
    projectCode: 'ME00',
    description: 'Site infrastructure, general',
    parent: 'ME0'
  },
  {
    projectCode: 'ME01',
    description: 'Boundary structures',
    parent: 'ME0'
  },
  {
    projectCode: 'ME02',
    description: 'Other structures',
    parent: 'ME0'
  },
  {
    projectCode: 'ME03',
    description: 'Remove structures',
    parent: 'ME0'
  },
  {
    projectCode: 'ME04',
    description: 'Remove rubbish / maintain litter bins',
    parent: 'ME0'
  },
  {
    projectCode: 'ME05',
    description: 'Provide / maintain picnic tables',
    parent: 'ME0'
  },
  {
    projectCode: 'ME06',
    description: 'Erect/maintain signs/interpretation boards',
    parent: 'ME0'
  },
  {
    projectCode: 'ME1',
    description: 'Site buildings',
    parent: 'ME'
  },
  {
    projectCode: 'ME10',
    description: 'Site buildings, general',
    parent: 'ME1'
  },
  {
    projectCode: 'ME11',
    description: 'Site buildings, construct',
    parent: 'ME1'
  },
  {
    projectCode: 'ME12',
    description: 'Site buildings, maintain / improve',
    parent: 'ME1'
  },
  {
    projectCode: 'ME14',
    description: 'Site buildings, maintain / improve toilets',
    parent: 'ME1'
  },
  {
    projectCode: 'ME15',
    description: 'Site buildings, maintain / improve visitor centre',
    parent: 'ME1'
  },
  {
    projectCode: 'ME2',
    description: 'Legal / Emergency operations',
    parent: 'ME'
  },
  {
    projectCode: 'ME2+',
    description: 'Legal / Emergency operations',
    parent: 'ME2'
  },
  {
    projectCode: 'ME20',
    description: 'Comply with legal obligations',
    parent: 'ME2'
  },
  {
    projectCode: 'ME21',
    description: 'Implement emergency procedures',
    parent: 'ME2'
  },
  {
    projectCode: 'ME22',
    description: 'Trim / fell / clear trees / shrubs',
    parent: 'ME2'
  },
  {
    projectCode: 'ME3',
    description: 'Extraction / dumping',
    parent: 'ME'
  },
  {
    projectCode: 'ME3+',
    description: 'Extraction / dumping, general',
    parent: 'ME3'
  },
  {
    projectCode: 'ME30',
    description: 'Control erosion OBSOLETE',
    parent: 'ME3'
  },
  {
    projectCode: 'ME31',
    description: 'Control dumping',
    parent: 'ME3'
  },
  {
    projectCode: 'ME32',
    description: 'Control extraction',
    parent: 'ME3'
  },
  {
    projectCode: 'ME4',
    description: 'Paths / roads / car parks',
    parent: 'ME'
  },
  {
    projectCode: 'ME40',
    description: 'Provide / maintain paths / rides / roads / car parks',
    parent: 'ME4'
  },
  {
    projectCode: 'ME5',
    description: 'Drainage / irrigation',
    parent: 'ME'
  },
  {
    projectCode: 'ME50',
    description: 'Provide / maintain drainage / irrigation systems',
    parent: 'ME5'
  },
  {
    projectCode: 'ME6',
    description: 'Provide / maintain general facilities',
    parent: 'ME'
  },
  {
    projectCode: 'ME6+',
    description: 'Provide / maintain facilities, general',
    parent: 'ME6'
  },
  {
    projectCode: 'ME60',
    description: 'Provide / maintain staff accommodation',
    parent: 'ME6'
  },
  {
    projectCode: 'ME61',
    description: 'Provide / maintain visitor accommodation',
    parent: 'ME6'
  },
  {
    projectCode: 'ME62',
    description: 'Provide / maintain education facilities',
    parent: 'ME6'
  },
  {
    projectCode: 'ME63',
    description: 'Provide / maintain medical facilities',
    parent: 'ME6'
  },
  {
    projectCode: 'ME64',
    description: 'Provide / maintain workshop',
    parent: 'ME6'
  },
  {
    projectCode: 'ME65',
    description: 'Provide / maintain fuel storage',
    parent: 'ME6'
  },
  {
    projectCode: 'ME66',
    description: 'Provide / maintain general stores',
    parent: 'ME6'
  },
  {
    projectCode: 'ME67',
    description: 'Provide / maintain water supply',
    parent: 'ME6'
  },
  {
    projectCode: 'ME68',
    description: 'Provide / maintain power supply',
    parent: 'ME6'
  },
  {
    projectCode: 'ME69',
    description: 'Provide / maintain fuel supply',
    parent: 'ME6'
  },
  {
    projectCode: 'ME7',
    description: 'Provide / maintain staff facilities',
    parent: 'ME'
  },
  {
    projectCode: 'ME7+',
    description: 'Provide / maintain staff facilities, general',
    parent: 'ME7'
  },
  {
    projectCode: 'ME70',
    description: 'Provide / maintain religious centre',
    parent: 'ME7'
  },
  {
    projectCode: 'ME71',
    description: 'Provide / maintain staff recreational facilities',
    parent: 'ME7'
  },
  {
    projectCode: 'ME72',
    description: 'Provide / maintain social centre',
    parent: 'ME7'
  },
  {
    projectCode: 'ME8+',
    description: 'Provide / maintain recreational facilities',
    parent: 'ME'
  },
  {
    projectCode: 'MG',
    description: 'Manage grazing animals',
    parent: 'M'
  },
  {
    projectCode: 'MG++',
    description: 'Manage grazing animals, general',
    parent: 'MG'
  },
  {
    projectCode: 'MG00',
    description: 'Husband grazing stock, cattle',
    parent: 'MG'
  },
  {
    projectCode: 'MG10',
    description: 'Husband grazing stock, sheep',
    parent: 'MG'
  },
  {
    projectCode: 'MG20',
    description: 'Husband grazing stock, ponies',
    parent: 'MG'
  },
  {
    projectCode: 'MG30',
    description: 'Husband grazing stock, other',
    parent: 'MG'
  },
  {
    projectCode: 'MH',
    description: 'Manage habitat',
    parent: 'M'
  },
  {
    projectCode: 'MH++',
    description: 'Manage habitat, other',
    parent: 'MH'
  },
  {
    projectCode: 'MH0',
    description: 'Manage habitat, forest / woodland / scrub',
    parent: 'MH'
  },
  {
    projectCode: 'MH0+',
    description: 'Manage habitat, forest / woodland / scrub, general',
    parent: 'MH0'
  },
  {
    projectCode: 'MH00',
    description: 'Manage habitat, forest / woodland / scrub, by coppicing',
    parent: 'MH0'
  },
  {
    projectCode: 'MH01',
    description: 'Manage habitat, forest / woodland / scrub, by planting / sowing',
    parent: 'MH0'
  },
  {
    projectCode: 'MH02',
    description: 'Manage habitat, forest / woodland / scrub, by thinning / group felling',
    parent: 'MH0'
  },
  {
    projectCode: 'MH03',
    description: 'Manage habitat, forest / woodland / scrub, aiding natural regeneration',
    parent: 'MH0'
  },
  {
    projectCode: 'MH04',
    description: 'Manage habitat, forest / woodland / scrub, maintaining ride/path/glade',
    parent: 'MH0'
  },
  {
    projectCode: 'MH06',
    description: 'Manage habitat, forest / woodland / scrub, by enclosure / exclosure',
    parent: 'MH0'
  },
  {
    projectCode: 'MH07',
    description: 'Manage habitat, forest / woodland / scrub, by scrub control',
    parent: 'MH0'
  },
  {
    projectCode: 'MH08',
    description: 'Manage habitat, forest / woodland / scrub, by managing dead wood',
    parent: 'MH0'
  },
  {
    projectCode: 'MH09',
    description: 'Manage habitat, forest / woodland / scrub, by other activities',
    parent: 'MH0'
  },
  {
    projectCode: 'MH1',
    description: 'Manage habitat, grassland',
    parent: 'MH'
  },
  {
    projectCode: 'MH1+',
    description: 'Manage habitat, grassland, general',
    parent: 'MH1'
  },
  {
    projectCode: 'MH10',
    description: 'Manage habitat, grassland, by controlled grazing',
    parent: 'MH1'
  },
  {
    projectCode: 'MH11',
    description: 'Manage habitat, grassland, by controlled burning',
    parent: 'MH1'
  },
  {
    projectCode: 'MH12',
    description: 'Manage habitat, grassland, by mowing',
    parent: 'MH1'
  },
  {
    projectCode: 'MH13',
    description: 'Manage habitat, grassland, by sowing / planting / turf laying',
    parent: 'MH1'
  },
  {
    projectCode: 'MH14',
    description: 'Manage habitat, grassland, by scrub control',
    parent: 'MH1'
  },
  {
    projectCode: 'MH16',
    description: 'Manage habitat, grassland, by enclosure / exclosure',
    parent: 'MH1'
  },
  {
    projectCode: 'MH19',
    description: 'Manage habitat, grassland, by other activities',
    parent: 'MH1'
  },
  {
    projectCode: 'MH2',
    description: 'Manage habitat, controlling invasive species',
    parent: 'MH'
  },
  {
    projectCode: 'MH2+',
    description: 'Manage habitat, controlling invasive species, general',
    parent: 'MH2'
  },
  {
    projectCode: 'MH20',
    description: 'Manage habitat, controlling invasive species, by grazing',
    parent: 'MH2'
  },
  {
    projectCode: 'MH21',
    description: 'Manage habitat, controlling invasive species, by burning',
    parent: 'MH2'
  },
  {
    projectCode: 'MH22',
    description: 'Manage habitat, controlling invasive species, by mowing / cutting',
    parent: 'MH2'
  },
  {
    projectCode: 'MH23',
    description: 'Manage habitat, controlling invasive species, by enclosure / exclosure',
    parent: 'MH2'
  },
  {
    projectCode: 'MH25',
    description: 'Manage habitat, controlling invasive species, by spraying',
    parent: 'MH2'
  },
  {
    projectCode: 'MH29',
    description: 'Manage habitat, controlling invasive species, by other activities',
    parent: 'MH2'
  },
  {
    projectCode: 'MH3',
    description: 'Manage habitat, heath',
    parent: 'MH'
  },
  {
    projectCode: 'MH3+',
    description: 'Manage habitat, heath, general',
    parent: 'MH3'
  },
  {
    projectCode: 'MH30',
    description: 'Manage habitat, heath, by controlled grazing',
    parent: 'MH3'
  },
  {
    projectCode: 'MH31',
    description: 'Manage habitat, heath, by scrub / tree control',
    parent: 'MH3'
  },
  {
    projectCode: 'MH32',
    description: 'Manage habitat, heath, by mowing',
    parent: 'MH3'
  },
  {
    projectCode: 'MH33',
    description: 'Manage habitat, heath, by fire prevention / control',
    parent: 'MH3'
  },
  {
    projectCode: 'MH34',
    description: 'Manage habitat, heath, by enclosure / exclosure',
    parent: 'MH3'
  },
  {
    projectCode: 'MH35',
    description: 'Manage habitat, heath, by cultivation to acc leaching',
    parent: 'MH3'
  },
  {
    projectCode: 'MH37',
    description: 'Manage habitat, heath, by controlled burning',
    parent: 'MH3'
  },
  {
    projectCode: 'MH39',
    description: 'Manage habitat, heath, by other activities',
    parent: 'MH3'
  },
  {
    projectCode: 'MH4',
    description: 'Manage habitat, bog / mire / flush',
    parent: 'MH'
  },
  {
    projectCode: 'MH4+',
    description: 'Manage habitat, bog / mire / flush, general',
    parent: 'MH4'
  },
  {
    projectCode: 'MH40',
    description: 'Manage habitat, bog / mire / flush, by water level control',
    parent: 'MH4'
  },
  {
    projectCode: 'MH41',
    description: 'Manage habitat, bog / mire / flush, by controlled grazing',
    parent: 'MH4'
  },
  {
    projectCode: 'MH42',
    description: 'Manage habitat, bog / mire / flush, by tree / scrub control',
    parent: 'MH4'
  },
  {
    projectCode: 'MH43',
    description: 'Manage habitat, bog / mire / flush, by enclosure / exclosure',
    parent: 'MH4'
  },
  {
    projectCode: 'MH44',
    description: 'Manage habitat, bog / mire / flush, by fire prevention / control',
    parent: 'MH4'
  },
  {
    projectCode: 'MH45',
    description: 'Manage habitat, bog / mire / flush, by visitor control',
    parent: 'MH4'
  },
  {
    projectCode: 'MH49',
    description: 'Manage habitat, bog / mire / flush, by other activities',
    parent: 'MH4'
  },
  {
    projectCode: 'MH5',
    description: 'Manage habitat, swamp / fen / inundation',
    parent: 'MH'
  },
  {
    projectCode: 'MH5+',
    description: 'Manage habitat, swamp / fen / inundation, general',
    parent: 'MH5'
  },
  {
    projectCode: 'MH50',
    description: 'Manage habitat, swamp / fen / inundation , by water level control',
    parent: 'MH5'
  },
  {
    projectCode: 'MH51',
    description: 'Manage habitat, swamp / fen / inundation , by planting / seeding',
    parent: 'MH5'
  },
  {
    projectCode: 'MH52',
    description: 'Manage habitat, swamp / fen / inundation , by scrub control',
    parent: 'MH5'
  },
  {
    projectCode: 'MH53',
    description: 'Manage habitat, swamp / fen / inundation , by mowing',
    parent: 'MH5'
  },
  {
    projectCode: 'MH54',
    description: 'Manage habitat, swamp / fen / inundation , by controlled grazing',
    parent: 'MH5'
  },
  {
    projectCode: 'MH55',
    description: 'Manage habitat, swamp / fen / inundation , by excavation',
    parent: 'MH5'
  },
  {
    projectCode: 'MH57',
    description: 'Manage habitat, swamp / fen / inundation , by ditch / dyke maintenance',
    parent: 'MH5'
  },
  {
    projectCode: 'MH58',
    description: 'Manage habitat, swamp / fen / inundation , by controlled burning',
    parent: 'MH5'
  },
  {
    projectCode: 'MH59',
    description: 'Manage habitat, swamp / fen / inundation , by other activities',
    parent: 'MH5'
  },
  {
    projectCode: 'MH6',
    description: 'Manage habitat, open water / rivers',
    parent: 'MH'
  },
  {
    projectCode: 'MH6+',
    description: 'Manage habitat, open water / rivers, general',
    parent: 'MH6'
  },
  {
    projectCode: 'MH60',
    description: 'Manage habitat, open water / rivers, by water level control',
    parent: 'MH6'
  },
  {
    projectCode: 'MH61',
    description: 'Manage habitat, open water / rivers, by excavation',
    parent: 'MH6'
  },
  {
    projectCode: 'MH62',
    description: 'Manage habitat, open water / rivers, by plant introduction',
    parent: 'MH6'
  },
  {
    projectCode: 'MH63',
    description: 'Manage habitat, open water / rivers, by pollution prevention',
    parent: 'MH6'
  },
  {
    projectCode: 'MH64',
    description: 'Manage habitat, open water / rivers, clearing/dredging/re-profiling',
    parent: 'MH6'
  },
  {
    projectCode: 'MH65',
    description: 'Manage habitat, open water / rivers, clearing surrounding vegetation',
    parent: 'MH6'
  },
  {
    projectCode: 'MH69',
    description: 'Manage habitat, open water / rivers, by other activities',
    parent: 'MH6'
  },
  {
    projectCode: 'MH7',
    description: 'Manage habitat, coastal',
    parent: 'MH'
  },
  {
    projectCode: 'MH7+',
    description: 'Manage habitat, coastal',
    parent: 'MH7'
  },
  {
    projectCode: 'MH70',
    description: 'Manage habitat, coastal, by visitor control',
    parent: 'MH7'
  },
  {
    projectCode: 'MH71',
    description: 'Manage habitat, coastal, by planting stabilisation',
    parent: 'MH7'
  },
  {
    projectCode: 'MH72',
    description: 'Manage habitat, coastal, by scrub control',
    parent: 'MH7'
  },
  {
    projectCode: 'MH73',
    description: 'Manage habitat, coastal, by mowing',
    parent: 'MH7'
  },
  {
    projectCode: 'MH74',
    description: 'Manage habitat, coastal, by controlled grazing',
    parent: 'MH7'
  },
  {
    projectCode: 'MH76',
    description: 'Manage habitat, coastal, by enclosure / exclosure',
    parent: 'MH7'
  },
  {
    projectCode: 'MH77',
    description: 'Manage habitat, coastal, by ditch / dyke maintenance',
    parent: 'MH7'
  },
  {
    projectCode: 'MH78',
    description: 'Manage habitat, coastal, by controlled burning',
    parent: 'MH7'
  },
  {
    projectCode: 'MH79',
    description: 'Manage habitat, coastal, by other activities',
    parent: 'MH7'
  },
  {
    projectCode: 'MH8',
    description: 'Manage habitat, rock (replaced by MU1+)',
    parent: 'MH'
  },
  {
    projectCode: 'MH80',
    description: 'Manage habitat, rock, by soil removal (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH81',
    description: 'Manage habitat, rock, by excavation (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH82',
    description: 'Manage habitat, rock, by cutting vegetation (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH83',
    description: 'Manage habitat, rock, by visitor control (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH84',
    description: 'Manage habitat, rock, by grazing control (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH85',
    description: 'Manage habitat, rock, by scrub control (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH86',
    description: 'Manage habitat, rock, by removal of debris (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH89',
    description: 'Manage habitat, rock, by other activities (replaced by MU1+)',
    parent: 'MH8'
  },
  {
    projectCode: 'MH9',
    description: 'Manage habitat, upland / montane',
    parent: 'MH'
  },
  {
    projectCode: 'MH9+',
    description: 'Manage habitat, upland / montane, general',
    parent: 'MH9'
  },
  {
    projectCode: 'MH90',
    description: 'Manage habitat, upland / montane, by controlled grazing',
    parent: 'MH9'
  },
  {
    projectCode: 'MH91',
    description: 'Manage habitat, upland / montane, by controlled burning',
    parent: 'MH9'
  },
  {
    projectCode: 'MH92',
    description: 'Manage habitat, upland / montane, by cutting vegetation',
    parent: 'MH9'
  },
  {
    projectCode: 'MH93',
    description: 'Manage habitat, upland / montane, by enclosure / exclosure',
    parent: 'MH9'
  },
  {
    projectCode: 'MH94',
    description: 'Manage habitat, upland / montane, by shrub / tree control',
    parent: 'MH9'
  },
  {
    projectCode: 'MH95',
    description: 'Manage habitat, upland / montane, by visitor control',
    parent: 'MH9'
  },
  {
    projectCode: 'MH99',
    description: 'Manage habitat, upland / montane, by other activities',
    parent: 'MH9'
  },
  {
    projectCode: 'MI',
    description: 'Information / education / interpretation / events',
    parent: 'M'
  },
  {
    projectCode: 'MI00',
    description: 'Inform stakeholders',
    parent: 'MI'
  },
  {
    projectCode: 'MI10',
    description: 'Inform visitors, onsite information',
    parent: 'MI'
  },
  {
    projectCode: 'MI20',
    description: 'Inform visitors, educational information',
    parent: 'MI'
  },
  {
    projectCode: 'MI30',
    description: 'Inform visitors, specialist information',
    parent: 'MI'
  },
  {
    projectCode: 'MI40',
    description: 'Inform visitors, recreational information',
    parent: 'MI'
  },
  {
    projectCode: 'MI50',
    description: 'Provide interpretation',
    parent: 'MI'
  },
  {
    projectCode: 'MI60',
    description: 'Manage events',
    parent: 'MI'
  },
  {
    projectCode: 'ML',
    description: 'Liasion with stakeholders',
    parent: 'M'
  },
  {
    projectCode: 'ML++',
    description: 'Liaise stakeholders, general',
    parent: 'ML'
  },
  {
    projectCode: 'ML00',
    description: 'Liaise stakeholders, owners / occupiers',
    parent: 'ML'
  },
  {
    projectCode: 'ML10',
    description: 'Liaise stakeholders, commoners',
    parent: 'ML'
  },
  {
    projectCode: 'ML20',
    description: 'Liaise stakeholders, right-holders',
    parent: 'ML'
  },
  {
    projectCode: 'ML30',
    description: 'Liaise stakeholders, neighbours',
    parent: 'ML'
  },
  {
    projectCode: 'ML40',
    description: 'Liaise stakeholders, local / national authorities',
    parent: 'ML'
  },
  {
    projectCode: 'ML50',
    description: 'Liaise stakeholders, local community / groups',
    parent: 'ML'
  },
  {
    projectCode: 'ML60',
    description: 'Liaise stakeholders, emergency services',
    parent: 'ML'
  },
  {
    projectCode: 'ML70',
    description: 'Liaise stakeholders, media',
    parent: 'ML'
  },
  {
    projectCode: 'ML80',
    description: 'Liaise stakeholders, others',
    parent: 'ML'
  },
  {
    projectCode: 'MM',
    description: 'Manage machinery and equipment',
    parent: 'M'
  },
  {
    projectCode: 'MM++',
    description: 'Manage machinery and equipment, general',
    parent: 'MM'
  },
  {
    projectCode: 'MM00',
    description: 'Acquire / service vehicles / boats',
    parent: 'MM'
  },
  {
    projectCode: 'MM10',
    description: 'Acquire / service machinery',
    parent: 'MM'
  },
  {
    projectCode: 'MM20',
    description: 'Acquire / maintain tools /equipment',
    parent: 'MM'
  },
  {
    projectCode: 'MM30',
    description: 'Acquire / service aircraft',
    parent: 'MM'
  },
  {
    projectCode: 'MN',
    description: 'Manage habitat, marine',
    parent: 'M'
  },
  {
    projectCode: 'MN0',
    description: 'Manage marine, general',
    parent: 'MN'
  },
  {
    projectCode: 'MN00',
    description: 'Manage marine, general',
    parent: 'MN0'
  },
  {
    projectCode: 'MN01',
    description: 'Manage marine, general, pollution',
    parent: 'MN0'
  },
  {
    projectCode: 'MN1',
    description: 'Manage marine, pelagic',
    parent: 'MN'
  },
  {
    projectCode: 'MN10',
    description: 'Manage marine, pelagic, general',
    parent: 'MN1'
  },
  {
    projectCode: 'MN2',
    description: 'Manage marine, benthic littoral',
    parent: 'MN'
  },
  {
    projectCode: 'MN20',
    description: 'Manage marine, benthic littoral, general',
    parent: 'MN2'
  },
  {
    projectCode: 'MN21',
    description: 'Manage marine, benthic littoral, artificial',
    parent: 'MN2'
  },
  {
    projectCode: 'MN3',
    description: 'Manage marine, benthic sublittoral',
    parent: 'MN'
  },
  {
    projectCode: 'MN30',
    description: 'Manage marine, benthic sublittoral, general',
    parent: 'MN3'
  },
  {
    projectCode: 'MN31',
    description: 'Manage marine, benthic sublittoral, artificial',
    parent: 'MN3'
  },
  {
    projectCode: 'MP',
    description: 'Patrol',
    parent: 'M'
  },
  {
    projectCode: 'MP00',
    description: 'Patrol, general',
    parent: 'MP'
  },
  {
    projectCode: 'MP10',
    description: 'Patrol, maintain boundary gates',
    parent: 'MP'
  },
  {
    projectCode: 'MP11',
    description: 'Patrol, maintain surveillance posts',
    parent: 'MP'
  },
  {
    projectCode: 'MP12',
    description: 'Patrol, maintain patrol staffing levels',
    parent: 'MP'
  },
  {
    projectCode: 'MP13',
    description: 'Patrol, maintain patrol equipment',
    parent: 'MP'
  },
  {
    projectCode: 'MP14',
    description: 'Patrol, maintain patrol communications',
    parent: 'MP'
  },
  {
    projectCode: 'MS',
    description: 'Manage species',
    parent: 'M'
  },
  {
    projectCode: 'MS++',
    description: 'Manage species, general',
    parent: 'MS'
  },
  {
    projectCode: 'MS00',
    description: 'Manage species, tree / shrub',
    parent: 'MS'
  },
  {
    projectCode: 'MS10',
    description: 'Manage species, other vascular plant',
    parent: 'MS'
  },
  {
    projectCode: 'MS20',
    description: 'Manage species, lower plant',
    parent: 'MS'
  },
  {
    projectCode: 'MS30',
    description: 'Manage species, mammal',
    parent: 'MS'
  },
  {
    projectCode: 'MS40',
    description: 'Manage species, bird',
    parent: 'MS'
  },
  {
    projectCode: 'MS50',
    description: 'Manage species, herptile',
    parent: 'MS'
  },
  {
    projectCode: 'MS60',
    description: 'Manage species, fish',
    parent: 'MS'
  },
  {
    projectCode: 'MS70',
    description: 'Manage species, Lepidoptera',
    parent: 'MS'
  },
  {
    projectCode: 'MS80',
    description: 'Manage species, other insect',
    parent: 'MS'
  },
  {
    projectCode: 'MS90',
    description: 'Manage species, other invertebrate',
    parent: 'MS'
  },
  {
    projectCode: 'MU',
    description: 'Manage earth science',
    parent: 'M'
  },
  {
    projectCode: 'MU0',
    description: 'Manage earth science, underground',
    parent: 'MU'
  },
  {
    projectCode: 'MU0+',
    description: 'Manage earth science, underground, general',
    parent: 'MU0'
  },
  {
    projectCode: 'MU00',
    description: 'Manage underground, control pollution',
    parent: 'MU0'
  },
  {
    projectCode: 'MU01',
    description: 'Manage underground, restoration',
    parent: 'MU0'
  },
  {
    projectCode: 'MU02',
    description: 'Manage underground, establish / maintain exclusion areas',
    parent: 'MU0'
  },
  {
    projectCode: 'MU03',
    description: 'Manage underground, control water movement',
    parent: 'MU0'
  },
  {
    projectCode: 'MU04',
    description: 'Manage underground, control excavation / digging',
    parent: 'MU0'
  },
  {
    projectCode: 'MU05',
    description: 'Manage underground, control visitors',
    parent: 'MU0'
  },
  {
    projectCode: 'MU06',
    description: 'Manage underground, remove debris',
    parent: 'MU0'
  },
  {
    projectCode: 'MU09',
    description: 'Manage underground, other activities',
    parent: 'MU0'
  },
  {
    projectCode: 'MU1+',
    description: 'Manage earth science, geological',
    parent: 'MU'
  },
  {
    projectCode: 'MU2+',
    description: 'Manage earth science, geomorphological',
    parent: 'MU'
  },
  {
    projectCode: 'MU3+',
    description: 'Manage earth science, soils',
    parent: 'MU'
  },
  {
    projectCode: 'R',
    description: 'Recording',
    parent: null
  },
  {
    projectCode: 'RA',
    description: 'Record, fauna',
    parent: 'R'
  },
  {
    projectCode: 'RA0',
    description: 'Collect data, mammals',
    parent: 'RA'
  },
  {
    projectCode: 'RA00',
    description: 'Collect data, mammals, general',
    parent: 'RA0'
  },
  {
    projectCode: 'RA01',
    description: 'Collect data, mammals, natural event',
    parent: 'RA0'
  },
  {
    projectCode: 'RA02',
    description: 'Collect data, mammals, survey',
    parent: 'RA0'
  },
  {
    projectCode: 'RA03',
    description: 'Collect data, mammals, monitor',
    parent: 'RA0'
  },
  {
    projectCode: 'RA04',
    description: 'Collect data, mammals, surveillance / census',
    parent: 'RA0'
  },
  {
    projectCode: 'RA05',
    description: 'Collect data, mammals, research project',
    parent: 'RA0'
  },
  {
    projectCode: 'RA06',
    description: 'Collect data, mammals, list species',
    parent: 'RA0'
  },
  {
    projectCode: 'RA1',
    description: 'Collect data, birds',
    parent: 'RA'
  },
  {
    projectCode: 'RA10',
    description: 'Collect data, birds, general',
    parent: 'RA1'
  },
  {
    projectCode: 'RA11',
    description: 'Collect data, birds, natural event',
    parent: 'RA1'
  },
  {
    projectCode: 'RA12',
    description: 'Collect data, birds, survey',
    parent: 'RA1'
  },
  {
    projectCode: 'RA13',
    description: 'Collect data, birds, monitor',
    parent: 'RA1'
  },
  {
    projectCode: 'RA14',
    description: 'Collect data, birds, surveillance / census',
    parent: 'RA1'
  },
  {
    projectCode: 'RA15',
    description: 'Collect data, birds, research project',
    parent: 'RA1'
  },
  {
    projectCode: 'RA16',
    description: 'Collect data, birds, list species',
    parent: 'RA1'
  },
  {
    projectCode: 'RA2',
    description: 'Collect data, herptiles',
    parent: 'RA'
  },
  {
    projectCode: 'RA20',
    description: 'Collect data, herptiles, general',
    parent: 'RA2'
  },
  {
    projectCode: 'RA21',
    description: 'Collect data, herptiles, natural event',
    parent: 'RA2'
  },
  {
    projectCode: 'RA22',
    description: 'Collect data, herptiles, survey',
    parent: 'RA2'
  },
  {
    projectCode: 'RA23',
    description: 'Collect data, herptiles, monitor',
    parent: 'RA2'
  },
  {
    projectCode: 'RA24',
    description: 'Collect data, herptiles, surveillance / census',
    parent: 'RA2'
  },
  {
    projectCode: 'RA25',
    description: 'Collect data, herptiles, research project',
    parent: 'RA2'
  },
  {
    projectCode: 'RA26',
    description: 'Collect data, herptiles, list species',
    parent: 'RA2'
  },
  {
    projectCode: 'RA3',
    description: 'Collect data, fish',
    parent: 'RA'
  },
  {
    projectCode: 'RA30',
    description: 'Collect data, fish, general',
    parent: 'RA3'
  },
  {
    projectCode: 'RA31',
    description: 'Collect data, fish, natural event',
    parent: 'RA3'
  },
  {
    projectCode: 'RA32',
    description: 'Collect data, fish, survey',
    parent: 'RA3'
  },
  {
    projectCode: 'RA33',
    description: 'Collect data, fish, monitor',
    parent: 'RA3'
  },
  {
    projectCode: 'RA34',
    description: 'Collect data, fish, surveillance / census',
    parent: 'RA3'
  },
  {
    projectCode: 'RA35',
    description: 'Collect data, fish, research project',
    parent: 'RA3'
  },
  {
    projectCode: 'RA36',
    description: 'Collect data, fish, list species',
    parent: 'RA3'
  },
  {
    projectCode: 'RA4',
    description: 'Collect data, Lepidoptera',
    parent: 'RA'
  },
  {
    projectCode: 'RA40',
    description: 'Collect data, Lepidoptera, general',
    parent: 'RA4'
  },
  {
    projectCode: 'RA41',
    description: 'Collect data, Lepidoptera, natural event',
    parent: 'RA4'
  },
  {
    projectCode: 'RA42',
    description: 'Collect data, Lepidoptera, survey',
    parent: 'RA4'
  },
  {
    projectCode: 'RA43',
    description: 'Collect data, Lepidoptera, monitor',
    parent: 'RA4'
  },
  {
    projectCode: 'RA44',
    description: 'Collect data, Lepidoptera, surveillance / census',
    parent: 'RA4'
  },
  {
    projectCode: 'RA45',
    description: 'Collect data, Lepidoptera, research project',
    parent: 'RA4'
  },
  {
    projectCode: 'RA46',
    description: 'Collect data, Lepidoptera, list species',
    parent: 'RA4'
  },
  {
    projectCode: 'RA5',
    description: 'Collect data, Odonata',
    parent: 'RA'
  },
  {
    projectCode: 'RA50',
    description: 'Collect data, Odonata, general',
    parent: 'RA5'
  },
  {
    projectCode: 'RA51',
    description: 'Collect data, Odonata, natural event',
    parent: 'RA5'
  },
  {
    projectCode: 'RA52',
    description: 'Collect data, Odonata, survey',
    parent: 'RA5'
  },
  {
    projectCode: 'RA53',
    description: 'Collect data, Odonata, monitor',
    parent: 'RA5'
  },
  {
    projectCode: 'RA54',
    description: 'Collect data, Odonata, surveillance / census',
    parent: 'RA5'
  },
  {
    projectCode: 'RA55',
    description: 'Collect data, Odonata, research project',
    parent: 'RA5'
  },
  {
    projectCode: 'RA56',
    description: 'Collect data, Odonata, list species',
    parent: 'RA5'
  },
  {
    projectCode: 'RA6',
    description: 'Collect data, Orthoptera',
    parent: 'RA'
  },
  {
    projectCode: 'RA60',
    description: 'Collect data, Orthoptera, general',
    parent: 'RA6'
  },
  {
    projectCode: 'RA61',
    description: 'Collect data, Orthoptera, natural event',
    parent: 'RA6'
  },
  {
    projectCode: 'RA62',
    description: 'Collect data, Orthoptera, survey',
    parent: 'RA6'
  },
  {
    projectCode: 'RA63',
    description: 'Collect data, Orthoptera, monitor',
    parent: 'RA6'
  },
  {
    projectCode: 'RA64',
    description: 'Collect data, Orthoptera, surveillance / census',
    parent: 'RA6'
  },
  {
    projectCode: 'RA65',
    description: 'Collect data, Orthoptera, research project',
    parent: 'RA6'
  },
  {
    projectCode: 'RA66',
    description: 'Collect data, Orthoptera, list species',
    parent: 'RA6'
  },
  {
    projectCode: 'RA7',
    description: 'Collect data, other insects',
    parent: 'RA'
  },
  {
    projectCode: 'RA70',
    description: 'Collect data, other insects, general',
    parent: 'RA7'
  },
  {
    projectCode: 'RA71',
    description: 'Collect data, other insects, natural event',
    parent: 'RA7'
  },
  {
    projectCode: 'RA72',
    description: 'Collect data, other insects, survey',
    parent: 'RA7'
  },
  {
    projectCode: 'RA73',
    description: 'Collect data, other insects, monitor',
    parent: 'RA7'
  },
  {
    projectCode: 'RA74',
    description: 'Collect data, other insects, surveillance / census',
    parent: 'RA7'
  },
  {
    projectCode: 'RA75',
    description: 'Collect data, other insects, research project',
    parent: 'RA7'
  },
  {
    projectCode: 'RA76',
    description: 'Collect data, other insects, list species',
    parent: 'RA7'
  },
  {
    projectCode: 'RA8',
    description: 'Collect data, other invertebrates',
    parent: 'RA'
  },
  {
    projectCode: 'RA80',
    description: 'Collect data, other invertebrates, general',
    parent: 'RA8'
  },
  {
    projectCode: 'RA81',
    description: 'Collect data, other invertebrates, natural event',
    parent: 'RA8'
  },
  {
    projectCode: 'RA82',
    description: 'Collect data, other invertebrates, survey',
    parent: 'RA8'
  },
  {
    projectCode: 'RA83',
    description: 'Collect data, other invertebrates, monitor',
    parent: 'RA8'
  },
  {
    projectCode: 'RA84',
    description: 'Collect data, other invertebrates, surveillance / census',
    parent: 'RA8'
  },
  {
    projectCode: 'RA85',
    description: 'Collect data, other invertebrates, research project',
    parent: 'RA8'
  },
  {
    projectCode: 'RA86',
    description: 'Collect data, other invertebrates, list species',
    parent: 'RA8'
  },
  {
    projectCode: 'RA9',
    description: 'Collect data, fauna, general',
    parent: 'RA'
  },
  {
    projectCode: 'RA90',
    description: 'Collect data, fauna, general',
    parent: 'RA9'
  },
  {
    projectCode: 'RA91',
    description: 'Collect data, fauna, natural event',
    parent: 'RA9'
  },
  {
    projectCode: 'RA92',
    description: 'Collect data, fauna, survey',
    parent: 'RA9'
  },
  {
    projectCode: 'RA93',
    description: 'Collect data, fauna, monitor',
    parent: 'RA9'
  },
  {
    projectCode: 'RA94',
    description: 'Collect data, fauna, surveillance / census',
    parent: 'RA9'
  },
  {
    projectCode: 'RA95',
    description: 'Collect data, fauna, research project',
    parent: 'RA9'
  },
  {
    projectCode: 'RA96',
    description: 'Collect data, fauna, list species',
    parent: 'RA9'
  },
  {
    projectCode: 'RB',
    description: 'Record, biology general',
    parent: 'R'
  },
  {
    projectCode: 'RB0',
    description: 'Collect data, biological',
    parent: 'RB'
  },
  {
    projectCode: 'RB00',
    description: 'Collect data, biological, general',
    parent: 'RB0'
  },
  {
    projectCode: 'RB01',
    description: 'Collect data, biological, natural event',
    parent: 'RB0'
  },
  {
    projectCode: 'RB02',
    description: 'Collect data, biological, survey',
    parent: 'RB0'
  },
  {
    projectCode: 'RB03',
    description: 'Collect data, biological, monitor',
    parent: 'RB0'
  },
  {
    projectCode: 'RB04',
    description: 'Collect data, biological, surveillance / census',
    parent: 'RB0'
  },
  {
    projectCode: 'RB05',
    description: 'Collect data, biological, research project',
    parent: 'RB0'
  },
  {
    projectCode: 'RB06',
    description: 'Collect data, biological, list species',
    parent: 'RB0'
  },
  {
    projectCode: 'RB1',
    description: 'Collect data, palynological (pollen studies)',
    parent: 'RB'
  },
  {
    projectCode: 'RB10',
    description: 'Collect data, palynological, general',
    parent: 'RB1'
  },
  {
    projectCode: 'RB11',
    description: 'Collect data, palynological, natural event',
    parent: 'RB1'
  },
  {
    projectCode: 'RB12',
    description: 'Collect data, palynological, survey',
    parent: 'RB1'
  },
  {
    projectCode: 'RB13',
    description: 'Collect data, palynological, monitor',
    parent: 'RB1'
  },
  {
    projectCode: 'RB14',
    description: 'Collect data, palynological, surveillance / census',
    parent: 'RB1'
  },
  {
    projectCode: 'RB15',
    description: 'Collect data, palynological, research project',
    parent: 'RB1'
  },
  {
    projectCode: 'RB16',
    description: 'Collect data, palynological, list species',
    parent: 'RB1'
  },
  {
    projectCode: 'RC',
    description: 'Record cultural heritage',
    parent: 'R'
  },
  {
    projectCode: 'RC0+',
    description: 'Collect data, archaeological',
    parent: 'RC'
  },
  {
    projectCode: 'RC1+',
    description: 'Collect data, historic buildings',
    parent: 'RC'
  },
  {
    projectCode: 'RC2+',
    description: 'Collect data, industrial archaeology',
    parent: 'RC'
  },
  {
    projectCode: 'RC3+',
    description: 'Collect data, historical landscapes',
    parent: 'RC'
  },
  {
    projectCode: 'RC4+',
    description: 'Collect data, religious interest',
    parent: 'RC'
  },
  {
    projectCode: 'RD',
    description: 'Microplan Record Project codes (specialist)',
    parent: 'R'
  },
  {
    projectCode: 'RD00',
    description: 'Monitor eco-development success, general',
    parent: 'RD'
  },
  {
    projectCode: 'RD01',
    description: 'Monitor socio-economic factors',
    parent: 'RD'
  },
  {
    projectCode: 'RD02',
    description: 'Monitor illegal activities',
    parent: 'RD'
  },
  {
    projectCode: 'RD03',
    description: 'Monitor human population',
    parent: 'RD'
  },
  {
    projectCode: 'RD04',
    description: 'Monitor usage of natural resources',
    parent: 'RD'
  },
  {
    projectCode: 'RF',
    description: 'Record, vegetation',
    parent: 'R'
  },
  {
    projectCode: 'RF0',
    description: 'Collect data, vegetation',
    parent: 'RF'
  },
  {
    projectCode: 'RF00',
    description: 'Collect data, vegetation, general',
    parent: 'RF0'
  },
  {
    projectCode: 'RF01',
    description: 'Collect data, vegetation, natural event',
    parent: 'RF0'
  },
  {
    projectCode: 'RF02',
    description: 'Collect data, vegetation, survey',
    parent: 'RF0'
  },
  {
    projectCode: 'RF03',
    description: 'Collect data, vegetation, monitor',
    parent: 'RF0'
  },
  {
    projectCode: 'RF04',
    description: 'Collect data, vegetation, surveillance / census',
    parent: 'RF0'
  },
  {
    projectCode: 'RF05',
    description: 'Collect data, vegetation, research project',
    parent: 'RF0'
  },
  {
    projectCode: 'RF06',
    description: 'Collect data, vegetation, list species',
    parent: 'RF0'
  },
  {
    projectCode: 'RF1',
    description: 'Collect data, trees / shrubs',
    parent: 'RF'
  },
  {
    projectCode: 'RF10',
    description: 'Collect data, trees / shrubs, general',
    parent: 'RF1'
  },
  {
    projectCode: 'RF11',
    description: 'Collect data, trees / shrubs, natural event',
    parent: 'RF1'
  },
  {
    projectCode: 'RF12',
    description: 'Collect data, trees / shrubs, survey',
    parent: 'RF1'
  },
  {
    projectCode: 'RF13',
    description: 'Collect data, trees / shrubs, monitor',
    parent: 'RF1'
  },
  {
    projectCode: 'RF14',
    description: 'Collect data, trees / shrubs, surveillance / census',
    parent: 'RF1'
  },
  {
    projectCode: 'RF15',
    description: 'Collect data, trees / shrubs, research project',
    parent: 'RF1'
  },
  {
    projectCode: 'RF16',
    description: 'Collect data, trees / shrubs, list species',
    parent: 'RF1'
  },
  {
    projectCode: 'RF2',
    description: 'Collect data, other vascular plants',
    parent: 'RF'
  },
  {
    projectCode: 'RF20',
    description: 'Collect data, other vascular plants, general',
    parent: 'RF2'
  },
  {
    projectCode: 'RF21',
    description: 'Collect data, other vascular plants, natural event',
    parent: 'RF2'
  },
  {
    projectCode: 'RF22',
    description: 'Collect data, other vascular plants, survey',
    parent: 'RF2'
  },
  {
    projectCode: 'RF23',
    description: 'Collect data, other vascular plants, monitor',
    parent: 'RF2'
  },
  {
    projectCode: 'RF24',
    description: 'Collect data, other vascular plants, surveillance / census',
    parent: 'RF2'
  },
  {
    projectCode: 'RF25',
    description: 'Collect data, other vascular plants, research project',
    parent: 'RF2'
  },
  {
    projectCode: 'RF26',
    description: 'Collect data, other vascular plants, list species',
    parent: 'RF2'
  },
  {
    projectCode: 'RF3',
    description: 'Collect data, bryophytes',
    parent: 'RF'
  },
  {
    projectCode: 'RF30',
    description: 'Collect data, bryophytes, general',
    parent: 'RF3'
  },
  {
    projectCode: 'RF31',
    description: 'Collect data, bryophytes, natural event',
    parent: 'RF3'
  },
  {
    projectCode: 'RF32',
    description: 'Collect data, bryophytes, survey',
    parent: 'RF3'
  },
  {
    projectCode: 'RF33',
    description: 'Collect data, bryophytes, monitor',
    parent: 'RF3'
  },
  {
    projectCode: 'RF34',
    description: 'Collect data, bryophytes, surveillance / census',
    parent: 'RF3'
  },
  {
    projectCode: 'RF35',
    description: 'Collect data, bryophytes, research project',
    parent: 'RF3'
  },
  {
    projectCode: 'RF36',
    description: 'Collect data, bryophytes, list species',
    parent: 'RF3'
  },
  {
    projectCode: 'RF4',
    description: 'Collect data, algae',
    parent: 'RF'
  },
  {
    projectCode: 'RF40',
    description: 'Collect data, algae, general',
    parent: 'RF4'
  },
  {
    projectCode: 'RF41',
    description: 'Collect data, algae, natural event',
    parent: 'RF4'
  },
  {
    projectCode: 'RF42',
    description: 'Collect data, algae, survey',
    parent: 'RF4'
  },
  {
    projectCode: 'RF43',
    description: 'Collect data, algae, monitor',
    parent: 'RF4'
  },
  {
    projectCode: 'RF44',
    description: 'Collect data, algae, surveillance / census',
    parent: 'RF4'
  },
  {
    projectCode: 'RF45',
    description: 'Collect data, algae, research project',
    parent: 'RF4'
  },
  {
    projectCode: 'RF46',
    description: 'Collect data, algae, list species',
    parent: 'RF4'
  },
  {
    projectCode: 'RF5',
    description: 'Collect data, lichens',
    parent: 'RF'
  },
  {
    projectCode: 'RF50',
    description: 'Collect data, lichens, general',
    parent: 'RF5'
  },
  {
    projectCode: 'RF51',
    description: 'Collect data, lichens, natural event',
    parent: 'RF5'
  },
  {
    projectCode: 'RF52',
    description: 'Collect data, lichens, survey',
    parent: 'RF5'
  },
  {
    projectCode: 'RF53',
    description: 'Collect data, lichens, monitor',
    parent: 'RF5'
  },
  {
    projectCode: 'RF54',
    description: 'Collect data, lichens, surveillance / census',
    parent: 'RF5'
  },
  {
    projectCode: 'RF55',
    description: 'Collect data, lichens, research project',
    parent: 'RF5'
  },
  {
    projectCode: 'RF56',
    description: 'Collect data, lichens, list species',
    parent: 'RF5'
  },
  {
    projectCode: 'RF6',
    description: 'Collect data, fungi',
    parent: 'RF'
  },
  {
    projectCode: 'RF60',
    description: 'Collect data, fungi, general',
    parent: 'RF6'
  },
  {
    projectCode: 'RF61',
    description: 'Collect data, fungi, natural event',
    parent: 'RF6'
  },
  {
    projectCode: 'RF62',
    description: 'Collect data, fungi, survey',
    parent: 'RF6'
  },
  {
    projectCode: 'RF63',
    description: 'Collect data, fungi, monitor',
    parent: 'RF6'
  },
  {
    projectCode: 'RF64',
    description: 'Collect data, fungi, surveillance / census',
    parent: 'RF6'
  },
  {
    projectCode: 'RF65',
    description: 'Collect data, fungi, research project',
    parent: 'RF6'
  },
  {
    projectCode: 'RF66',
    description: 'Collect data, fungi, list species',
    parent: 'RF6'
  },
  {
    projectCode: 'RH',
    description: 'Record, human interaction',
    parent: 'R'
  },
  {
    projectCode: 'RH0',
    description: 'Collect data, human interaction',
    parent: 'RH'
  },
  {
    projectCode: 'RH00',
    description: 'Collect data, human interaction, general',
    parent: 'RH0'
  },
  {
    projectCode: 'RH01',
    description: 'Collect data, human interaction, survey',
    parent: 'RH0'
  },
  {
    projectCode: 'RH02',
    description: 'Collect data, human interaction, monitor',
    parent: 'RH0'
  },
  {
    projectCode: 'RH03',
    description: 'Collect data, human interaction, surveillance / census',
    parent: 'RH0'
  },
  {
    projectCode: 'RH04',
    description: 'Collect data, human interaction, research project',
    parent: 'RH0'
  },
  {
    projectCode: 'RH05',
    description: 'Collect data, human interaction, fires, unplanned',
    parent: 'RH0'
  },
  {
    projectCode: 'RH06',
    description: 'Collect data, human interaction, low flying aircraft',
    parent: 'RH0'
  },
  {
    projectCode: 'RH07',
    description: 'Collect data, human interaction, pollution',
    parent: 'RH0'
  },
  {
    projectCode: 'RH1',
    description: 'Collect data, past management',
    parent: 'RH'
  },
  {
    projectCode: 'RH1+',
    description: 'Collect data, past management, general',
    parent: 'RH1'
  },
  {
    projectCode: 'RH10',
    description: 'Collect data, land use history',
    parent: 'RH1'
  },
  {
    projectCode: 'RH11',
    description: 'Collect data, past conservation management',
    parent: 'RH1'
  },
  {
    projectCode: 'RH2',
    description: 'Collect data, archaeological (Replaced by RC0)',
    parent: 'RH'
  },
  {
    projectCode: 'RH21',
    description: 'Collect data, archaeological, general (Replaced by RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH22',
    description: 'Collect data, archaeological, survey (Replaced by RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH23',
    description: 'Collect data, archaeological, monitor (Replaced by RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH24',
    description: 'Collect data, archaeological, surveillance / census (See RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH25',
    description: 'Collect data, archaeological, research project (Replaced by RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH26',
    description: 'Collect data, archaeological, inventory (Replaced by RC0)',
    parent: 'RH2'
  },
  {
    projectCode: 'RH3',
    description: 'Collect data, public use',
    parent: 'RH'
  },
  {
    projectCode: 'RH3+',
    description: 'Collect data, public use, general',
    parent: 'RH3'
  },
  {
    projectCode: 'RH30',
    description: 'Collect data, public use, research',
    parent: 'RH3'
  },
  {
    projectCode: 'RH31',
    description: 'Collect data, public use, education',
    parent: 'RH3'
  },
  {
    projectCode: 'RH32',
    description: 'Collect data, public use, count educational groups',
    parent: 'RH3'
  },
  {
    projectCode: 'RH33',
    description: 'Collect data, public use, recreation',
    parent: 'RH3'
  },
  {
    projectCode: 'RH34',
    description: 'Collect data, public use, count visitors',
    parent: 'RH3'
  },
  {
    projectCode: 'RH35',
    description: 'Collect data, public use, trespass / theft / damage',
    parent: 'RH3'
  },
  {
    projectCode: 'RH36',
    description: 'Collect data, public use, unplanned / undesirable activities',
    parent: 'RH3'
  },
  {
    projectCode: 'RH4',
    description: 'Collect data, stakeholders',
    parent: 'RH'
  },
  {
    projectCode: 'RH4+',
    description: 'Collect data, stakeholders, general',
    parent: 'RH4'
  },
  {
    projectCode: 'RH40',
    description: 'Collect data, stakeholder analysis',
    parent: 'RH4'
  },
  {
    projectCode: 'RH41',
    description: 'Collect data, stakeholders activities',
    parent: 'RH4'
  },
  {
    projectCode: 'RH42',
    description: 'Collect data, stakeholders liaison',
    parent: 'RH4'
  },
  {
    projectCode: 'RH8',
    description: 'Collect data, current management',
    parent: 'RH'
  },
  {
    projectCode: 'RH8+',
    description: 'Collect data, current management',
    parent: 'RH8'
  },
  {
    projectCode: 'RH80',
    description: 'Collect data, current management, by others',
    parent: 'RH8'
  },
  {
    projectCode: 'RH9',
    description: 'Collect data, other activities',
    parent: 'RH'
  },
  {
    projectCode: 'RH9+',
    description: 'Collect data, other activities, general',
    parent: 'RH9'
  },
  {
    projectCode: 'RH90',
    description: 'Collect data, other activities, by others',
    parent: 'RH9'
  },
  {
    projectCode: 'RM',
    description: 'Record, marine',
    parent: 'R'
  },
  {
    projectCode: 'RM0',
    description: 'Collect data, benthic faunal communities',
    parent: 'RM'
  },
  {
    projectCode: 'RM0+',
    description: 'Collect data, benthic faunal communities, general',
    parent: 'RM0'
  },
  {
    projectCode: 'RM01',
    description: 'Collect data, benthic faunal communities, natural event',
    parent: 'RM0'
  },
  {
    projectCode: 'RM02',
    description: 'Collect data, benthic faunal communities, survey',
    parent: 'RM0'
  },
  {
    projectCode: 'RM03',
    description: 'Collect data, benthic faunal communities, monitor',
    parent: 'RM0'
  },
  {
    projectCode: 'RM04',
    description: 'Collect data, benthic faunal communities, surveillance / census',
    parent: 'RM0'
  },
  {
    projectCode: 'RM05',
    description: 'Collect data, benthic faunal communities, research project',
    parent: 'RM0'
  },
  {
    projectCode: 'RM06',
    description: 'Collect data, benthic faunal communities, list species',
    parent: 'RM0'
  },
  {
    projectCode: 'RM1',
    description: 'Collect data, Porifera',
    parent: 'RM'
  },
  {
    projectCode: 'RM1+',
    description: 'Collect data, Porifera, general',
    parent: 'RM1'
  },
  {
    projectCode: 'RM11',
    description: 'Collect data, Porifera, natural event',
    parent: 'RM1'
  },
  {
    projectCode: 'RM12',
    description: 'Collect data, Porifera, survey',
    parent: 'RM1'
  },
  {
    projectCode: 'RM13',
    description: 'Collect data, Porifera, monitor',
    parent: 'RM1'
  },
  {
    projectCode: 'RM14',
    description: 'Collect data, Porifera, surveillance / census',
    parent: 'RM1'
  },
  {
    projectCode: 'RM15',
    description: 'Collect data, Porifera, research project',
    parent: 'RM1'
  },
  {
    projectCode: 'RM16',
    description: 'Collect data, Porifera, list species',
    parent: 'RM1'
  },
  {
    projectCode: 'RM2',
    description: 'Collect data, Cnidaria',
    parent: 'RM'
  },
  {
    projectCode: 'RM2+',
    description: 'Collect data, Cnidaria, general',
    parent: 'RM2'
  },
  {
    projectCode: 'RM21',
    description: 'Collect data, Cnidaria, natural event',
    parent: 'RM2'
  },
  {
    projectCode: 'RM22',
    description: 'Collect data, Cnidaria, survey',
    parent: 'RM2'
  },
  {
    projectCode: 'RM23',
    description: 'Collect data, Cnidaria, monitor',
    parent: 'RM2'
  },
  {
    projectCode: 'RM24',
    description: 'Collect data, Cnidaria, surveillance / census',
    parent: 'RM2'
  },
  {
    projectCode: 'RM25',
    description: 'Collect data, Cnidaria, research project',
    parent: 'RM2'
  },
  {
    projectCode: 'RM26',
    description: 'Collect data, Cnidaria, list species',
    parent: 'RM2'
  },
  {
    projectCode: 'RM3',
    description: 'Collect data, Annelida',
    parent: 'RM'
  },
  {
    projectCode: 'RM3+',
    description: 'Collect data, Annelida, general',
    parent: 'RM3'
  },
  {
    projectCode: 'RM31',
    description: 'Collect data, Annelida, natural event',
    parent: 'RM3'
  },
  {
    projectCode: 'RM32',
    description: 'Collect data, Annelida, survey',
    parent: 'RM3'
  },
  {
    projectCode: 'RM33',
    description: 'Collect data, Annelida, monitor',
    parent: 'RM3'
  },
  {
    projectCode: 'RM34',
    description: 'Collect data, Annelida, surveillance / census',
    parent: 'RM3'
  },
  {
    projectCode: 'RM35',
    description: 'Collect data, Annelida, research project',
    parent: 'RM3'
  },
  {
    projectCode: 'RM36',
    description: 'Collect data, Annelida, list species',
    parent: 'RM3'
  },
  {
    projectCode: 'RM4',
    description: 'Collect data, Crustacea',
    parent: 'RM'
  },
  {
    projectCode: 'RM4+',
    description: 'Collect data, Crustacea, general',
    parent: 'RM4'
  },
  {
    projectCode: 'RM41',
    description: 'Collect data, Crustacea, natural event',
    parent: 'RM4'
  },
  {
    projectCode: 'RM42',
    description: 'Collect data, Crustacea, survey',
    parent: 'RM4'
  },
  {
    projectCode: 'RM43',
    description: 'Collect data, Crustacea, monitor',
    parent: 'RM4'
  },
  {
    projectCode: 'RM44',
    description: 'Collect data, Crustacea, surveillance / census',
    parent: 'RM4'
  },
  {
    projectCode: 'RM45',
    description: 'Collect data, Crustacea, research project',
    parent: 'RM4'
  },
  {
    projectCode: 'RM46',
    description: 'Collect data, Crustacea, list species',
    parent: 'RM4'
  },
  {
    projectCode: 'RM5',
    description: 'Collect data, Mollusca',
    parent: 'RM'
  },
  {
    projectCode: 'RM5+',
    description: 'Collect data, Mollusca, general',
    parent: 'RM5'
  },
  {
    projectCode: 'RM51',
    description: 'Collect data, Mollusca, natural event',
    parent: 'RM5'
  },
  {
    projectCode: 'RM52',
    description: 'Collect data, Mollusca, survey',
    parent: 'RM5'
  },
  {
    projectCode: 'RM53',
    description: 'Collect data, Mollusca, monitor',
    parent: 'RM5'
  },
  {
    projectCode: 'RM54',
    description: 'Collect data, Mollusca, surveillance / census',
    parent: 'RM5'
  },
  {
    projectCode: 'RM55',
    description: 'Collect data, Mollusca, research project',
    parent: 'RM5'
  },
  {
    projectCode: 'RM56',
    description: 'Collect data, Mollusca, list species',
    parent: 'RM5'
  },
  {
    projectCode: 'RM6',
    description: 'Collect data, Bryozoa',
    parent: 'RM'
  },
  {
    projectCode: 'RM6+',
    description: 'Collect data, Bryozoa, general',
    parent: 'RM6'
  },
  {
    projectCode: 'RM61',
    description: 'Collect data, Bryozoa, natural event',
    parent: 'RM6'
  },
  {
    projectCode: 'RM62',
    description: 'Collect data, Bryozoa, survey',
    parent: 'RM6'
  },
  {
    projectCode: 'RM63',
    description: 'Collect data, Bryozoa, monitor',
    parent: 'RM6'
  },
  {
    projectCode: 'RM64',
    description: 'Collect data, Bryozoa, surveillance / census',
    parent: 'RM6'
  },
  {
    projectCode: 'RM65',
    description: 'Collect data, Bryozoa, research project',
    parent: 'RM6'
  },
  {
    projectCode: 'RM66',
    description: 'Collect data, Bryozoa, list species',
    parent: 'RM6'
  },
  {
    projectCode: 'RM7',
    description: 'Collect data, Echinodermata',
    parent: 'RM'
  },
  {
    projectCode: 'RM7+',
    description: 'Collect data, Echinodermata, general',
    parent: 'RM7'
  },
  {
    projectCode: 'RM71',
    description: 'Collect data, Echinodermata, natural event',
    parent: 'RM7'
  },
  {
    projectCode: 'RM72',
    description: 'Collect data, Echinodermata, survey',
    parent: 'RM7'
  },
  {
    projectCode: 'RM73',
    description: 'Collect data, Echinodermata, monitor',
    parent: 'RM7'
  },
  {
    projectCode: 'RM74',
    description: 'Collect data, Echinodermata, surveillance / census',
    parent: 'RM7'
  },
  {
    projectCode: 'RM75',
    description: 'Collect data, Echinodermata, research project',
    parent: 'RM7'
  },
  {
    projectCode: 'RM76',
    description: 'Collect data, Echinodermata, list species',
    parent: 'RM7'
  },
  {
    projectCode: 'RM8',
    description: 'Collect data, Tunicata',
    parent: 'RM'
  },
  {
    projectCode: 'RM8+',
    description: 'Collect data, Tunicata, general',
    parent: 'RM8'
  },
  {
    projectCode: 'RM81',
    description: 'Collect data, Tunicata, natural event',
    parent: 'RM8'
  },
  {
    projectCode: 'RM82',
    description: 'Collect data, Tunicata, survey',
    parent: 'RM8'
  },
  {
    projectCode: 'RM83',
    description: 'Collect data, Tunicata, monitor',
    parent: 'RM8'
  },
  {
    projectCode: 'RM84',
    description: 'Collect data, Tunicata, surveillance / census',
    parent: 'RM8'
  },
  {
    projectCode: 'RM85',
    description: 'Collect data, Tunicata, research project',
    parent: 'RM8'
  },
  {
    projectCode: 'RM86',
    description: 'Collect data, Tunicata, list species',
    parent: 'RM8'
  },
  {
    projectCode: 'RM9',
    description: 'Collect data, marine fauna other',
    parent: 'RM'
  },
  {
    projectCode: 'RM9+',
    description: 'Collect data, marine fauna other, general',
    parent: 'RM9'
  },
  {
    projectCode: 'RM91',
    description: 'Collect data, marine fauna other, natural event',
    parent: 'RM9'
  },
  {
    projectCode: 'RM92',
    description: 'Collect data, marine fauna other, survey',
    parent: 'RM9'
  },
  {
    projectCode: 'RM93',
    description: 'Collect data, marine fauna other, monitor',
    parent: 'RM9'
  },
  {
    projectCode: 'RM94',
    description: 'Collect data, marine fauna other, surveillance / census',
    parent: 'RM9'
  },
  {
    projectCode: 'RM95',
    description: 'Collect data, marine fauna other, research project',
    parent: 'RM9'
  },
  {
    projectCode: 'RM96',
    description: 'Collect data, marine fauna other, list species',
    parent: 'RM9'
  },
  {
    projectCode: 'RP',
    description: 'Record, physical environment',
    parent: 'R'
  },
  {
    projectCode: 'RP0',
    description: 'Collect data, climatological',
    parent: 'RP'
  },
  {
    projectCode: 'RP00',
    description: 'Collect data, climatological, general',
    parent: 'RP0'
  },
  {
    projectCode: 'RP01',
    description: 'Collect data, climatological, natural event',
    parent: 'RP0'
  },
  {
    projectCode: 'RP02',
    description: 'Collect data, climatological, survey',
    parent: 'RP0'
  },
  {
    projectCode: 'RP03',
    description: 'Collect data, climatological, monitor',
    parent: 'RP0'
  },
  {
    projectCode: 'RP04',
    description: 'Collect data, climatological, surveillance / census',
    parent: 'RP0'
  },
  {
    projectCode: 'RP05',
    description: 'Collect data, climatological, research project',
    parent: 'RP0'
  },
  {
    projectCode: 'RP1',
    description: 'Collect data, hydrological',
    parent: 'RP'
  },
  {
    projectCode: 'RP10',
    description: 'Collect data, hydrological, general',
    parent: 'RP1'
  },
  {
    projectCode: 'RP11',
    description: 'Collect data, hydrological, natural event',
    parent: 'RP1'
  },
  {
    projectCode: 'RP12',
    description: 'Collect data, hydrological, survey',
    parent: 'RP1'
  },
  {
    projectCode: 'RP13',
    description: 'Collect data, hydrological, monitor',
    parent: 'RP1'
  },
  {
    projectCode: 'RP14',
    description: 'Collect data, hydrological, surveillance / census',
    parent: 'RP1'
  },
  {
    projectCode: 'RP15',
    description: 'Collect data, hydrological, research project',
    parent: 'RP1'
  },
  {
    projectCode: 'RP2',
    description: 'Collect data, geological',
    parent: 'RP'
  },
  {
    projectCode: 'RP20',
    description: 'Collect data, geological, general',
    parent: 'RP2'
  },
  {
    projectCode: 'RP21',
    description: 'Collect data, geological, natural event',
    parent: 'RP2'
  },
  {
    projectCode: 'RP22',
    description: 'Collect data, geological, survey',
    parent: 'RP2'
  },
  {
    projectCode: 'RP23',
    description: 'Collect data, geological, monitor',
    parent: 'RP2'
  },
  {
    projectCode: 'RP24',
    description: 'Collect data, geological, surveillance / census',
    parent: 'RP2'
  },
  {
    projectCode: 'RP25',
    description: 'Collect data, geological, research project',
    parent: 'RP2'
  },
  {
    projectCode: 'RP3',
    description: 'Collect data, geomorphological',
    parent: 'RP'
  },
  {
    projectCode: 'RP30',
    description: 'Collect data, geomorphological, general',
    parent: 'RP3'
  },
  {
    projectCode: 'RP31',
    description: 'Collect data, geomorphological, natural event',
    parent: 'RP3'
  },
  {
    projectCode: 'RP32',
    description: 'Collect data, geomorphological, survey',
    parent: 'RP3'
  },
  {
    projectCode: 'RP33',
    description: 'Collect data, geomorphological, monitor',
    parent: 'RP3'
  },
  {
    projectCode: 'RP34',
    description: 'Collect data, geomorphological, surveillance / census',
    parent: 'RP3'
  },
  {
    projectCode: 'RP35',
    description: 'Collect data, geomorphological, research project',
    parent: 'RP3'
  },
  {
    projectCode: 'RP4',
    description: 'Collect data, pedological',
    parent: 'RP'
  },
  {
    projectCode: 'RP40',
    description: 'Collect data, pedological, general',
    parent: 'RP4'
  },
  {
    projectCode: 'RP41',
    description: 'Collect data, pedological, natural event',
    parent: 'RP4'
  },
  {
    projectCode: 'RP42',
    description: 'Collect data, pedological, survey',
    parent: 'RP4'
  },
  {
    projectCode: 'RP43',
    description: 'Collect data, pedological, monitor',
    parent: 'RP4'
  },
  {
    projectCode: 'RP44',
    description: 'Collect data, pedological, surveillance / census',
    parent: 'RP4'
  },
  {
    projectCode: 'RP45',
    description: 'Collect data, pedological, research project',
    parent: 'RP4'
  },
  {
    projectCode: 'RP5',
    description: 'Collect data, landscape',
    parent: 'RP'
  },
  {
    projectCode: 'RP50',
    description: 'Collect data, landscape, general',
    parent: 'RP5'
  },
  {
    projectCode: 'RP51',
    description: 'Collect data, landscape, natural event',
    parent: 'RP5'
  },
  {
    projectCode: 'RP52',
    description: 'Collect data, landscape, survey',
    parent: 'RP5'
  },
  {
    projectCode: 'RP53',
    description: 'Collect data, landscape, monitor',
    parent: 'RP5'
  },
  {
    projectCode: 'RP54',
    description: 'Collect data, landscape, surveillance / census',
    parent: 'RP5'
  },
  {
    projectCode: 'RP55',
    description: 'Collect data, landscape, research project',
    parent: 'RP5'
  },
  {
    projectCode: 'RP6',
    description: 'Collect data, oceanographic',
    parent: 'RP'
  },
  {
    projectCode: 'RP60',
    description: 'Collect data, oceanographic, general',
    parent: 'RP6'
  },
  {
    projectCode: 'RP61',
    description: 'Collect data, oceanographic, natural event',
    parent: 'RP6'
  },
  {
    projectCode: 'RP62',
    description: 'Collect data, oceanographic, survey',
    parent: 'RP6'
  },
  {
    projectCode: 'RP63',
    description: 'Collect data, oceanographic, monitor',
    parent: 'RP6'
  },
  {
    projectCode: 'RP64',
    description: 'Collect data, oceanographic, surveillance / census',
    parent: 'RP6'
  },
  {
    projectCode: 'RP65',
    description: 'Collect data, oceanographic, research project',
    parent: 'RP6'
  },
  {
    projectCode: 'RV',
    description: 'Record, archive - general, photos, maps etc.',
    parent: 'R'
  },
  {
    projectCode: 'RV0',
    description: 'List / collate documents and datasets',
    parent: 'RV'
  },
  {
    projectCode: 'RV0+',
    description: 'Collate documents and datasets, general',
    parent: 'RV0'
  },
  {
    projectCode: 'RV00',
    description: 'Collate documents, published and unpublished',
    parent: 'RV0'
  },
  {
    projectCode: 'RV01',
    description: 'Collate / create digital datasets',
    parent: 'RV0'
  },
  {
    projectCode: 'RV1',
    description: 'List / collate photographs',
    parent: 'RV'
  },
  {
    projectCode: 'RV10',
    description: 'List / collate photographs, general',
    parent: 'RV1'
  },
  {
    projectCode: 'RV20',
    description: 'List / collate / commission aerial photographs',
    parent: 'RV1'
  },
  {
    projectCode: 'RV3',
    description: 'List / collate maps',
    parent: 'RV'
  },
  {
    projectCode: 'RV30',
    description: 'List / collate maps, general',
    parent: 'RV3'
  },
  {
    projectCode: 'RV40',
    description: 'Prepare / update site maps',
    parent: 'RV3'
  },
  {
    projectCode: 'RV50',
    description: 'List / collate archival records',
    parent: 'RV0'
  },
  {
    projectCode: 'RV51',
    description: 'Collate media references',
    parent: 'RV0'
  },
  {
    projectCode: 'RV60',
    description: 'List / collate remote sensing data',
    parent: 'RV1'
  },
  {
    projectCode: 'RV70',
    description: 'Create / manage GIS data',
    parent: 'RV3'
  },
  {
    projectCode: 'AS0',
    description: 'Protect site',
    parent: 'AS'
  },
  {
    projectCode: 'AA0+',
    description: 'Site Safeguard Strategy',
    parent: 'AA'
  },
  {
    projectCode: 'AL0+',
    description: 'Land Agent / Estate Terrier issues',
    parent: 'AL'
  },
  {
    projectCode: 'AR0+',
    description: 'Prepare report, annual reports',
    parent: 'AR'
  },
  {
    projectCode: 'MH75',
    description: 'Manage habitat, coastal, by non-intervention',
    parent: 'MH7'
  },
  {
    projectCode: 'MH8+',
    description: 'Manage habitat, rock, general',
    parent: 'MH8'
  },
  {
    projectCode: 'MP0+',
    description: 'Patrol, general',
    parent: 'MP'
  },
  {
    projectCode: 'MS01',
    description: 'Manage species, other vascular plant',
    parent: 'MS'
  },
  {
    projectCode: 'RV11',
    description: 'Fixed Point Photography',
    parent: 'RV1'
  },
  {
    projectCode: 'AI0+',
    description: 'Safety Inspections',
    parent: 'AI'
  },
  {
    projectCode: 'MI01',
    description: 'Guided Walks',
    parent: 'MI'
  }
];
