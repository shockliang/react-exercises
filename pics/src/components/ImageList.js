import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imageUrls = images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageUrls}</div>;
};

export { ImageList as default };
