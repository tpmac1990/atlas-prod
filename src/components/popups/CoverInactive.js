import React from 'react'
import { useSelector } from 'react-redux'

// places a semi transparent layer over the page to prevent the user from interacting with the page.
export const CoverInactive = () => {

    const { is_active } = useSelector(state => state.inactiveCover)

    return (
        is_active 
        ? <div className='inactive-pg'></div> 
        : null
    )
}
