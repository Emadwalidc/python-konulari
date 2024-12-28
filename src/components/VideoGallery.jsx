import React from "react";


const VideoGallery = () => {
  const videos = [
    "https://www.youtube.com/embed/EzHgbO1Cee4", // Replace with your video links
    "https://www.youtube.com/embed/t176iXgG5PI",
    "https://www.youtube.com/embed/nLRL_NcnK-4",
  ];

  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div className="video-container" key={index}>
          <iframe
            src={video}
            title={`YouTube video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;