import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// sets 
const FeatureCount = () => {

    const { filterSelection, filterDirection } = useSelector(state => state)
    const { filterDataset } = filterDirection
    const { total_count, offset } = filterSelection.map_infinity

    const [feature, setFeature] = useState('')
    const [displayed, setDisplayed] = useState('')

    // convert the dataset to display value
    useEffect(() => {
        filterDataset == ''
        ? setFeature('')
        : filterDataset == 'Tenement'
            ? setFeature('titles')
            : setFeature('sites')
    },[filterDataset])

    // calculate the number of features displayed
    useEffect(() => {
        offset >= total_count
        ? setDisplayed(total_count)
        : setDisplayed(offset)
    },[offset,total_count])


    return (
        <div id='feature-count'>
            {
                total_count &&
                <span><b>{displayed}</b> of {total_count} {feature}</span>
            }
        </div>
    )
}

export default FeatureCount
