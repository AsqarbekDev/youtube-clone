import React from "react";
import "./VideoCard.css";
import { Avatar } from "@mui/material";

function VideoCard({ image, title, channel, views, timestamp, channelimage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="Thumbnail" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt="Avatar" src={channelimage} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
