import React, { createRef, useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Marker, LayerGroup, Tooltip} from 'react-leaflet';
import { divIcon } from 'leaflet'
import { getPopupData, setPopupTarget, toggleOffSiteMove, toggleFullScreenInactive, ActivateConfirmPopup, 
        toggleBounds } from '../../redux'


function PointsLayer() {

    const dispatch = useDispatch()

    const { filterSelection, mapPopup, editPoint, leafletDraw, sizeControl } = useSelector(state => state)
    const { occs, map } = filterSelection.map_data
    const { data, target, dataset, active_latlang } = mapPopup
    const { act, move_toggle, latlng } = editPoint
    const { editHandlers } = leafletDraw
    const { is_large } = sizeControl

    const [ firstRender, setFirstRender ] = useState(true)

    const siteIcon = divIcon({className: 'greenmarker'});
    const activeSiteIcon = divIcon({className: 'redmarker'});

    const occLayerRef = createRef();

    // keep both lines. removing will mess with the popups
    const markerRefs = useRef([]);
    markerRefs.current = [];

    // run when a site is clicked. gets the data for the site
    // marker.leafletElement is the same as e.target
    const popUpFunction = e => {
        const { index, pk } = e.target.options
        const marker = markerRefs.current[index]
        // sets the target if the site. could use e.target as well
        dispatch(setPopupTarget(marker.leafletElement))
        // get the data to display in the popup
        dispatch(getPopupData({pk: pk, dataset: 'Occurrence'}))
    }

    useEffect(() => {
        // set the map bounds to the data just loaded
        !firstRender && dispatch(toggleBounds(true))
    },[occs])


    // activates the create point funciton after the move site btn is clicked in the map popup
    useEffect(() => {
        if ( act && move_toggle ){
            dispatch(toggleOffSiteMove())
            editHandlers.draw._modes.marker.handler.enable()
        }
    },[move_toggle])

    // use the latlng values to save new or edit moved site
    useEffect(() => {
        if ( !firstRender && latlng && act === 'move' ) {
            dispatch(toggleFullScreenInactive(true))
            dispatch(ActivateConfirmPopup({msg: 'Confirm new site location?', style: 'confirm-c1', name: 'move_confirm'}))          
        }
    },[latlng])

    const addToRefs = (el) =>{
        if (el && !markerRefs.current.includes(el)) {
            markerRefs.current.push(el)
        }
    }

    useEffect(() => {
        setFirstRender(false)
    },[])

    // plot all the site markers and when one is clicked popupLatLng will be given a latlng value which will show a different marker ontop
    return (
        <LayerGroup ref={occLayerRef}>
            { occs.features.map((occ, index) => 
                ( <Marker 
                        key={occ.properties.pk} 
                        index={index} 
                        pk={occ.properties.pk} 
                        ref={addToRefs} 
                        position={[occ.geometry.coordinates[1],occ.geometry.coordinates[0]]} 
                        icon={siteIcon} 
                        onclick={popUpFunction} 
                    >
                    { is_large
                    ? <Tooltip className='id-tooltip'>{occ.properties.pk}</Tooltip>
                    : null }
                </Marker> )
            )}
            { active_latlang && 
                <Marker 
                    position={[active_latlang.lat, active_latlang.lng]} 
                    icon={activeSiteIcon} 
                ></Marker>
            }
        </LayerGroup>
    )
}

export default PointsLayer;


// removed on 210823. I can't remember what this is for
// let myArr = []
// let unique_occs = []
// occs.features.forEach(item => {
//     const { pk } = item.properties
//     if ( !myArr.includes(pk) ){
//         myArr.push(pk)
//         unique_occs.push(item)
//     }
// })

// // the 'button' click events are handled in the 'Layers' component
// useEffect(() => {
//     if ( !firstRender && dataset === 'Occurrence' ){
//         const { typdetail, status, name, oid, majmat, ind, size } = data
//         // console.log(target)
//         target.bindPopup(
//             `<div class='polyPopup'>
//                 <div class='popup-header'>
//                     <h4>${ind}</h4>
//                     <button id='edit-data-btn' value='site/edit/${ind}' class='material-icons btn-c7'>edit_note</button>
//                     <button id='more-data-btn' value='site/${ind}' class='material-icons btn-c7'>read_more</button>
//                     <button id='move-site-btn' value=${ind} class='material-icons btn-c7'>edit_location_alt</button>
//                 </div>
//                 <hr/>
//                 <div>
//                     <table>
//                         <tr><td>Name</td><td>${name}</td></tr>
//                         <tr><td>Type</td><td>${typdetail}</td></tr>
//                         <tr><td>Status</td><td>${status}</td></tr>
//                         <tr><td>Size</td><td>${size}</td></tr>
//                         <tr><td>Other IDs</td><td>${oid}</td></tr>
//                         <tr><td>Major Materials</td><td>${majmat}</td></tr>
//                     </table>
//                 </div>
//             </div>`
//         ).openPopup()
//     }
// },[data])
