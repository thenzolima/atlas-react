import React, { useState, useEffect } from "react";
import Feed from "../components/Feed.jsx";
import FeedItem from "../components/FeedItem.jsx";

const Gallery = ({ feedData, titleFeed }) => {
  const [itemListData, setItemListData] = useState([]);

  useEffect(() => {
    setItemListData(feedData);
  }, [feedData]);

  return (
    <Feed titleFeed={titleFeed}>
      {itemListData.map((item) => (
        <FeedItem
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          cardTitle={item.cardTitle}
        />
      ))}
    </Feed>
  );
};

export default Gallery;
