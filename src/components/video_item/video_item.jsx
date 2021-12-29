import React, { memo } from 'react';
import styles from './video_item.module.scss';

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
      <li
        className={`${styles.video} ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
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
  }
);

export default VideoItem;
