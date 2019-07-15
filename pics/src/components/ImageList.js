import "./ImageList.css";
import React from "react";

const ImageList = ({ images }) => {
  const imageUrls = images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div className="image-list">{imageUrls}</div>;
};

export { ImageList as default };
