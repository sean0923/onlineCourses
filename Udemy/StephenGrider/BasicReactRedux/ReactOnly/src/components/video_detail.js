import React from 'react';

const VideoDetails = ({ video }) => {

  if (!video) return (<div>Loading ...</div>);

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;

  return (
    <div>
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={videoUrl} className="embed-responsive-item"></iframe>
        </div>
        <div className="details">
          <div>{videoTitle}</div>
          <div>{videoDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;