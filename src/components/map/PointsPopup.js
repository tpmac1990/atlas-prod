import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { closeMapPopup } from '../../redux'

const PointsPopup = () => {

    const dispatch = useDispatch()

    const { typdetail, status, name, oid, majmat, ind, size } = useSelector(state => state.mapPopup.data)

    // popup will only show if there is a latlng val in active_latlang which comes from clicking on a site, and the dataset is 'Occurrence'
    // setPopupStatus(null) will remove the popup and the highlighted marker
    return (
        <div className='map-popup-c1'>
            <div className='popup-header'>
                <h4>{ind}</h4>
                <div className='close-c5' onClick={() => dispatch(closeMapPopup())}><span>x</span></div>
                <button id='edit-data-btn' value={`site/edit/${ind}`} className='material-icons btn-c7'>edit_note</button>
                <button id='more-data-btn' value={`site/${ind}`} className='material-icons btn-c7'>read_more</button>
                <button id='move-site-btn' value={ind} className='material-icons btn-c7'>edit_location_alt</button>
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