import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ActivateConfirmPopup, toggleFullScreenInactive, resetConfirmed, createSite, resetCreatePntState, 
            moveSite, setCreateSite, setPopupMessage, preventBoundsUpdate } from '../../redux'
import { useHistory } from "react-router-dom";
import ToolTip from '../reusable/tooltip/ToolTip'


const AddSite = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const firstRender = useRef(true);
    
    const { filterDirection, filterSelection, leafletDraw, editPoint, confirmPopup, sizeControl } = useSelector(state => state)
    const { visible, name, confirmed } = confirmPopup
    const { editHandlers } = leafletDraw
    const { latlng, site_ind, act } = editPoint
    const { is_large } = sizeControl
    const { filterDataset } = filterDirection
    const { map_infinity, related } = filterSelection
    const { total_count } = map_infinity
    const { include } = related


    const clickHandler = () => {
        !is_large && dispatch(setPopupMessage({message: "Press on map to create a new site", type: 'info', style: 'info-map'}))
        editHandlers.draw._modes.marker.handler.enable()
        dispatch(setCreateSite())
    }

    // use the latlng values to save new or edit moved site
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else if ( latlng && act === 'create' ) {
            dispatch(toggleFullScreenInactive(true))
            dispatch(ActivateConfirmPopup({msg: 'Confirm site location and continue to add site information?', style: 'confirm-c1', name: 'site_confirm'}))        
        }
    },[latlng])

    // clear the point if the confirmPopup is cancelled
    useEffect(() => {
        if (!firstRender.current && !visible && ( name === 'site_confirm' || name == 'move_confirm')){
            try {
                editHandlers.edit._modes.remove.handler.removeAllLayers()
            } catch(err){}
        }
    },[visible])

    // resets the confirmed popup state and creates the new site in the backend
    useEffect(() => {
        if ( confirmed ){
            dispatch(resetConfirmed())
            if (name === 'site_confirm'){
                dispatch(preventBoundsUpdate(true))
                dispatch(createSite(latlng))
            } else if (name === 'move_confirm'){
                // dispatch(preventBoundsUpdate(true))
                dispatch(preventBoundsUpdate(true))
                dispatch(moveSite({latlng: latlng, ind: site_ind}))
            }
        }
    },[confirmed])

    useEffect(() => {
        if (!firstRender.current && act === 'create'){
            // redirects to the edit page
            history.push(`/detail/site/edit/${site_ind}`)
            // resets the editPoint state
            dispatch(resetCreatePntState())
        }
    },[site_ind])

    // show if data is available, selected dataset is occurrence or if it is inlcuded as a related dataset
    return (
        ((filterDataset == 'Occurrence' || include) && total_count > 0)
        ? (<div id='create-site'>
            <ToolTip styles='left-1' content='create a new site'>
                <button id='create-site-btn' className='btn-c6' onClick={clickHandler}>
                    <span className="material-icons map-btn-icons">add_location</span>
                </button>
            </ToolTip>
        </div>)
        : null
    )
}

export default AddSite
