import React from 'react'
import useViewportStyle from '../../reusable/hooks/useViewportStyle'

const ToolTip = props => {

    const { text, style } = props

    const { viewportStyle } = useViewportStyle();
    const is_large = ['tv','desktop','laptop'].includes(viewportStyle)

    return (
        is_large 
        ? (
            <div className={`tooltip-c1 ${style}`}>
                <div></div>
                <div>{ text }</div>
            </div>
        )
        : null
    )
}

export default ToolTip;
