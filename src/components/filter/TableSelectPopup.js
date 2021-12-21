import React, {useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import { triggerElement, toggleFullScreenInactive, toggleTableDataset } from '../../redux'


// The popup that displays when there is both title and site data on the map which gives you the choice of which dataset to show
const TableSelectPopup = () => {

    const dispatch = useDispatch()
    const history = useHistory();

    const { both_available } = useSelector(state => state.popupTable)

    const tableClickHandler = e => {
        // hide the popup
        dispatch(toggleTableDataset(false))
        // show the table of the selected dataset
        dispatch(triggerElement(e.target.name))
        history.push('/table/')
    }

    // toggle the inactive background layer
    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current){
            firstRender.current = false
            return
        }
        both_available
        ? dispatch(toggleFullScreenInactive(true))
        : dispatch(toggleFullScreenInactive(false))
    },[both_available])

    // close the popup
    const cancelHandler = () => {
        dispatch(toggleTableDataset(false))
    }

    return (
        both_available
        ? (
            <div className='popup-c1'>
                <div className='close-c2' onClick={cancelHandler}><span>x</span></div>
                <div>
                    <p>Select the dataset to display in the table</p>
                    <button className='btn-c5' name='titles' onClick={tableClickHandler}>Titles</button>
                    <button className='btn-c5' name='sites' onClick={tableClickHandler}>Sites</button>
                </div>
            </div>
        )
        : null
    )
}

export default TableSelectPopup

