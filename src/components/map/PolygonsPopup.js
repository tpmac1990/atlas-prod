import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatDate } from '../formatting/formatting'
import { closeMapPopup } from '../../redux'


const PolygonsPopup = () => {

    const dispatch = useDispatch()

    const { typ, status, lodgedate, startdate, enddate, oid, holder, majmat, ind } = useSelector(state => state.mapPopup.data)

    return (
        <div className='map-popup-c1'>
            <div className='popup-header'>
                <h4>{ind}</h4>
                <div className='close-c5' onClick={() => dispatch(closeMapPopup())}><span>x</span></div>
                <button id='edit-data-btn' value={`title/edit/${ind}`} className='material-icons btn-c7'>edit_note</button>
                <button id='more-data-btn' value={`title/${ind}`} className='material-icons btn-c7'>read_more</button>
            </div>
            <hr/>
            <div className='popup-body'>
                <table>
                    <tbody>
                        <tr><td>Type</td><td>{typ}</td></tr>
                        <tr><td>Status</td><td>{status}</td></tr>
                        <tr><td>Lodge Date</td><td>{formatDate(lodgedate)}</td></tr>
                        <tr><td>Start Date</td><td>{formatDate(startdate)}</td></tr>
                        <tr><td>End Date</td><td>{formatDate(enddate)}</td></tr>
                        <tr><td>Related IDs</td><td>{oid}</td></tr>
                        <tr><td>Holder</td><td>{holder}</td></tr>
                        <tr><td>Major Materials</td><td>{majmat}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PolygonsPopup;

// target && dataset === 'Tenement'


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

