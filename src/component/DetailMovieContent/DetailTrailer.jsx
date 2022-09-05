import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../Api/apiConfig";
import { category } from "../../Api/category";

function DetailTrailer() {
  const [video, setVideo] = useState([]);
  const params = useParams();

  useEffect(
    function () {
      async function getVideo() {
        const request = await fetch(
          `${apiConfig.baseUrl}${category.movie}${params.id}/videos?${apiConfig.apiKey}`
        );
        const response = await request.json();
        const videos = response.results.reverse().slice(0, 3);
        setVideo(videos);
      }
      getVideo();
    },
    [params]
  );

  return (
    <div className="container">
      {video.map(function (videos, index) {
        return (
          <div key={index}>
            <h1>{videos.name}</h1>
            <iframe
              src={`https://www.youtube.com/embed/${videos.key}`}
              width="100%"
              allowFullScreen
              frameBorder="0"
              className="video-trailer"
              title="Youtube Videos"
            />
          </div>
        );
      })}
    </div>
  );
}

export default DetailTrailer;
