import React from 'react';
import VideoPlayer from 'react-videoplayer'
import 'react-videoplayer/lib/index.css'
import '../App.css'
import  Presentation from "../images/Presentation.mp4";

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoSrc : {Presentation}
            //'https://www.w3schools.com/html/mov_bbb.mp4'//
            //'E:\СВЧсВС\artForSmart\resort\src\images\Dance-коктейль_БРУ_видеопрезентация.mp4'//
        };
        
    }


    render() {
        return (
            <div class='roomslist_new'>
                <VideoPlayer
                    videoSrc={this.state.videoSrc}
                    autoPlay={true}
                />
            </div>
        );
    }
}

export default Player;
