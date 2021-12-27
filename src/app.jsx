import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import './App.css';
import { useState, useEffect } from 'react';

function App({ youtube }) {
  //state
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  //마운트 시에만 업데이트되는 콜백 ([]을 2번째 인자로 넣을 시)
  useEffect(() => {
    console.log(`mounted 될 때만 한번`);
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
