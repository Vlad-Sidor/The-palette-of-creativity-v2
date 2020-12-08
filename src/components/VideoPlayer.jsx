import React from 'react'
import ReactPlayer from 'react-player'
import Presentation from "../images/Presentation.mp4";

export const VideoPlayer = () => {
    return (
        <div className='roomslist_new roomslist_new_background'>
            <ReactPlayer
                playing={true}
                className='response-player'
                controls={true}
                muted={true}
                url={Presentation} />
        </div>
    )
}
