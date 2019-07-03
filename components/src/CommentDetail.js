import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 8:00PM</span>
        </div>
        <div className="text">Still a good boy!</div>
      </div>
    </div>
  );
};

export { CommentDetail as default };
