import { Site } from './site';
import { CmsData } from './cms-data';

export const cmsData: CmsData = {
    sites: [
        {
            siteCode: 'NNR001', name: 'Gwernvale Farm', projects: [
                { id: 1, name: 'monitor small mammals with traps', projectTypeCode: 1 }
            ]
        },
        { siteCode: 'NNR002', name: 'Bluebell Wood' },
        { siteCode: 'NNR003', name: 'Beech Wood' },
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
