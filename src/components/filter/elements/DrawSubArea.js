import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LatLngTextbox from './LatLngTextbox'
import { clearRectangleLatLngs, toggleFilterPanel, setPopupMessage, toggleFilterDraw, setDrawTriggerSource } from '../../../redux'


function DrawSubArea (props) {

    const dispatch = useDispatch()

    const { filterGroup, filterSelection, leafletDraw, sizeControl } = useSelector(state => state)
    const { areaStyle } = filterGroup.groups[props.name]
    const { input, map_data } = filterSelection
    const { rectangle } = input
    const { filteropen, map } = map_data
    const { editHandlers, rectangleRef } = leafletDraw
    const { is_large } = sizeControl


    // re-open the filter once the rectangle has been selected
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current = false
            return;
        }
        // re-open the filter once the rectangle has been drawn. Also handled in map/Draw.js
        !is_large && !filteropen && dispatch(toggleFilterPanel())
    },[rectangle])

    function drawRectangleHandler(){
        // clear existing rectangle it one exists
        rectangleRef && map.removeLayer(rectangleRef)
        // if in mobile view then toggle filterDrawToggle so the filter is re-opened after the draw is complete
        !is_large && dispatch(toggleFilterDraw(true))
        // if large screen then enable the draw functionality directly from the filter
        is_large && editHandlers.draw._modes.rectangle.handler.enable()
        // hide the filter so the user can draw the rectangle. It will open again on completion of the rectangle
        !is_large && dispatch(toggleFilterPanel())
        // records that the draw function was selected from the filter and not the map. Determines if a search is run automatically after the draw is complete
        dispatch(setDrawTriggerSource('filter'))
        // display message on small view
        !is_large && dispatch(setPopupMessage({message: "Zoom to the area of interest and click the draw button to begin", type: 'info', style: 'info-map'}))
    }

    function clearRectangleHandler(){
        try {
            // delete the rectangle if it exists
            rectangleRef && map.removeLayer(rectangleRef)
            // // does the same as above just more targeted
            // editHandlers.edit._modes.remove.handler.removeAllLayers()
        } catch(err){}
    }

    function clearFieldsHandler(){
        dispatch(clearRectangleLatLngs())
        clearRectangleHandler()
    }

    return (
        <div id="draw-sub-area" className={`${areaStyle} scrollbar-c1`}>
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