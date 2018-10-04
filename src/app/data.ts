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

export const projectCodes = [
  {
    'projectcode': 'A',
    'description': 'Administration',
    'parent': 'NULL'
  },
  {
    'projectcode': 'AA',
    'description': 'Site acquisition / declaration',
    'parent': 'A'
  },
  {
    'projectcode': 'AA++',
    'description': 'Site acquisition / declaration, general',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA00',
    'description': 'Acquire site, by purchase / lease / agreement',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA10',
    'description': 'Acquire site, extension, by purchase / lease / agreement',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA20',
    'description': 'Improve protection, by e.g. purchase of shooting rights',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA30',
    'description': 'Declare site',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA40',
    'description': 'De-declare site',
    'parent': 'AA'
  },
  {
    'projectcode': 'AA50',
    'description': 'Update information, owner / occupier details',
    'parent': 'AA'
  },
  {
    'projectcode': 'AE',
    'description': 'Employ staff',
    'parent': 'A'
  },
  {
    'projectcode': 'AE00',
    'description': 'Employ staff, general',
    'parent': 'AE'
  },
  {
    'projectcode': 'AE10',
    'description': 'Employ staff, staff welfare',
    'parent': 'AE'
  },
  {
    'projectcode': 'AF',
    'description': 'Financial planning and recording',
    'parent': 'A'
  },
  {
    'projectcode': 'AF00',
    'description': 'Finance, general',
    'parent': 'AF'
  },
  {
    'projectcode': 'AF01',
    'description': 'Grant applications',
    'parent': 'AF'
  },
  {
    'projectcode': 'AF02',
    'description': 'Fund raising and donations',
    'parent': 'AF'
  },
  {
    'projectcode': 'AI',
    'description': 'Inspections and audits',
    'parent': 'A'
  },
  {
    'projectcode': 'AI++',
    'description': 'Inspections and audits, general',
    'parent': 'AI'
  },
  {
    'projectcode': 'AI00',
    'description': 'Implement inspection, monitoring site integrity',
    'parent': 'AI'
  },
  {
    'projectcode': 'AI10',
    'description': 'Implement inspection, site equipment',
    'parent': 'AI'
  },
  {
    'projectcode': 'AI20',
    'description': 'Implement inspection, site buildings',
    'parent': 'AI'
  },
  {
    'projectcode': 'AI30',
    'description': 'Implement inspection, site safety',
    'parent': 'AI'
  },
  {
    'projectcode': 'AI40',
    'description': 'Implement inspection, other',
    'parent': 'AI'
  },
  {
    'projectcode': 'AL',
    'description': 'Legal matters and payments',
    'parent': 'A'
  },
  {
    'projectcode': 'AL++',
    'description': 'Legal matters and payments, general',
    'parent': 'AL'
  },
  {
    'projectcode': 'AL00',
    'description': 'Maintain holding, legal, by e.g. renewing lease / agreement / tenancy',
    'parent': 'AL'
  },
  {
    'projectcode': 'AL10',
    'description': 'Safeguard title, legal, by e.g. closing site / road one day per year',
    'parent': 'AL'
  },
  {
    'projectcode': 'AL20',
    'description': 'Maintain holding, legal, by making / receiving payments',
    'parent': 'AL'
  },
  {
    'projectcode': 'AL30',
    'description': 'Protect site, legal requirements, by convening annual meeting',
    'parent': 'AL'
  },
  {
    'projectcode': 'AL40',
    'description': 'Prepare / revise policy & legislation',
    'parent': 'AL'
  },
  {
    'projectcode': 'AN',
    'description': 'Site designation',
    'parent': 'A'
  },
  {
    'projectcode': 'AN++',
    'description': 'Site designation, general',
    'parent': 'AN'
  },
  {
    'projectcode': 'AN00',
    'description': 'Classify site',
    'parent': 'AN'
  },
  {
    'projectcode': 'AN10',
    'description': 'Notify site',
    'parent': 'AN'
  },
  {
    'projectcode': 'AN20',
    'description': 'Renotify site',
    'parent': 'AN'
  },
  {
    'projectcode': 'AN30',
    'description': 'Denotify site',
    'parent': 'AN'
  },
  {
    'projectcode': 'AN40',
    'description': 'Register site',
    'parent': 'AN'
  },
  {
    'projectcode': 'AP',
    'description': 'Planning, plan preparation and revision',
    'parent': 'A'
  },
  {
    'projectcode': 'AP++',
    'description': 'Planning, plan preparation and revision, general',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP00',
    'description': 'Prepare / revise legal site description',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP10',
    'description': 'Prepare / revise work programme',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP20',
    'description': 'Prepare / revise plan, management plans',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP21',
    'description': 'Prepare / revise plan, strategic planning',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP22',
    'description': 'Prepare / revise plan, major projects',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP23',
    'description': 'Prepare / revise plan, sector plans',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP30',
    'description': 'Prepare / revise plan, fire protection / control',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP40',
    'description': 'Prepare / revise plan, emergency procedure',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP50',
    'description': 'Prepare / revise plan, safety',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP60',
    'description': 'Prepare plan, annual work',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP70',
    'description': 'Convene meeting, Annual Programme Review',
    'parent': 'AP'
  },
  {
    'projectcode': 'AP80',
    'description': 'Convene meeting, Site Management Committee / advisory group',
    'parent': 'AP'
  },
  {
    'projectcode': 'AR',
    'description': 'Reports and general correspondence',
    'parent': 'A'
  },
  {
    'projectcode': 'AR++',
    'description': 'Reports and general correspondence, general',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR00',
    'description': 'Prepare report, project recording',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR01',
    'description': 'Prepare report, project review, new projects',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR10',
    'description': 'Prepare report, incident, e.g. fire / accident',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR20',
    'description': 'Prepare report, annual progress',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR30',
    'description': 'Prepare correspondence, general',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR40',
    'description': 'Record administrative details, e.g. staff appointments / visits',
    'parent': 'AR'
  },
  {
    'projectcode': 'AR60',
    'description': 'Prepare report, other',
    'parent': 'AR'
  },
  {
    'projectcode': 'AS',
    'description': 'Site and species safeguard, law enforcement & admin.',
    'parent': 'A'
  },
  {
    'projectcode': 'AS++',
    'description': 'Site and species safeguard, law enforcement & admin, general',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS00',
    'description': 'Protect site, legal action',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS10',
    'description': 'Protect site, visitor permit system',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS20',
    'description': 'Protect site / species, activity permit system',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS30',
    'description': 'Protect site, by preparing evidence',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS40',
    'description': 'Protect site, by prosecution',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS50',
    'description': 'Protect species, by prosecution',
    'parent': 'AS'
  },
  {
    'projectcode': 'AS60',
    'description': 'Protect species, by control of harvesting',
    'parent': 'AS'
  },
  {
    'projectcode': 'AT',
    'description': 'Training and management',
    'parent': 'A'
  },
  {
    'projectcode': 'AT++',
    'description': 'Training and management, general',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT00',
    'description': 'Train staff, use of site planning system',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT10',
    'description': 'Train staff, management techniques',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT20',
    'description': 'Train staff, use of machinery / equipment',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT30',
    'description': 'Train staff, other',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT40',
    'description': 'Liaise / supervise staff / contractors',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT50',
    'description': 'Liaise / supervise volunteers',
    'parent': 'AT'
  },
  {
    'projectcode': 'AT60',
    'description': 'Liaise / supervise voluntary working groups',
    'parent': 'AT'
  },
  {
    'projectcode': 'M',
    'description': 'Management',
    'parent': 'NULL'
  },
  {
    'projectcode': 'MA',
    'description': 'Manage other land',
    'parent': 'M'
  },
  {
    'projectcode': 'MA0',
    'description': 'Manage agricultural land',
    'parent': 'MA'
  },
  {
    'projectcode': 'MA0+',
    'description': 'Manage agricultural land, general',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA00',
    'description': 'Manage agricultural land, by planting / sowing / propogating',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA01',
    'description': 'Manage agricultural land, by mowing / harvesting / selective cutting',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA02',
    'description': 'Manage agricultural land, by weed control / spraying',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA03',
    'description': 'Manage agricultural land, by pest control',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA04',
    'description': 'Manage agricultural land, by felling / cutting / pruning / clearing',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA05',
    'description': 'Manage agricultural land, by path maintenance',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA06',
    'description': 'Manage agricultural land, artificial, by fertilising',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA07',
    'description': 'Manage agricultural land, by ploughing',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA09',
    'description': 'Manage agricultural land, by other activities',
    'parent': 'MA0'
  },
  {
    'projectcode': 'MA1+',
    'description': 'Manage horticulture',
    'parent': 'MA'
  },
  {
    'projectcode': 'MA2+',
    'description': 'Manage urban park',
    'parent': 'MA'
  },
  {
    'projectcode': 'MA3+',
    'description': 'Manage formal gardens',
    'parent': 'MA'
  },
  {
    'projectcode': 'MB',
    'description': 'Manage habitat, hedgerows',
    'parent': 'M'
  },
  {
    'projectcode': 'MB00',
    'description': 'Manage habitat, hedgerows, general',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB01',
    'description': 'Manage habitat, hedgerows, by providing exclosures',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB02',
    'description': 'Manage habitat, hedgerows, by planting / sowing / propagating',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB03',
    'description': 'Manage habitat, hedgerows, by cutting / trimming',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB04',
    'description': 'Manage habitat, hedgerows, by coppicing',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB05',
    'description': 'Manage habitat, hedgerows, by laying',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB06',
    'description': 'Manage habitat, hedgerows, by controlling undesirable species',
    'parent': 'MB'
  },
  {
    'projectcode': 'MB09',
    'description': 'Manage habitat, hedgerows, by other activities',
    'parent': 'MB'
  },
  {
    'projectcode': 'MC',
    'description': 'Manage cultural features',
    'parent': 'M'
  },
  {
    'projectcode': 'MC0',
    'description': 'Manage cultural features, earthwork',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC0+',
    'description': 'Manage cultural features, earthwork, general',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC00',
    'description': 'Manage cultural features, earthwork, by controlling scrub / sapling',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC01',
    'description': 'Manage cultural features, earthwork, by controlling grazing  stock',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC02',
    'description': 'Manage cultural features, earthwork, by spraying',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC03',
    'description': 'Manage cultural features, earthwork, by mowing',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC04',
    'description': 'Manage cultural features, earthwork, by felling / cutting',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC05',
    'description': 'Manage cultural features, earthwork, by controlling cultivation',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC06',
    'description': 'Manage cultural features, earthwork, by excavation',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC09',
    'description': 'Manage cultural features, earthwork, by other activities',
    'parent': 'MC0'
  },
  {
    'projectcode': 'MC1',
    'description': 'Manage cultural features, stonework',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC1+',
    'description': 'Manage cultural features, stonework, general',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC10',
    'description': 'Manage cultural features, stonework, by controlling scrub / sapling',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC11',
    'description': 'Manage cultural features, stonework, by controlling grazing / stock',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC12',
    'description': 'Manage cultural features, stonework, by spraying',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC13',
    'description': 'Manage cultural features, stonework, by mowing',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC14',
    'description': 'Manage cultural features, stonework, by felling / cutting',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC15',
    'description': 'Manage cultural features, stonework, by controlling cultivation',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC16',
    'description': 'Manage cultural features, stonework, by excavation',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC17',
    'description': 'Manage cultural features, stonework, by repairing stonework',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC19',
    'description': 'Manage cultural features, stonework, by other activities',
    'parent': 'MC1'
  },
  {
    'projectcode': 'MC2',
    'description': 'Manage cultural features, timber structure',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC2+',
    'description': 'Manage cultural features, timber structure, general',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC20',
    'description': 'Manage cultural features, timber structure, control scrub / sapling',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC21',
    'description': 'Manage cultural features, timber structure, control grazing / stock',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC22',
    'description': 'Manage cultural features, timber structure, by spraying',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC23',
    'description': 'Manage cultural features, timber structure, by mowing',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC24',
    'description': 'Manage cultural features, timber structure, by felling / cutting',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC25',
    'description': 'Manage cultural features, timber structure, control cultivation',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC26',
    'description': 'Manage cultural features, timber structure, by excavation',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC27',
    'description': 'Manage cultural features, timber structure, by treating timber',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC28',
    'description': 'Manage cultural features, timber structure, by repairing timber',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC29',
    'description': 'Manage cultural features, timber structure, by other activities',
    'parent': 'MC2'
  },
  {
    'projectcode': 'MC3',
    'description': 'Manage cultural features, buried feature',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC3+',
    'description': 'Manage cultural features, buried feature, general',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC30',
    'description': 'Manage cultural features, buried feature, by controlling scrub/sapling',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC31',
    'description': 'Manage cultural features, buried feature, control grazing / stock',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC32',
    'description': 'Manage cultural features, buried feature, by spraying',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC33',
    'description': 'Manage cultural features, buried feature, by mowing',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC34',
    'description': 'Manage cultural features, buried feature, by felling / cutting',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC35',
    'description': 'Manage cultural features, buried feature, by controlling cultivation',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC36',
    'description': 'Manage cultural features, buried feature, by excavation',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC37',
    'description': 'Manage cultural features, buried feature, by repairing surface erosion',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC39',
    'description': 'Manage cultural features, buried feature, by other activities',
    'parent': 'MC3'
  },
  {
    'projectcode': 'MC4',
    'description': 'Manage cultural features, portable antiquities',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC4+',
    'description': 'Manage cultural features, portable antiquities, general',
    'parent': 'MC4'
  },
  {
    'projectcode': 'MC40',
    'description': 'Manage cultural features, portable antiquities, by conserving',
    'parent': 'MC4'
  },
  {
    'projectcode': 'MC41',
    'description': 'Manage cultural features, portable antiquities, by displaying',
    'parent': 'MC4'
  },
  {
    'projectcode': 'MC42',
    'description': 'Manage cultural features, portable antiquities, by disposing',
    'parent': 'MC4'
  },
  {
    'projectcode': 'MC49',
    'description': 'Manage cultural features, portable antiquities, by other activities',
    'parent': 'MC4'
  },
  {
    'projectcode': 'MC5',
    'description': 'Manage cultural features, historic buildings',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC5+',
    'description': 'Manage cultural features, historic buildings, general',
    'parent': 'MC5'
  },
  {
    'projectcode': 'MC50',
    'description': 'Manage cultural features, historic building structure',
    'parent': 'MC5'
  },
  {
    'projectcode': 'MC51',
    'description': 'Manage cultural features, historic building content',
    'parent': 'MC5'
  },
  {
    'projectcode': 'MC6+',
    'description': 'Manage cultural features, archaeological, general',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC7+',
    'description': 'Manage cultural features, industrial archaeological',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC8+',
    'description': 'Manage cultural features, historical landscape',
    'parent': 'MC'
  },
  {
    'projectcode': 'MC9+',
    'description': 'Manage cultural features, religious interest',
    'parent': 'MC'
  },
  {
    'projectcode': 'MD',
    'description': 'Microplan management project codes (specialist)',
    'parent': 'M'
  },
  {
    'projectcode': 'MD0',
    'description': 'Agriculture',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD00',
    'description': 'Improve Agriculture, general',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD01',
    'description': 'Develop / maintain livestock productivity',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD02',
    'description': 'Develop / maintain crop productivity',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD03',
    'description': 'Provide / improve / develop livestock welfare facility',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD04',
    'description': 'Provide / develop livestock breeding facility',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD05',
    'description': 'Provide / improve irrigation facility',
    'parent': 'MD0'
  },
  {
    'projectcode': 'MD1',
    'description': 'Forestry',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD10',
    'description': 'Develop / maintain silvicultural activities, general',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD11',
    'description': 'Develop / maintain fuelwood sources',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD12',
    'description': 'Develop / maintain timber sources',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD13',
    'description': 'Develop / maintain tree fodder sources',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD14',
    'description': 'Develop / maintain Agroforestry systems',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD15',
    'description': 'Develop / maintain sylvo-pastoral systems',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD16',
    'description': 'Develop plant nursery facilities',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD17',
    'description': 'Provide tree seedlings',
    'parent': 'MD1'
  },
  {
    'projectcode': 'MD2',
    'description': 'Soil and Water conservation',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD20',
    'description': 'Soil and water conservation, general',
    'parent': 'MD2'
  },
  {
    'projectcode': 'MD21',
    'description': 'Construct soil / water conservation structures',
    'parent': 'MD2'
  },
  {
    'projectcode': 'MD22',
    'description': 'Plant / maintain trees / other vegetation',
    'parent': 'MD2'
  },
  {
    'projectcode': 'MD23',
    'description': 'Restore / protect vegetation',
    'parent': 'MD2'
  },
  {
    'projectcode': 'MD3',
    'description': 'Agricultural infrastructure',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD30',
    'description': 'Develop / maintain agricultural infrastructure',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD31',
    'description': 'Provide / maintain livestock control structures',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD32',
    'description': 'Provide / maintain other agricultural structures',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD33',
    'description': 'Provide agricultural support facilities',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD34',
    'description': 'Provide / maintain access roads',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD35',
    'description': 'Provide / maintain irrigation facilities',
    'parent': 'MD3'
  },
  {
    'projectcode': 'MD4',
    'description': 'Social infrastructure',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD40',
    'description': 'Provide / maintain village infrastructure',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD41',
    'description': 'Provide / improve medical facilities',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD42',
    'description': 'Provide / improve social / cultural facilities',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD43',
    'description': 'Provide alternative energy sources',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD44',
    'description': 'Improve efficiency, existing energy sources',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD45',
    'description': 'Provide / improve education facilities',
    'parent': 'MD4'
  },
  {
    'projectcode': 'MD5',
    'description': 'Employment',
    'parent': 'MD'
  },
  {
    'projectcode': 'MD50',
    'description': 'Develop alternative employment',
    'parent': 'MD5'
  },
  {
    'projectcode': 'ME',
    'description': 'Manage site infrastructure',
    'parent': 'M'
  },
  {
    'projectcode': 'ME0',
    'description': 'General site infrastructure',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME00',
    'description': 'Site infrastructure, general',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME01',
    'description': 'Boundary structures',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME02',
    'description': 'Other structures',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME03',
    'description': 'Remove structures',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME04',
    'description': 'Remove rubbish / maintain litter bins',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME05',
    'description': 'Provide / maintain picnic tables',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME06',
    'description': 'Erect/maintain signs/interpretation boards',
    'parent': 'ME0'
  },
  {
    'projectcode': 'ME1',
    'description': 'Site buildings',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME10',
    'description': 'Site buildings, general',
    'parent': 'ME1'
  },
  {
    'projectcode': 'ME11',
    'description': 'Site buildings, construct',
    'parent': 'ME1'
  },
  {
    'projectcode': 'ME12',
    'description': 'Site buildings, maintain / improve',
    'parent': 'ME1'
  },
  {
    'projectcode': 'ME14',
    'description': 'Site buildings, maintain / improve toilets',
    'parent': 'ME1'
  },
  {
    'projectcode': 'ME15',
    'description': 'Site buildings, maintain / improve visitor centre',
    'parent': 'ME1'
  },
  {
    'projectcode': 'ME2',
    'description': 'Legal / Emergency operations',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME2+',
    'description': 'Legal / Emergency operations',
    'parent': 'ME2'
  },
  {
    'projectcode': 'ME20',
    'description': 'Comply with legal obligations',
    'parent': 'ME2'
  },
  {
    'projectcode': 'ME21',
    'description': 'Implement emergency procedures',
    'parent': 'ME2'
  },
  {
    'projectcode': 'ME22',
    'description': 'Trim / fell / clear trees / shrubs',
    'parent': 'ME2'
  },
  {
    'projectcode': 'ME3',
    'description': 'Extraction / dumping',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME3+',
    'description': 'Extraction / dumping, general',
    'parent': 'ME3'
  },
  {
    'projectcode': 'ME30',
    'description': 'Control erosion OBSOLETE',
    'parent': 'ME3'
  },
  {
    'projectcode': 'ME31',
    'description': 'Control dumping',
    'parent': 'ME3'
  },
  {
    'projectcode': 'ME32',
    'description': 'Control extraction',
    'parent': 'ME3'
  },
  {
    'projectcode': 'ME4',
    'description': 'Paths / roads / car parks',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME40',
    'description': 'Provide / maintain paths / rides / roads / car parks',
    'parent': 'ME4'
  },
  {
    'projectcode': 'ME5',
    'description': 'Drainage / irrigation',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME50',
    'description': 'Provide / maintain drainage / irrigation systems',
    'parent': 'ME5'
  },
  {
    'projectcode': 'ME6',
    'description': 'Provide / maintain general facilities',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME6+',
    'description': 'Provide / maintain facilities, general',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME60',
    'description': 'Provide / maintain staff accommodation',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME61',
    'description': 'Provide / maintain visitor accommodation',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME62',
    'description': 'Provide / maintain education facilities',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME63',
    'description': 'Provide / maintain medical facilities',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME64',
    'description': 'Provide / maintain workshop',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME65',
    'description': 'Provide / maintain fuel storage',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME66',
    'description': 'Provide / maintain general stores',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME67',
    'description': 'Provide / maintain water supply',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME68',
    'description': 'Provide / maintain power supply',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME69',
    'description': 'Provide / maintain fuel supply',
    'parent': 'ME6'
  },
  {
    'projectcode': 'ME7',
    'description': 'Provide / maintain staff facilities',
    'parent': 'ME'
  },
  {
    'projectcode': 'ME7+',
    'description': 'Provide / maintain staff facilities, general',
    'parent': 'ME7'
  },
  {
    'projectcode': 'ME70',
    'description': 'Provide / maintain religious centre',
    'parent': 'ME7'
  },
  {
    'projectcode': 'ME71',
    'description': 'Provide / maintain staff recreational facilities',
    'parent': 'ME7'
  },
  {
    'projectcode': 'ME72',
    'description': 'Provide / maintain social centre',
    'parent': 'ME7'
  },
  {
    'projectcode': 'ME8+',
    'description': 'Provide / maintain recreational facilities',
    'parent': 'ME'
  },
  {
    'projectcode': 'MG',
    'description': 'Manage grazing animals',
    'parent': 'M'
  },
  {
    'projectcode': 'MG++',
    'description': 'Manage grazing animals, general',
    'parent': 'MG'
  },
  {
    'projectcode': 'MG00',
    'description': 'Husband grazing stock, cattle',
    'parent': 'MG'
  },
  {
    'projectcode': 'MG10',
    'description': 'Husband grazing stock, sheep',
    'parent': 'MG'
  },
  {
    'projectcode': 'MG20',
    'description': 'Husband grazing stock, ponies',
    'parent': 'MG'
  },
  {
    'projectcode': 'MG30',
    'description': 'Husband grazing stock, other',
    'parent': 'MG'
  },
  {
    'projectcode': 'MH',
    'description': 'Manage habitat',
    'parent': 'M'
  },
  {
    'projectcode': 'MH++',
    'description': 'Manage habitat, other',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH0',
    'description': 'Manage habitat, forest / woodland / scrub',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH0+',
    'description': 'Manage habitat, forest / woodland / scrub, general',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH00',
    'description': 'Manage habitat, forest / woodland / scrub, by coppicing',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH01',
    'description': 'Manage habitat, forest / woodland / scrub, by planting / sowing',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH02',
    'description': 'Manage habitat, forest / woodland / scrub, by thinning / group felling',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH03',
    'description': 'Manage habitat, forest / woodland / scrub, aiding natural regeneration',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH04',
    'description': 'Manage habitat, forest / woodland / scrub, maintaining ride/path/glade',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH06',
    'description': 'Manage habitat, forest / woodland / scrub, by enclosure / exclosure',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH07',
    'description': 'Manage habitat, forest / woodland / scrub, by scrub control',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH08',
    'description': 'Manage habitat, forest / woodland / scrub, by managing dead wood',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH09',
    'description': 'Manage habitat, forest / woodland / scrub, by other activities',
    'parent': 'MH0'
  },
  {
    'projectcode': 'MH1',
    'description': 'Manage habitat, grassland',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH1+',
    'description': 'Manage habitat, grassland, general',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH10',
    'description': 'Manage habitat, grassland, by controlled grazing',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH11',
    'description': 'Manage habitat, grassland, by controlled burning',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH12',
    'description': 'Manage habitat, grassland, by mowing',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH13',
    'description': 'Manage habitat, grassland, by sowing / planting / turf laying',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH14',
    'description': 'Manage habitat, grassland, by scrub control',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH16',
    'description': 'Manage habitat, grassland, by enclosure / exclosure',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH19',
    'description': 'Manage habitat, grassland, by other activities',
    'parent': 'MH1'
  },
  {
    'projectcode': 'MH2',
    'description': 'Manage habitat, controlling invasive species',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH2+',
    'description': 'Manage habitat, controlling invasive species, general',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH20',
    'description': 'Manage habitat, controlling invasive species, by grazing',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH21',
    'description': 'Manage habitat, controlling invasive species, by burning',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH22',
    'description': 'Manage habitat, controlling invasive species, by mowing / cutting',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH23',
    'description': 'Manage habitat, controlling invasive species, by enclosure / exclosure',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH25',
    'description': 'Manage habitat, controlling invasive species, by spraying',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH29',
    'description': 'Manage habitat, controlling invasive species, by other activities',
    'parent': 'MH2'
  },
  {
    'projectcode': 'MH3',
    'description': 'Manage habitat, heath',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH3+',
    'description': 'Manage habitat, heath, general',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH30',
    'description': 'Manage habitat, heath, by controlled grazing',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH31',
    'description': 'Manage habitat, heath, by scrub / tree control',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH32',
    'description': 'Manage habitat, heath, by mowing',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH33',
    'description': 'Manage habitat, heath, by fire prevention / control',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH34',
    'description': 'Manage habitat, heath, by enclosure / exclosure',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH35',
    'description': 'Manage habitat, heath, by cultivation to acc leaching',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH37',
    'description': 'Manage habitat, heath, by controlled burning',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH39',
    'description': 'Manage habitat, heath, by other activities',
    'parent': 'MH3'
  },
  {
    'projectcode': 'MH4',
    'description': 'Manage habitat, bog / mire / flush',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH4+',
    'description': 'Manage habitat, bog / mire / flush, general',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH40',
    'description': 'Manage habitat, bog / mire / flush, by water level control',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH41',
    'description': 'Manage habitat, bog / mire / flush, by controlled grazing',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH42',
    'description': 'Manage habitat, bog / mire / flush, by tree / scrub control',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH43',
    'description': 'Manage habitat, bog / mire / flush, by enclosure / exclosure',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH44',
    'description': 'Manage habitat, bog / mire / flush, by fire prevention / control',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH45',
    'description': 'Manage habitat, bog / mire / flush, by visitor control',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH49',
    'description': 'Manage habitat, bog / mire / flush, by other activities',
    'parent': 'MH4'
  },
  {
    'projectcode': 'MH5',
    'description': 'Manage habitat, swamp / fen / inundation',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH5+',
    'description': 'Manage habitat, swamp / fen / inundation, general',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH50',
    'description': 'Manage habitat, swamp / fen / inundation , by water level control',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH51',
    'description': 'Manage habitat, swamp / fen / inundation , by planting / seeding',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH52',
    'description': 'Manage habitat, swamp / fen / inundation , by scrub control',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH53',
    'description': 'Manage habitat, swamp / fen / inundation , by mowing',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH54',
    'description': 'Manage habitat, swamp / fen / inundation , by controlled grazing',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH55',
    'description': 'Manage habitat, swamp / fen / inundation , by excavation',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH57',
    'description': 'Manage habitat, swamp / fen / inundation , by ditch / dyke maintenance',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH58',
    'description': 'Manage habitat, swamp / fen / inundation , by controlled burning',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH59',
    'description': 'Manage habitat, swamp / fen / inundation , by other activities',
    'parent': 'MH5'
  },
  {
    'projectcode': 'MH6',
    'description': 'Manage habitat, open water / rivers',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH6+',
    'description': 'Manage habitat, open water / rivers, general',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH60',
    'description': 'Manage habitat, open water / rivers, by water level control',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH61',
    'description': 'Manage habitat, open water / rivers, by excavation',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH62',
    'description': 'Manage habitat, open water / rivers, by plant introduction',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH63',
    'description': 'Manage habitat, open water / rivers, by pollution prevention',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH64',
    'description': 'Manage habitat, open water / rivers, clearing/dredging/re-profiling',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH65',
    'description': 'Manage habitat, open water / rivers, clearing surrounding vegetation',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH69',
    'description': 'Manage habitat, open water / rivers, by other activities',
    'parent': 'MH6'
  },
  {
    'projectcode': 'MH7',
    'description': 'Manage habitat, coastal',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH7+',
    'description': 'Manage habitat, coastal',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH70',
    'description': 'Manage habitat, coastal, by visitor control',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH71',
    'description': 'Manage habitat, coastal, by planting stabilisation',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH72',
    'description': 'Manage habitat, coastal, by scrub control',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH73',
    'description': 'Manage habitat, coastal, by mowing',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH74',
    'description': 'Manage habitat, coastal, by controlled grazing',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH76',
    'description': 'Manage habitat, coastal, by enclosure / exclosure',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH77',
    'description': 'Manage habitat, coastal, by ditch / dyke maintenance',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH78',
    'description': 'Manage habitat, coastal, by controlled burning',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH79',
    'description': 'Manage habitat, coastal, by other activities',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH8',
    'description': 'Manage habitat, rock (replaced by MU1+)',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH80',
    'description': 'Manage habitat, rock, by soil removal (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH81',
    'description': 'Manage habitat, rock, by excavation (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH82',
    'description': 'Manage habitat, rock, by cutting vegetation (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH83',
    'description': 'Manage habitat, rock, by visitor control (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH84',
    'description': 'Manage habitat, rock, by grazing control (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH85',
    'description': 'Manage habitat, rock, by scrub control (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH86',
    'description': 'Manage habitat, rock, by removal of debris (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH89',
    'description': 'Manage habitat, rock, by other activities (replaced by MU1+)',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MH9',
    'description': 'Manage habitat, upland / montane',
    'parent': 'MH'
  },
  {
    'projectcode': 'MH9+',
    'description': 'Manage habitat, upland / montane, general',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH90',
    'description': 'Manage habitat, upland / montane, by controlled grazing',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH91',
    'description': 'Manage habitat, upland / montane, by controlled burning',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH92',
    'description': 'Manage habitat, upland / montane, by cutting vegetation',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH93',
    'description': 'Manage habitat, upland / montane, by enclosure / exclosure',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH94',
    'description': 'Manage habitat, upland / montane, by shrub / tree control',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH95',
    'description': 'Manage habitat, upland / montane, by visitor control',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MH99',
    'description': 'Manage habitat, upland / montane, by other activities',
    'parent': 'MH9'
  },
  {
    'projectcode': 'MI',
    'description': 'Information / education / interpretation / events',
    'parent': 'M'
  },
  {
    'projectcode': 'MI00',
    'description': 'Inform stakeholders',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI10',
    'description': 'Inform visitors, onsite information',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI20',
    'description': 'Inform visitors, educational information',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI30',
    'description': 'Inform visitors, specialist information',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI40',
    'description': 'Inform visitors, recreational information',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI50',
    'description': 'Provide interpretation',
    'parent': 'MI'
  },
  {
    'projectcode': 'MI60',
    'description': 'Manage events',
    'parent': 'MI'
  },
  {
    'projectcode': 'ML',
    'description': 'Liasion with stakeholders',
    'parent': 'M'
  },
  {
    'projectcode': 'ML++',
    'description': 'Liaise stakeholders, general',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML00',
    'description': 'Liaise stakeholders, owners / occupiers',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML10',
    'description': 'Liaise stakeholders, commoners',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML20',
    'description': 'Liaise stakeholders, right-holders',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML30',
    'description': 'Liaise stakeholders, neighbours',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML40',
    'description': 'Liaise stakeholders, local / national authorities',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML50',
    'description': 'Liaise stakeholders, local community / groups',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML60',
    'description': 'Liaise stakeholders, emergency services',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML70',
    'description': 'Liaise stakeholders, media',
    'parent': 'ML'
  },
  {
    'projectcode': 'ML80',
    'description': 'Liaise stakeholders, others',
    'parent': 'ML'
  },
  {
    'projectcode': 'MM',
    'description': 'Manage machinery and equipment',
    'parent': 'M'
  },
  {
    'projectcode': 'MM++',
    'description': 'Manage machinery and equipment, general',
    'parent': 'MM'
  },
  {
    'projectcode': 'MM00',
    'description': 'Acquire / service vehicles / boats',
    'parent': 'MM'
  },
  {
    'projectcode': 'MM10',
    'description': 'Acquire / service machinery',
    'parent': 'MM'
  },
  {
    'projectcode': 'MM20',
    'description': 'Acquire / maintain tools /equipment',
    'parent': 'MM'
  },
  {
    'projectcode': 'MM30',
    'description': 'Acquire / service aircraft',
    'parent': 'MM'
  },
  {
    'projectcode': 'MN',
    'description': 'Manage habitat, marine',
    'parent': 'M'
  },
  {
    'projectcode': 'MN0',
    'description': 'Manage marine, general',
    'parent': 'MN'
  },
  {
    'projectcode': 'MN00',
    'description': 'Manage marine, general',
    'parent': 'MN0'
  },
  {
    'projectcode': 'MN01',
    'description': 'Manage marine, general, pollution',
    'parent': 'MN0'
  },
  {
    'projectcode': 'MN1',
    'description': 'Manage marine, pelagic',
    'parent': 'MN'
  },
  {
    'projectcode': 'MN10',
    'description': 'Manage marine, pelagic, general',
    'parent': 'MN1'
  },
  {
    'projectcode': 'MN2',
    'description': 'Manage marine, benthic littoral',
    'parent': 'MN'
  },
  {
    'projectcode': 'MN20',
    'description': 'Manage marine, benthic littoral, general',
    'parent': 'MN2'
  },
  {
    'projectcode': 'MN21',
    'description': 'Manage marine, benthic littoral, artificial',
    'parent': 'MN2'
  },
  {
    'projectcode': 'MN3',
    'description': 'Manage marine, benthic sublittoral',
    'parent': 'MN'
  },
  {
    'projectcode': 'MN30',
    'description': 'Manage marine, benthic sublittoral, general',
    'parent': 'MN3'
  },
  {
    'projectcode': 'MN31',
    'description': 'Manage marine, benthic sublittoral, artificial',
    'parent': 'MN3'
  },
  {
    'projectcode': 'MP',
    'description': 'Patrol',
    'parent': 'M'
  },
  {
    'projectcode': 'MP00',
    'description': 'Patrol, general',
    'parent': 'MP'
  },
  {
    'projectcode': 'MP10',
    'description': 'Patrol, maintain boundary gates',
    'parent': 'MP'
  },
  {
    'projectcode': 'MP11',
    'description': 'Patrol, maintain surveillance posts',
    'parent': 'MP'
  },
  {
    'projectcode': 'MP12',
    'description': 'Patrol, maintain patrol staffing levels',
    'parent': 'MP'
  },
  {
    'projectcode': 'MP13',
    'description': 'Patrol, maintain patrol equipment',
    'parent': 'MP'
  },
  {
    'projectcode': 'MP14',
    'description': 'Patrol, maintain patrol communications',
    'parent': 'MP'
  },
  {
    'projectcode': 'MS',
    'description': 'Manage species',
    'parent': 'M'
  },
  {
    'projectcode': 'MS++',
    'description': 'Manage species, general',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS00',
    'description': 'Manage species, tree / shrub',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS10',
    'description': 'Manage species, other vascular plant',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS20',
    'description': 'Manage species, lower plant',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS30',
    'description': 'Manage species, mammal',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS40',
    'description': 'Manage species, bird',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS50',
    'description': 'Manage species, herptile',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS60',
    'description': 'Manage species, fish',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS70',
    'description': 'Manage species, Lepidoptera',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS80',
    'description': 'Manage species, other insect',
    'parent': 'MS'
  },
  {
    'projectcode': 'MS90',
    'description': 'Manage species, other invertebrate',
    'parent': 'MS'
  },
  {
    'projectcode': 'MU',
    'description': 'Manage earth science',
    'parent': 'M'
  },
  {
    'projectcode': 'MU0',
    'description': 'Manage earth science, underground',
    'parent': 'MU'
  },
  {
    'projectcode': 'MU0+',
    'description': 'Manage earth science, underground, general',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU00',
    'description': 'Manage underground, control pollution',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU01',
    'description': 'Manage underground, restoration',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU02',
    'description': 'Manage underground, establish / maintain exclusion areas',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU03',
    'description': 'Manage underground, control water movement',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU04',
    'description': 'Manage underground, control excavation / digging',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU05',
    'description': 'Manage underground, control visitors',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU06',
    'description': 'Manage underground, remove debris',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU09',
    'description': 'Manage underground, other activities',
    'parent': 'MU0'
  },
  {
    'projectcode': 'MU1+',
    'description': 'Manage earth science, geological',
    'parent': 'MU'
  },
  {
    'projectcode': 'MU2+',
    'description': 'Manage earth science, geomorphological',
    'parent': 'MU'
  },
  {
    'projectcode': 'MU3+',
    'description': 'Manage earth science, soils',
    'parent': 'MU'
  },
  {
    'projectcode': 'R',
    'description': 'Recording',
    'parent': 'NULL'
  },
  {
    'projectcode': 'RA',
    'description': 'Record, fauna',
    'parent': 'R'
  },
  {
    'projectcode': 'RA0',
    'description': 'Collect data, mammals',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA00',
    'description': 'Collect data, mammals, general',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA01',
    'description': 'Collect data, mammals, natural event',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA02',
    'description': 'Collect data, mammals, survey',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA03',
    'description': 'Collect data, mammals, monitor',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA04',
    'description': 'Collect data, mammals, surveillance / census',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA05',
    'description': 'Collect data, mammals, research project',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA06',
    'description': 'Collect data, mammals, list species',
    'parent': 'RA0'
  },
  {
    'projectcode': 'RA1',
    'description': 'Collect data, birds',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA10',
    'description': 'Collect data, birds, general',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA11',
    'description': 'Collect data, birds, natural event',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA12',
    'description': 'Collect data, birds, survey',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA13',
    'description': 'Collect data, birds, monitor',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA14',
    'description': 'Collect data, birds, surveillance / census',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA15',
    'description': 'Collect data, birds, research project',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA16',
    'description': 'Collect data, birds, list species',
    'parent': 'RA1'
  },
  {
    'projectcode': 'RA2',
    'description': 'Collect data, herptiles',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA20',
    'description': 'Collect data, herptiles, general',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA21',
    'description': 'Collect data, herptiles, natural event',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA22',
    'description': 'Collect data, herptiles, survey',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA23',
    'description': 'Collect data, herptiles, monitor',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA24',
    'description': 'Collect data, herptiles, surveillance / census',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA25',
    'description': 'Collect data, herptiles, research project',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA26',
    'description': 'Collect data, herptiles, list species',
    'parent': 'RA2'
  },
  {
    'projectcode': 'RA3',
    'description': 'Collect data, fish',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA30',
    'description': 'Collect data, fish, general',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA31',
    'description': 'Collect data, fish, natural event',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA32',
    'description': 'Collect data, fish, survey',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA33',
    'description': 'Collect data, fish, monitor',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA34',
    'description': 'Collect data, fish, surveillance / census',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA35',
    'description': 'Collect data, fish, research project',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA36',
    'description': 'Collect data, fish, list species',
    'parent': 'RA3'
  },
  {
    'projectcode': 'RA4',
    'description': 'Collect data, Lepidoptera',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA40',
    'description': 'Collect data, Lepidoptera, general',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA41',
    'description': 'Collect data, Lepidoptera, natural event',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA42',
    'description': 'Collect data, Lepidoptera, survey',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA43',
    'description': 'Collect data, Lepidoptera, monitor',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA44',
    'description': 'Collect data, Lepidoptera, surveillance / census',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA45',
    'description': 'Collect data, Lepidoptera, research project',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA46',
    'description': 'Collect data, Lepidoptera, list species',
    'parent': 'RA4'
  },
  {
    'projectcode': 'RA5',
    'description': 'Collect data, Odonata',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA50',
    'description': 'Collect data, Odonata, general',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA51',
    'description': 'Collect data, Odonata, natural event',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA52',
    'description': 'Collect data, Odonata, survey',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA53',
    'description': 'Collect data, Odonata, monitor',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA54',
    'description': 'Collect data, Odonata, surveillance / census',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA55',
    'description': 'Collect data, Odonata, research project',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA56',
    'description': 'Collect data, Odonata, list species',
    'parent': 'RA5'
  },
  {
    'projectcode': 'RA6',
    'description': 'Collect data, Orthoptera',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA60',
    'description': 'Collect data, Orthoptera, general',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA61',
    'description': 'Collect data, Orthoptera, natural event',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA62',
    'description': 'Collect data, Orthoptera, survey',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA63',
    'description': 'Collect data, Orthoptera, monitor',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA64',
    'description': 'Collect data, Orthoptera, surveillance / census',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA65',
    'description': 'Collect data, Orthoptera, research project',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA66',
    'description': 'Collect data, Orthoptera, list species',
    'parent': 'RA6'
  },
  {
    'projectcode': 'RA7',
    'description': 'Collect data, other insects',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA70',
    'description': 'Collect data, other insects, general',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA71',
    'description': 'Collect data, other insects, natural event',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA72',
    'description': 'Collect data, other insects, survey',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA73',
    'description': 'Collect data, other insects, monitor',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA74',
    'description': 'Collect data, other insects, surveillance / census',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA75',
    'description': 'Collect data, other insects, research project',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA76',
    'description': 'Collect data, other insects, list species',
    'parent': 'RA7'
  },
  {
    'projectcode': 'RA8',
    'description': 'Collect data, other invertebrates',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA80',
    'description': 'Collect data, other invertebrates, general',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA81',
    'description': 'Collect data, other invertebrates, natural event',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA82',
    'description': 'Collect data, other invertebrates, survey',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA83',
    'description': 'Collect data, other invertebrates, monitor',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA84',
    'description': 'Collect data, other invertebrates, surveillance / census',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA85',
    'description': 'Collect data, other invertebrates, research project',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA86',
    'description': 'Collect data, other invertebrates, list species',
    'parent': 'RA8'
  },
  {
    'projectcode': 'RA9',
    'description': 'Collect data, fauna, general',
    'parent': 'RA'
  },
  {
    'projectcode': 'RA90',
    'description': 'Collect data, fauna, general',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA91',
    'description': 'Collect data, fauna, natural event',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA92',
    'description': 'Collect data, fauna, survey',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA93',
    'description': 'Collect data, fauna, monitor',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA94',
    'description': 'Collect data, fauna, surveillance / census',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA95',
    'description': 'Collect data, fauna, research project',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RA96',
    'description': 'Collect data, fauna, list species',
    'parent': 'RA9'
  },
  {
    'projectcode': 'RB',
    'description': 'Record, biology general',
    'parent': 'R'
  },
  {
    'projectcode': 'RB0',
    'description': 'Collect data, biological',
    'parent': 'RB'
  },
  {
    'projectcode': 'RB00',
    'description': 'Collect data, biological, general',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB01',
    'description': 'Collect data, biological, natural event',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB02',
    'description': 'Collect data, biological, survey',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB03',
    'description': 'Collect data, biological, monitor',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB04',
    'description': 'Collect data, biological, surveillance / census',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB05',
    'description': 'Collect data, biological, research project',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB06',
    'description': 'Collect data, biological, list species',
    'parent': 'RB0'
  },
  {
    'projectcode': 'RB1',
    'description': 'Collect data, palynological (pollen studies)',
    'parent': 'RB'
  },
  {
    'projectcode': 'RB10',
    'description': 'Collect data, palynological, general',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB11',
    'description': 'Collect data, palynological, natural event',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB12',
    'description': 'Collect data, palynological, survey',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB13',
    'description': 'Collect data, palynological, monitor',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB14',
    'description': 'Collect data, palynological, surveillance / census',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB15',
    'description': 'Collect data, palynological, research project',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RB16',
    'description': 'Collect data, palynological, list species',
    'parent': 'RB1'
  },
  {
    'projectcode': 'RC',
    'description': 'Record cultural heritage',
    'parent': 'R'
  },
  {
    'projectcode': 'RC0+',
    'description': 'Collect data, archaeological',
    'parent': 'RC'
  },
  {
    'projectcode': 'RC1+',
    'description': 'Collect data, historic buildings',
    'parent': 'RC'
  },
  {
    'projectcode': 'RC2+',
    'description': 'Collect data, industrial archaeology',
    'parent': 'RC'
  },
  {
    'projectcode': 'RC3+',
    'description': 'Collect data, historical landscapes',
    'parent': 'RC'
  },
  {
    'projectcode': 'RC4+',
    'description': 'Collect data, religious interest',
    'parent': 'RC'
  },
  {
    'projectcode': 'RD',
    'description': 'Microplan Record Project codes (specialist)',
    'parent': 'R'
  },
  {
    'projectcode': 'RD00',
    'description': 'Monitor eco-development success, general',
    'parent': 'RD'
  },
  {
    'projectcode': 'RD01',
    'description': 'Monitor socio-economic factors',
    'parent': 'RD'
  },
  {
    'projectcode': 'RD02',
    'description': 'Monitor illegal activities',
    'parent': 'RD'
  },
  {
    'projectcode': 'RD03',
    'description': 'Monitor human population',
    'parent': 'RD'
  },
  {
    'projectcode': 'RD04',
    'description': 'Monitor usage of natural resources',
    'parent': 'RD'
  },
  {
    'projectcode': 'RF',
    'description': 'Record, vegetation',
    'parent': 'R'
  },
  {
    'projectcode': 'RF0',
    'description': 'Collect data, vegetation',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF00',
    'description': 'Collect data, vegetation, general',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF01',
    'description': 'Collect data, vegetation, natural event',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF02',
    'description': 'Collect data, vegetation, survey',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF03',
    'description': 'Collect data, vegetation, monitor',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF04',
    'description': 'Collect data, vegetation, surveillance / census',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF05',
    'description': 'Collect data, vegetation, research project',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF06',
    'description': 'Collect data, vegetation, list species',
    'parent': 'RF0'
  },
  {
    'projectcode': 'RF1',
    'description': 'Collect data, trees / shrubs',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF10',
    'description': 'Collect data, trees / shrubs, general',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF11',
    'description': 'Collect data, trees / shrubs, natural event',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF12',
    'description': 'Collect data, trees / shrubs, survey',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF13',
    'description': 'Collect data, trees / shrubs, monitor',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF14',
    'description': 'Collect data, trees / shrubs, surveillance / census',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF15',
    'description': 'Collect data, trees / shrubs, research project',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF16',
    'description': 'Collect data, trees / shrubs, list species',
    'parent': 'RF1'
  },
  {
    'projectcode': 'RF2',
    'description': 'Collect data, other vascular plants',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF20',
    'description': 'Collect data, other vascular plants, general',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF21',
    'description': 'Collect data, other vascular plants, natural event',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF22',
    'description': 'Collect data, other vascular plants, survey',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF23',
    'description': 'Collect data, other vascular plants, monitor',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF24',
    'description': 'Collect data, other vascular plants, surveillance / census',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF25',
    'description': 'Collect data, other vascular plants, research project',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF26',
    'description': 'Collect data, other vascular plants, list species',
    'parent': 'RF2'
  },
  {
    'projectcode': 'RF3',
    'description': 'Collect data, bryophytes',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF30',
    'description': 'Collect data, bryophytes, general',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF31',
    'description': 'Collect data, bryophytes, natural event',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF32',
    'description': 'Collect data, bryophytes, survey',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF33',
    'description': 'Collect data, bryophytes, monitor',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF34',
    'description': 'Collect data, bryophytes, surveillance / census',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF35',
    'description': 'Collect data, bryophytes, research project',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF36',
    'description': 'Collect data, bryophytes, list species',
    'parent': 'RF3'
  },
  {
    'projectcode': 'RF4',
    'description': 'Collect data, algae',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF40',
    'description': 'Collect data, algae, general',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF41',
    'description': 'Collect data, algae, natural event',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF42',
    'description': 'Collect data, algae, survey',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF43',
    'description': 'Collect data, algae, monitor',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF44',
    'description': 'Collect data, algae, surveillance / census',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF45',
    'description': 'Collect data, algae, research project',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF46',
    'description': 'Collect data, algae, list species',
    'parent': 'RF4'
  },
  {
    'projectcode': 'RF5',
    'description': 'Collect data, lichens',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF50',
    'description': 'Collect data, lichens, general',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF51',
    'description': 'Collect data, lichens, natural event',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF52',
    'description': 'Collect data, lichens, survey',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF53',
    'description': 'Collect data, lichens, monitor',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF54',
    'description': 'Collect data, lichens, surveillance / census',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF55',
    'description': 'Collect data, lichens, research project',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF56',
    'description': 'Collect data, lichens, list species',
    'parent': 'RF5'
  },
  {
    'projectcode': 'RF6',
    'description': 'Collect data, fungi',
    'parent': 'RF'
  },
  {
    'projectcode': 'RF60',
    'description': 'Collect data, fungi, general',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF61',
    'description': 'Collect data, fungi, natural event',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF62',
    'description': 'Collect data, fungi, survey',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF63',
    'description': 'Collect data, fungi, monitor',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF64',
    'description': 'Collect data, fungi, surveillance / census',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF65',
    'description': 'Collect data, fungi, research project',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RF66',
    'description': 'Collect data, fungi, list species',
    'parent': 'RF6'
  },
  {
    'projectcode': 'RH',
    'description': 'Record, human interaction',
    'parent': 'R'
  },
  {
    'projectcode': 'RH0',
    'description': 'Collect data, human interaction',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH00',
    'description': 'Collect data, human interaction, general',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH01',
    'description': 'Collect data, human interaction, survey',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH02',
    'description': 'Collect data, human interaction, monitor',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH03',
    'description': 'Collect data, human interaction, surveillance / census',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH04',
    'description': 'Collect data, human interaction, research project',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH05',
    'description': 'Collect data, human interaction, fires, unplanned',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH06',
    'description': 'Collect data, human interaction, low flying aircraft',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH07',
    'description': 'Collect data, human interaction, pollution',
    'parent': 'RH0'
  },
  {
    'projectcode': 'RH1',
    'description': 'Collect data, past management',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH1+',
    'description': 'Collect data, past management, general',
    'parent': 'RH1'
  },
  {
    'projectcode': 'RH10',
    'description': 'Collect data, land use history',
    'parent': 'RH1'
  },
  {
    'projectcode': 'RH11',
    'description': 'Collect data, past conservation management',
    'parent': 'RH1'
  },
  {
    'projectcode': 'RH2',
    'description': 'Collect data, archaeological (Replaced by RC0)',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH21',
    'description': 'Collect data, archaeological, general (Replaced by RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH22',
    'description': 'Collect data, archaeological, survey (Replaced by RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH23',
    'description': 'Collect data, archaeological, monitor (Replaced by RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH24',
    'description': 'Collect data, archaeological, surveillance / census (See RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH25',
    'description': 'Collect data, archaeological, research project (Replaced by RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH26',
    'description': 'Collect data, archaeological, inventory (Replaced by RC0)',
    'parent': 'RH2'
  },
  {
    'projectcode': 'RH3',
    'description': 'Collect data, public use',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH3+',
    'description': 'Collect data, public use, general',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH30',
    'description': 'Collect data, public use, research',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH31',
    'description': 'Collect data, public use, education',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH32',
    'description': 'Collect data, public use, count educational groups',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH33',
    'description': 'Collect data, public use, recreation',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH34',
    'description': 'Collect data, public use, count visitors',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH35',
    'description': 'Collect data, public use, trespass / theft / damage',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH36',
    'description': 'Collect data, public use, unplanned / undesirable activities',
    'parent': 'RH3'
  },
  {
    'projectcode': 'RH4',
    'description': 'Collect data, stakeholders',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH4+',
    'description': 'Collect data, stakeholders, general',
    'parent': 'RH4'
  },
  {
    'projectcode': 'RH40',
    'description': 'Collect data, stakeholder analysis',
    'parent': 'RH4'
  },
  {
    'projectcode': 'RH41',
    'description': 'Collect data, stakeholders activities',
    'parent': 'RH4'
  },
  {
    'projectcode': 'RH42',
    'description': 'Collect data, stakeholders liaison',
    'parent': 'RH4'
  },
  {
    'projectcode': 'RH8',
    'description': 'Collect data, current management',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH8+',
    'description': 'Collect data, current management',
    'parent': 'RH8'
  },
  {
    'projectcode': 'RH80',
    'description': 'Collect data, current management, by others',
    'parent': 'RH8'
  },
  {
    'projectcode': 'RH9',
    'description': 'Collect data, other activities',
    'parent': 'RH'
  },
  {
    'projectcode': 'RH9+',
    'description': 'Collect data, other activities, general',
    'parent': 'RH9'
  },
  {
    'projectcode': 'RH90',
    'description': 'Collect data, other activities, by others',
    'parent': 'RH9'
  },
  {
    'projectcode': 'RM',
    'description': 'Record, marine',
    'parent': 'R'
  },
  {
    'projectcode': 'RM0',
    'description': 'Collect data, benthic faunal communities',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM0+',
    'description': 'Collect data, benthic faunal communities, general',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM01',
    'description': 'Collect data, benthic faunal communities, natural event',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM02',
    'description': 'Collect data, benthic faunal communities, survey',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM03',
    'description': 'Collect data, benthic faunal communities, monitor',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM04',
    'description': 'Collect data, benthic faunal communities, surveillance / census',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM05',
    'description': 'Collect data, benthic faunal communities, research project',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM06',
    'description': 'Collect data, benthic faunal communities, list species',
    'parent': 'RM0'
  },
  {
    'projectcode': 'RM1',
    'description': 'Collect data, Porifera',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM1+',
    'description': 'Collect data, Porifera, general',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM11',
    'description': 'Collect data, Porifera, natural event',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM12',
    'description': 'Collect data, Porifera, survey',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM13',
    'description': 'Collect data, Porifera, monitor',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM14',
    'description': 'Collect data, Porifera, surveillance / census',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM15',
    'description': 'Collect data, Porifera, research project',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM16',
    'description': 'Collect data, Porifera, list species',
    'parent': 'RM1'
  },
  {
    'projectcode': 'RM2',
    'description': 'Collect data, Cnidaria',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM2+',
    'description': 'Collect data, Cnidaria, general',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM21',
    'description': 'Collect data, Cnidaria, natural event',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM22',
    'description': 'Collect data, Cnidaria, survey',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM23',
    'description': 'Collect data, Cnidaria, monitor',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM24',
    'description': 'Collect data, Cnidaria, surveillance / census',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM25',
    'description': 'Collect data, Cnidaria, research project',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM26',
    'description': 'Collect data, Cnidaria, list species',
    'parent': 'RM2'
  },
  {
    'projectcode': 'RM3',
    'description': 'Collect data, Annelida',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM3+',
    'description': 'Collect data, Annelida, general',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM31',
    'description': 'Collect data, Annelida, natural event',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM32',
    'description': 'Collect data, Annelida, survey',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM33',
    'description': 'Collect data, Annelida, monitor',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM34',
    'description': 'Collect data, Annelida, surveillance / census',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM35',
    'description': 'Collect data, Annelida, research project',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM36',
    'description': 'Collect data, Annelida, list species',
    'parent': 'RM3'
  },
  {
    'projectcode': 'RM4',
    'description': 'Collect data, Crustacea',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM4+',
    'description': 'Collect data, Crustacea, general',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM41',
    'description': 'Collect data, Crustacea, natural event',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM42',
    'description': 'Collect data, Crustacea, survey',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM43',
    'description': 'Collect data, Crustacea, monitor',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM44',
    'description': 'Collect data, Crustacea, surveillance / census',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM45',
    'description': 'Collect data, Crustacea, research project',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM46',
    'description': 'Collect data, Crustacea, list species',
    'parent': 'RM4'
  },
  {
    'projectcode': 'RM5',
    'description': 'Collect data, Mollusca',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM5+',
    'description': 'Collect data, Mollusca, general',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM51',
    'description': 'Collect data, Mollusca, natural event',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM52',
    'description': 'Collect data, Mollusca, survey',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM53',
    'description': 'Collect data, Mollusca, monitor',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM54',
    'description': 'Collect data, Mollusca, surveillance / census',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM55',
    'description': 'Collect data, Mollusca, research project',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM56',
    'description': 'Collect data, Mollusca, list species',
    'parent': 'RM5'
  },
  {
    'projectcode': 'RM6',
    'description': 'Collect data, Bryozoa',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM6+',
    'description': 'Collect data, Bryozoa, general',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM61',
    'description': 'Collect data, Bryozoa, natural event',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM62',
    'description': 'Collect data, Bryozoa, survey',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM63',
    'description': 'Collect data, Bryozoa, monitor',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM64',
    'description': 'Collect data, Bryozoa, surveillance / census',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM65',
    'description': 'Collect data, Bryozoa, research project',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM66',
    'description': 'Collect data, Bryozoa, list species',
    'parent': 'RM6'
  },
  {
    'projectcode': 'RM7',
    'description': 'Collect data, Echinodermata',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM7+',
    'description': 'Collect data, Echinodermata, general',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM71',
    'description': 'Collect data, Echinodermata, natural event',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM72',
    'description': 'Collect data, Echinodermata, survey',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM73',
    'description': 'Collect data, Echinodermata, monitor',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM74',
    'description': 'Collect data, Echinodermata, surveillance / census',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM75',
    'description': 'Collect data, Echinodermata, research project',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM76',
    'description': 'Collect data, Echinodermata, list species',
    'parent': 'RM7'
  },
  {
    'projectcode': 'RM8',
    'description': 'Collect data, Tunicata',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM8+',
    'description': 'Collect data, Tunicata, general',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM81',
    'description': 'Collect data, Tunicata, natural event',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM82',
    'description': 'Collect data, Tunicata, survey',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM83',
    'description': 'Collect data, Tunicata, monitor',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM84',
    'description': 'Collect data, Tunicata, surveillance / census',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM85',
    'description': 'Collect data, Tunicata, research project',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM86',
    'description': 'Collect data, Tunicata, list species',
    'parent': 'RM8'
  },
  {
    'projectcode': 'RM9',
    'description': 'Collect data, marine fauna other',
    'parent': 'RM'
  },
  {
    'projectcode': 'RM9+',
    'description': 'Collect data, marine fauna other, general',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM91',
    'description': 'Collect data, marine fauna other, natural event',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM92',
    'description': 'Collect data, marine fauna other, survey',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM93',
    'description': 'Collect data, marine fauna other, monitor',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM94',
    'description': 'Collect data, marine fauna other, surveillance / census',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM95',
    'description': 'Collect data, marine fauna other, research project',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RM96',
    'description': 'Collect data, marine fauna other, list species',
    'parent': 'RM9'
  },
  {
    'projectcode': 'RP',
    'description': 'Record, physical environment',
    'parent': 'R'
  },
  {
    'projectcode': 'RP0',
    'description': 'Collect data, climatological',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP00',
    'description': 'Collect data, climatological, general',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP01',
    'description': 'Collect data, climatological, natural event',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP02',
    'description': 'Collect data, climatological, survey',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP03',
    'description': 'Collect data, climatological, monitor',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP04',
    'description': 'Collect data, climatological, surveillance / census',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP05',
    'description': 'Collect data, climatological, research project',
    'parent': 'RP0'
  },
  {
    'projectcode': 'RP1',
    'description': 'Collect data, hydrological',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP10',
    'description': 'Collect data, hydrological, general',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP11',
    'description': 'Collect data, hydrological, natural event',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP12',
    'description': 'Collect data, hydrological, survey',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP13',
    'description': 'Collect data, hydrological, monitor',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP14',
    'description': 'Collect data, hydrological, surveillance / census',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP15',
    'description': 'Collect data, hydrological, research project',
    'parent': 'RP1'
  },
  {
    'projectcode': 'RP2',
    'description': 'Collect data, geological',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP20',
    'description': 'Collect data, geological, general',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP21',
    'description': 'Collect data, geological, natural event',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP22',
    'description': 'Collect data, geological, survey',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP23',
    'description': 'Collect data, geological, monitor',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP24',
    'description': 'Collect data, geological, surveillance / census',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP25',
    'description': 'Collect data, geological, research project',
    'parent': 'RP2'
  },
  {
    'projectcode': 'RP3',
    'description': 'Collect data, geomorphological',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP30',
    'description': 'Collect data, geomorphological, general',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP31',
    'description': 'Collect data, geomorphological, natural event',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP32',
    'description': 'Collect data, geomorphological, survey',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP33',
    'description': 'Collect data, geomorphological, monitor',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP34',
    'description': 'Collect data, geomorphological, surveillance / census',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP35',
    'description': 'Collect data, geomorphological, research project',
    'parent': 'RP3'
  },
  {
    'projectcode': 'RP4',
    'description': 'Collect data, pedological',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP40',
    'description': 'Collect data, pedological, general',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP41',
    'description': 'Collect data, pedological, natural event',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP42',
    'description': 'Collect data, pedological, survey',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP43',
    'description': 'Collect data, pedological, monitor',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP44',
    'description': 'Collect data, pedological, surveillance / census',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP45',
    'description': 'Collect data, pedological, research project',
    'parent': 'RP4'
  },
  {
    'projectcode': 'RP5',
    'description': 'Collect data, landscape',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP50',
    'description': 'Collect data, landscape, general',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP51',
    'description': 'Collect data, landscape, natural event',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP52',
    'description': 'Collect data, landscape, survey',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP53',
    'description': 'Collect data, landscape, monitor',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP54',
    'description': 'Collect data, landscape, surveillance / census',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP55',
    'description': 'Collect data, landscape, research project',
    'parent': 'RP5'
  },
  {
    'projectcode': 'RP6',
    'description': 'Collect data, oceanographic',
    'parent': 'RP'
  },
  {
    'projectcode': 'RP60',
    'description': 'Collect data, oceanographic, general',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RP61',
    'description': 'Collect data, oceanographic, natural event',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RP62',
    'description': 'Collect data, oceanographic, survey',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RP63',
    'description': 'Collect data, oceanographic, monitor',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RP64',
    'description': 'Collect data, oceanographic, surveillance / census',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RP65',
    'description': 'Collect data, oceanographic, research project',
    'parent': 'RP6'
  },
  {
    'projectcode': 'RV',
    'description': 'Record, archive - general, photos, maps etc.',
    'parent': 'R'
  },
  {
    'projectcode': 'RV0',
    'description': 'List / collate documents and datasets',
    'parent': 'RV'
  },
  {
    'projectcode': 'RV0+',
    'description': 'Collate documents and datasets, general',
    'parent': 'RV0'
  },
  {
    'projectcode': 'RV00',
    'description': 'Collate documents, published and unpublished',
    'parent': 'RV0'
  },
  {
    'projectcode': 'RV01',
    'description': 'Collate / create digital datasets',
    'parent': 'RV0'
  },
  {
    'projectcode': 'RV1',
    'description': 'List / collate photographs',
    'parent': 'RV'
  },
  {
    'projectcode': 'RV10',
    'description': 'List / collate photographs, general',
    'parent': 'RV1'
  },
  {
    'projectcode': 'RV20',
    'description': 'List / collate / commission aerial photographs',
    'parent': 'RV1'
  },
  {
    'projectcode': 'RV3',
    'description': 'List / collate maps',
    'parent': 'RV'
  },
  {
    'projectcode': 'RV30',
    'description': 'List / collate maps, general',
    'parent': 'RV3'
  },
  {
    'projectcode': 'RV40',
    'description': 'Prepare / update site maps',
    'parent': 'RV3'
  },
  {
    'projectcode': 'RV50',
    'description': 'List / collate archival records',
    'parent': 'RV0'
  },
  {
    'projectcode': 'RV51',
    'description': 'Collate media references',
    'parent': 'RV0'
  },
  {
    'projectcode': 'RV60',
    'description': 'List / collate remote sensing data',
    'parent': 'RV1'
  },
  {
    'projectcode': 'RV70',
    'description': 'Create / manage GIS data',
    'parent': 'RV3'
  },
  {
    'projectcode': 'AS0',
    'description': 'Protect site',
    'parent': 'AS'
  },
  {
    'projectcode': 'AA0+',
    'description': 'Site Safeguard Strategy',
    'parent': 'AA'
  },
  {
    'projectcode': 'AL0+',
    'description': 'Land Agent / Estate Terrier issues',
    'parent': 'AL'
  },
  {
    'projectcode': 'AR0+',
    'description': 'Prepare report, annual reports',
    'parent': 'AR'
  },
  {
    'projectcode': 'MH75',
    'description': 'Manage habitat, coastal, by non-intervention',
    'parent': 'MH7'
  },
  {
    'projectcode': 'MH8+',
    'description': 'Manage habitat, rock, general',
    'parent': 'MH8'
  },
  {
    'projectcode': 'MP0+',
    'description': 'Patrol, general',
    'parent': 'MP'
  },
  {
    'projectcode': 'MS01',
    'description': 'Manage species, other vascular plant',
    'parent': 'MS'
  },
  {
    'projectcode': 'RV11',
    'description': 'Fixed Point Photography',
    'parent': 'RV1'
  },
  {
    'projectcode': 'AI0+',
    'description': 'Safety Inspections',
    'parent': 'AI'
  },
  {
    'projectcode': 'MI01',
    'description': 'Guided Walks',
    'parent': 'MI'
  }
];
