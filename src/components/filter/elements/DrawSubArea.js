import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LatLngTextbox from './LatLngTextbox'
import { clearRectangleLatLngs, toggleFilterPanel, toggleMapDrawButton, setPopupMessage } from '../../../redux'


function DrawSubArea (props) {

    const dispatch = useDispatch()

    const { filterGroup, filterSelection, leafletDraw, sizeControl } = useSelector(state => state)
    const { areaStyle } = filterGroup.groups[props.name]
    const { input, map_data } = filterSelection
    const { rectangle } = input
    const { filteropen } = map_data
    const { editHandlers } = leafletDraw
    const { is_large } = sizeControl


    // re-open the filter once the rectangle has been selected
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current = false
            return;
        }
        if (!is_large && !filteropen){
            // re-open the filter once the rectangle has been drawn
            dispatch(toggleFilterPanel())
            // hide the Map draw button once the rectangle has been drawn
            dispatch(toggleMapDrawButton(false))
        } 
    },[rectangle])

    function drawRectangleHandler(){
        // if small screen then present the draw button on the map so the user is able to zoom prior to drawing the rectangle
        !is_large ? dispatch(toggleMapDrawButton(true)) : editHandlers.draw._modes.rectangle.handler.enable()
        // hide the filter so the user can draw the rectangle. It will open again on completion of the rectangle
        !is_large && dispatch(toggleFilterPanel())
        // display message on small view
        !is_large && dispatch(setPopupMessage({message: "Zoom to the area of interest and click the draw button to begin", type: 'info', style: 'info-map'}))
    }

    function clearRectangleHandler(){
        try {
            editHandlers.edit._modes.remove.handler.removeAllLayers()
        } catch(err){}
    }

    function clearFieldsHandler(){
        dispatch(clearRectangleLatLngs())
        clearRectangleHandler()
    }

    return (
        <div id="draw-sub-area" className={areaStyle}>
            <button className='btn-c4' onClick={drawRectangleHandler}>Select Area on Map</button>
            <button className='btn-c4' onClick={clearFieldsHandler}>Clear Selection</button>
            <h3>North East</h3>
            <LatLngTextbox name={'NELat'}/>
            <LatLngTextbox name={'NELng'}/>
            <h3>South West</h3>
            <LatLngTextbox name={'SWLat'}/>
            <LatLngTextbox name={'SWLng'}/>
        </div>
    )
}

export default DrawSubArea