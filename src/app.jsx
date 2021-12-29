import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';
import './App.css';
import styles from './app.module.scss';
import { useState, useEffect, useCallback } from 'react';

function App({ youtube }) {
  //state
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  //useCallback,[]인자를 사용해서 함수가 한번만 만들어지고 동일한 오브젝트를 사용하도록 함. 하지만 메모리에 보관해서 사용하기 때문에 메모리 영향있으니까 꼭 필요한 상황에만 사용 ex.자식 컴포넌트에 props로 전달할 때 새로운 함수를 전달하면 자식 컴포넌트가 다시 리렌더되기 떄문

  const search = useCallback((query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  //마운트 시에만 업데이트되는 콜백 ([]을 2번째 인자로 넣을 시)
  useEffect(() => {
    console.log(`mounted 될 때만 한번`);
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
