import Search from './components/search';
import Videos from './components/videos';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getData();
    console.log(`mounted 될 때만 한번`);
  }, []);

  const getData = () => {
    //API통신필요
    var axios = require('axios');
    var config = {
      method: 'get',
      url:
        'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBsuadWW76KlP0kxjv_kRKXFdnbR10P-L4',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setVideo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Yumi Youtube</h1>
      <Search />
      <Videos videos={video.items} />
    </div>
  );
}

export default App;
