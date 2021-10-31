import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'

const Demonstration = () => {

    const ToYoutubeHandler = e => {
        e.preventDefault()
        window.open("https://www.youtube.com/playlist?list=PLsif5V_fe_hyHNlC2q5xdqY_MmQUZ6V3j", "_blank")        
    }

    return (
        <div className='instruction-group'>
            <h1>Demonstrations</h1>
            <p>Here you will find all the Gplore demonstrational videos that provide walk throughs on how to use the features available in the application. 
            You can also access the entire 'Gplore Demos' youtube playlist in another tab by clicking  
            <span className='div-link' onClick={ToYoutubeHandler}> here</span>
            , and remember to subscribe to stay up to date with the latest releases.</p>
            <br/>
            <YoutubeEmbed embedId="FomZcYheBJ8" title="Introduction & Overview" />
        </div>
    )
}


export default Demonstration
