import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import { closeMapPopup, setPopupMessage, triggerPntMove, togglePopup } from '../../redux'


const PointsPopup = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const { typdetail, status, name, oid, majmat, ind, size } = useSelector(state => state.mapPopup.data)
    const { is_large } = useSelector(state => state.sizeControl)

    // handles the action to take when a button is clicked within the popup
    const ButtonHandler = e => {
        const { id, value } = e.target
        switch(id){
            case 'more-data-btn':
                history.push(`/detail/${value}`)
                break;
            
            case 'move-site-btn':
                !is_large && dispatch(setPopupMessage({message: "Press where you want to move the site to", type: 'info', style: 'info-map'}))
                dispatch(triggerPntMove(value))
                break;

            case 'edit-data-btn':
                history.push(`/detail/${value}`)
                break;

            case 'delete-site-btn':
                // toggle the 'RequestDelete' component
                dispatch(togglePopup({is_open: true, ind: ind}))
        }
    }


    // popup will only show if there is a latlng val in active_latlang which comes from clicking on a site, and the dataset is 'Occurrence'
    // setPopupStatus(null) will remove the popup and the highlighted marker
    return (
        <div className='map-popup-c1'>
            <div className='popup-header' onClick={ButtonHandler}>
                <h4>{ind}</h4>
                <div className='close-c5' onClick={() => dispatch(closeMapPopup())}><span>x</span></div>
                <button id='edit-data-btn' value={`site/edit/${ind}`} className='material-icons btn-c7'>edit_note</button>
                <button id='more-data-btn' value={`site/${ind}`} className='material-icons btn-c7'>read_more</button>
                <button id='move-site-btn' value={ind} className='material-icons btn-c7'>edit_location_alt</button>
                <button id='delete-site-btn' value={ind} className='material-icons btn-c7'>clear</button>
            </div>
            <hr/>
            <div className='popup-body'>
                <table>
                    <tbody>
                        <tr><td>Name</td><td>{name}</td></tr>
                        <tr><td>Type</td><td>{typdetail}</td></tr>
                        <tr><td>Status</td><td>{status}</td></tr>
                        <tr><td>Size</td><td>{size}</td></tr>
                        <tr><td>Related IDs</td><td>{oid}</td></tr>
                        <tr><td>Major Materials</td><td>{majmat}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PointsPopup;

// active_latlang