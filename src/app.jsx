import { useEffect, useState,  } from 'react';
import './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?Key=AIzaSyCX_s-jX6cT-u5hJTAlMJ_AxOvEjz8MwQg&Key=AIzaSyCX_s-jX6cT-u5hJTAlMJ_AxOvEjz8MwQg&part=snippet&maxResult=20&q=loona&chart=mostPopular", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader  />
      <VideoList videos={videos}/>
    </div>
  )
};

export default App;
