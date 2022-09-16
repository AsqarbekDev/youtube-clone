import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@mui/material";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  numOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar alt={channel} src={image} className="channelRow__logo" />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineSharpIcon />}
        </h4>
        <p>
          {subs} subscribers • {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
