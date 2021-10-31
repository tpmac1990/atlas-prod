import React from 'react'

const YoutubeEmbed = ({ embedId, title  }) => {
    return (
        <>
            <h2>{ title }</h2>
            <div className="yt-player-c1">
                <iframe
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </>
    )
}


export default YoutubeEmbed;
