import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //state
  const [videos, setVideos] = useState([]);
  const axios = require('axios');

  const search = (query) => {
    let config = {
      method: 'get',
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBsuadWW76KlP0kxjv_kRKXFdnbR10P-L4`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        response.data.items.map((item) => ({ ...item, id: item.id.videoId }));

        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //마운트 시에만 업데이트되는 콜백 ([]을 2번째 인자로 넣을 시)
  useEffect(() => {
    getData();
    console.log(`mounted 될 때만 한번`);
  }, []);

  const getData = () => {
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
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
