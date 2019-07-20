import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading..</div>;
  return <div>{video.snippet.title}</div>;
};

export { VideoDetail as default };
