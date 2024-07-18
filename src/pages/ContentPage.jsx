import React from 'react';
import { useParams } from 'react-router-dom';
import feedItems from '../data/feedItems.json';

function ContentPage() {
  const { id } = useParams();
  const item = feedItems.find(item => item.id === id);

  return (
    <div className='contentPage'>
      {item ? (
        <>
          <img src={`${item.img}`} alt="" />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <span>📷 {item.local}</span>
          <span className="curiosidade">
            <h4>Curiosidade</h4>
            {item.curiosidade}
          </span>
        </>
      ) : (
        <p>Item não encontrado</p>
      )}
    </div>
  );
}

export default ContentPage;
