import React from 'react'
import ReactPlayer from 'react-player'
import  Presentation from "../images/Presentation.mp4";
 


export default function Video2() {
    return (
        <div class='roomslist_new roomslist_new_background'>
         
        <ReactPlayer 
        className = ' response -player' 
        url = { [
            Presentation ,
            ' https://www.youtube.com/watch?v=jNgP6d9HraI ' 
         ] }   /> 
      

        </div>
    )
}
