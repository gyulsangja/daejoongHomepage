import { useEffect, useState } from "react";

const API_KEY = '';
const PLAYLIST_ID = ""; // 특정 재생목록 ID
const MAX_RESULTS = 10;

const Youtube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      });
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.snippet.resourceId.videoId} className="mb-4">
          <h3>{video.snippet.title}</h3>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Youtube;