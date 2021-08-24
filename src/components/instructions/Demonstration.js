import React from 'react'

const Demonstration = () => {

    const ToYoutubeHandler = e => {
        e.preventDefault()
        window.open("https://www.youtube.com/channel/UCmOTkRrMXq0hH-uUwmv5Tqw/playlists", "_blank")
    }


    return (
        <div className='instruction-group'>
            <p>All Demos are currently on the Gplore youtube channel:</p>
            <div className='div-link' onClick={ToYoutubeHandler}>Go to channel</div>
        </div>
    )
}

export default Demonstration
