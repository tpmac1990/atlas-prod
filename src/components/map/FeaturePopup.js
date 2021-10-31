import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setPopupStatus, setPreviousTarget } from '../../redux'
import PointsPopup from './PointsPopup'
import PolygonsPopup from './PolygonsPopup'

const FeaturePopup = () => {

    const dispatch = useDispatch()

    const { target, dataset, active_latlang, prev_target } = useSelector(state => state.mapPopup)

    // see PolygonLayers.js to see the styles set in geoJSON component
    const primaryColour = { color: '#ff9100', fillColor: '#ff9100', weight: 1 }
    const focusColour = { color: 'red', fillColor: 'red', weight: 1 }

    // controls highlighting the selected feature along with hiding and showing the right popups
    useEffect(() => {
        if ( target && target.feature && target.feature.geometry.type === 'MultiPolygon' ){
            // if active_latlng is not null then a site is active, so set to null so it will be hidden
            active_latlang && dispatch(setPopupStatus(null))
            // if the previous feature was a title then this will reset its style to primaryColour
            prev_target && prev_target.setStyle(primaryColour)
            // set the clicked polygon style to focusColour so it will stand out
            target && target.setStyle(focusColour)
            // set the clicked title as the prev_target so it is remembered when its colour is required to be changed back to primaryColour
            dispatch(setPreviousTarget(target))
        } else if ( prev_target && prev_target.feature && prev_target.feature.geometry.type === 'MultiPolygon' ){
            // This will take effect when a site is clicked when a title is active
            // change previously active title to the primaryColours
            prev_target && prev_target.setStyle(primaryColour)
            // required so a clicked site will be highlighted and so everything closes when the popup close button is clicked
            dispatch(setPreviousTarget(null))
        } else if ( target && target.options && target.options.icon ){
            // on click give the highlight marker a latlng so it will appear
            dispatch(setPopupStatus(target.getLatLng()))
        }
    },[target, dataset])

    return (
        <>
            { dataset === 'Occurrence' ? <PointsPopup /> : null }
            { dataset === 'Tenement' ? <PolygonsPopup /> : null }
        </>
    )
}

export default FeaturePopup;

// gives the target site a green mask. should use e.target.setIcon but I couldn't get it to work
// dispatch(setPopupStatus(e.target.getLatLng()))