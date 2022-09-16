import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { videos } from "../assets/videosData";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map((video, index) => {
          return (
            <VideoCard
              index={index}
              title={video.name}
              views={video.views}
              timestamp={video.date}
              channelimage={video.logo}
              channel={video.channelName}
              image={video.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
