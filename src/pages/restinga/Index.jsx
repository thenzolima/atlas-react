import React from 'react';
import Gallery from '../../components/Gallery.jsx';
import galeriaRestinga from '../../data/restinga/restinga_flora_galeria.json';

const Index = () => {
  return (
    <div>
      <Gallery feedData={galeriaRestinga} titleFeed="Flora da Restinga" />
    </div>
  );
};

export default Index;
