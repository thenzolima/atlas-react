import React from "react";
import Feed from "../components/Feed.jsx";
import FeedItem from "../components/FeedItem.jsx";

const Gallery = ({ feedData, titleFeed }) => (
  <Feed titleFeed={titleFeed}>
    {feedData.map(({ id, imageUrl, cardTitle, topic }) => (
      <FeedItem
        key={id}
        id={id}
        imageUrl={imageUrl}
        cardTitle={cardTitle}
        topic={topic}
      />
    ))}
  </Feed>
);

export default Gallery;
