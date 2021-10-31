import React, { useRef, useEffect } from 'react';
import { storeSpatialRefs, getPopupData, setPopupTarget } from '../../redux'
import { GeoJSON } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux'


function PolygonLayer () {

    const dispatch = useDispatch()

    const { filterSelection, sizeControl } = useSelector(state => state)
    const { tens } = filterSelection.map_data
    const { is_large } = sizeControl

    // ref to the tenements layer
    const tenRef = useRef(); 

    // store the tenements layer ref to state. I was using this to set the bounds, but moved that job to django
    useEffect(() => {
        const { current = {} } = tenRef;
        const { leafletElement: ten } = current; // deconstruct the leafletelement from the current
        dispatch(storeSpatialRefs({name: 'tensref', ref: ten})) // store this ref in the state
    }, [tens]) // only update the ref when the tens features change

    // clear the tenement layers and re-add them when ever the tens features change. Required as leaflet will not replace the data, but add the new data aswell.
    useEffect(() => {
        tenRef.current && tenRef.current.leafletElement.clearLayers().addData(tens)
        // console.log(Date.now())
    }, [tens])

    // setting the target and dataset will trigger the popup in FeaturePopup
    function popUpFunctionT(e){
        // set the target
        dispatch(setPopupTarget(e.target))
        // get the data to display in the popup
        dispatch(getPopupData({pk: e.target.feature.properties.pk, dataset: 'Tenement'}))
    }
    
    // binds the tooltip that holds the title id, and the popup that contains a summary of the title
    function onEachFeature (feature, layer) {
        if (feature.properties && feature.properties.pk){
            layer.on("click",popUpFunctionT);
            is_large && layer.bindTooltip(feature.properties.pk, {className: 'id-tooltip'});
        }
    }
    
    return <GeoJSON key={tens} 
                    data={tens} 
                    ref={tenRef}
                    color='#ff9100' 
                    fillColor='#ff9100'
                    weight={1}
                    onEachFeature={onEachFeature} 
            />
}

export default PolygonLayer;


// useEffect(() => {
//     if ( !firstRender && dataset === 'Tenement' ){
//         const { typ, status, lodgedate, startdate, enddate, oid, holder, majmat, ind } = data
//         target.bindPopup(
//             `<div class='polyPopup'>
//                 <div class='popup-header'>
//                     <h4>${ind}</h4>
//                     <button id='edit-data-btn' value='title/edit/${ind}' class='material-icons btn-c7'>edit_note</button>
//                     <button id='more-data-btn' value='title/${ind}' class='material-icons btn-c7'>read_more</button>
//                 </div>
//                 <hr/>
//                 <div class='popup-body'>
//                     <table>
//                         <tr><td>Type</td><td>${typ}</td></tr>
//                         <tr><td>Status</td><td>${status}</td></tr>
//                         <tr><td>Lodge Date</td><td>${formatDate(lodgedate)}</td></tr>
//                         <tr><td>Start Date</td><td>${formatDate(startdate)}</td></tr>
//                         <tr><td>End Date</td><td>${formatDate(enddate)}</td></tr>
//                         <tr><td>Other IDs</td><td>${oid}</td></tr>
//                         <tr><td>Holder</td><td>${holder}</td></tr>
//                         <tr><td>Major Materials</td><td>${majmat}</td></tr>
//                     </table>
//                 </div>
//             </div>`
//         ).openPopup()
//     }
// },[data])