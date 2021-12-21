import React from 'react'
import ToolTip from '../reusable/tooltip/ToolTip'

const PopupBtnWithTooltip = ({content, id, value, icon}) => {
    return (
        <ToolTip styles='top-right-1' content={content}>
            <button id={id} value={value} className='material-icons btn-c7'>{icon}</button>
        </ToolTip>
    )
}

export default PopupBtnWithTooltip
