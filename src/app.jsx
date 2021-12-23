import Search from './components/search';
import VideoList from './components/video_list/video_list';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //state
  const [videos, setVideos] = useState([]);

  //마운트 시에만 업데이트되는 콜백 ([]을 2번째 인자로 넣을 시)
  useEffect(() => {
    getData();
    console.log(`mounted 될 때만 한번`);
  }, []);

  const getData = () => {
    const axios = require('axios');
    const config = {
      method: 'get',
      url:
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBsuadWW76KlP0kxjv_kRKXFdnbR10P-L4',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.items);
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Yumi Youtube</h1>
      <Search />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
