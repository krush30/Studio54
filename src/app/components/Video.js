import React from 'react'

const Video = () => {
    return (
        <div>
            <iframe className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/5JbIIkFnTNk?si=g0s46fBaVrUQQiet" + "&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )
}

export default Video;
