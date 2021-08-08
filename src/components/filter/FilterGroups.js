import React, { lazy } from 'react'
import TenementFilter from './TenementFilter'
import OccurrenceFilter from './OccurrenceFilter'
import { useSelector } from 'react-redux'

// const TenementFilter = lazy(() => import('./TenementFilter'));
// const OccurrenceFilter = lazy(() => import('./OccurrenceFilter'));


function FilterGroups () {

    const { filterDataset } = useSelector(state => state.filterDirection)

    switch(filterDataset) {
        case 'Tenement':
            return <TenementFilter />;
        case 'Occurrence':
            return <OccurrenceFilter />;
        default:
            return null;
    }
}

export default FilterGroups
