import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.scss';

const VideoList = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
