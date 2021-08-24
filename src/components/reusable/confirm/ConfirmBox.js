import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeactivateConfirmPopup, toggleFullScreenInactive, isConfirmed } from '../../../redux'

const ConfirmBox = () => {

    const dispatch = useDispatch()

    const { visible, msg, style, confirmed } = useSelector(state => state.confirmPopup)

    const closeHandler = () => {
        dispatch(toggleFullScreenInactive(false))
        dispatch(DeactivateConfirmPopup())
    }

    const confirmHandler = () => {
        dispatch(isConfirmed())
        dispatch(toggleFullScreenInactive(false))
    }

    return ( 
        visible
        ? (
            <div className={style}>
                <div>
                    <p>{msg}</p>
                    <button className='btn-c5' onClick={closeHandler}>Cancel</button>
                    <button className='btn-c5' onClick={confirmHandler}>Confirm</button>
                </div>
            </div>
        ) : null
    )
}

export default ConfirmBox