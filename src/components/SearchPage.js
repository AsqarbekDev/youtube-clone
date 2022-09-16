import React from "react";
import "./SearchPage.css";
import TuneSharpIcon from "@mui/icons-material/TuneSharp";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { videos } from "../assets/videosData";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AMLnZu_NBXmT9J0H9uL94tZm6YxOGdMn0utqYJh1aQlv4A=s68-c-k-c0x00ffffff-no-rj"
        channel="MrBeast"
        verified
        subs="104M"
        numOfVideos={728}
        description="SUBSCRIBE FOR A COOKIE! Accomplishments"
      />
      <hr />
      {videos.map((video, index) => {
        return (
          <VideoRow
            index={index}
            views={video.views}
            subs={video.subs}
            description={video.description}
            timestamp={video.date}
            channel={video.channelName}
            title={video.name}
            image={video.thumbnail}
          />
        );
      })}
    </div>
  );
}

export default SearchPage;
