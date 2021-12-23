import React from 'react';
import styles from './video_item.module.scss';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="video thumnail"
      />
      <div className={styles.textbox}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
