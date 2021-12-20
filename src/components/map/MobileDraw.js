import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPopupMessage, setDrawTriggerSource } from '../../redux'
import ToolTip from '../reusable/tooltip/ToolTip'


const MobileDraw = () => {

    const dispatch = useDispatch()

    const { leafletDraw, filterDirection, sizeControl } = useSelector(state => state)
    const { editHandlers, filterDrawToggle } = leafletDraw
    const { filterDataset } = filterDirection
    const { is_large } = sizeControl

    const drawHandler = () => {
        // enable the draw functionality
        editHandlers.draw._modes.rectangle.handler.enable()
        // records that the draw function was selected from the map and not the filter. Determines if a search is run automatically after the draw is complete
        !filterDrawToggle && dispatch(setDrawTriggerSource('map'))
        // display info tag
        !is_large && dispatch(setPopupMessage({message: "Press and drag to draw a rectangle", type: 'info', style: 'info-map'}))
    }


    // the draw button will only become visible if a dataset has been selected
    return (
        filterDataset != ''
        ? (
            <div id='mobile-draw'>
                <ToolTip styles='left-1' content='manually select an area'>
                    <button id='mobile-draw-btn' className='btn-c6' onClick={drawHandler}>
                        <span className="material-icons map-btn-icons">draw</span>
                    </button>
                </ToolTip>
            </div>
        ) 
        : null
    )
    
}

export default MobileDraw
