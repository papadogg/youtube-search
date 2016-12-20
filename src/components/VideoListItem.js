import React from 'react';

const VideoListItem = ({video, onVideoSelect})=> {
  const imageUrl = video.snippet.thumbnails.default.url;
  const heading = video.snippet.title;

  return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <h6 className="media-heading">{heading}</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
