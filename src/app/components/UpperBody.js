import React from 'react'
import VideoInfo from './VideoInfo';
import Video from './Video';
import MiddleBody from './MiddleBody';

const UpperBody = () => {
    return (
        <div className=' md:pt-0 bg-[#1F1F1F]'>
            <VideoInfo />
            <Video />
        </div>
    )
}

export default UpperBody;
