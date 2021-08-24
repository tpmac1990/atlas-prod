import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import useViewportStyle from '../reusable/hooks/useViewportStyle'
import { setPopupMessage } from '../../redux'


const MobileDraw = () => {

    const dispatch = useDispatch()

    const { editHandlers, mdb_active } = useSelector(state => state.leafletDraw)
    const { is_large } = useSelector(state => state.sizeControl)

    // const { viewportStyle } = useViewportStyle();
    // const is_large = ['tv','desktop','laptop'].includes(viewportStyle)

    const drawHandler = () => {
        editHandlers.draw._modes.rectangle.handler.enable()
        !is_large && dispatch(setPopupMessage({message: "Press and drag to draw a rectangle", type: 'info', style: 'info-map'}))
    }

    // return mdb_active ? <button id='mobile-draw' className='btn-c6' onClick={drawHandler}>Draw</button> : null
    return (
        mdb_active 
        ? (
            <div id='mobile-draw'>
                <button id='mobile-draw-btn' className='btn-c6' onClick={drawHandler}>
                    <span className="material-icons map-btn-icons">draw</span>
                </button>
            </div>
        ) 
        : null
    )
    
}

export default MobileDraw
