import React from 'react'
import { useSelector } from 'react-redux'


const MobileDraw = () => {

    const { editHandlers } = useSelector(state => state.leafletDraw)

    const clickHandler = () => {
        editHandlers.draw._modes.rectangle.handler.enable()
    }

    return <button id='mobile-draw' className='btn-c6' onClick={clickHandler}>Draw</button>
}

export default MobileDraw
