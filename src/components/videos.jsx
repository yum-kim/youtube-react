import React from 'react';

const Videos = (props) => {
  console.log(props.videos);

  return (
    <ul className="video-box">
      {props.videos?.map((video, index) => (
        <li key={index} className="video-list">
          <img
            className="video-img"
            src={video.snippet.thumbnails.default.url}
            alt=""
          />
          <div className="video-description">
            <h3>{video.snippet.title}</h3>
            <span>{video.snippet.channelTitle}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Videos;
