import React from "react";
import video from "./resources/video.mp4"

function VideoPage(){

    return(
        <>
        <video width="600" controls className="flex ml-[29%] justify-center items-center border-4 border-black rounded">
            <source src={video} type="video/mp4"/>
        </video>
        </>
    )
}

export default VideoPage