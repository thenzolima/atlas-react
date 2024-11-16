import React from "react";
import Gallery from "../../components/Gallery";
import conteudos from "../../data/conteudos";

const IndexRestinga = () => {
  const floraData = conteudos.restingaFlora.map(item => ({
    id: item.id,
    imageUrl: item.imagens,
    cardTitle: item.titulo,
    topic: "restingaFlora"
  }));

  return (
    <div className="restinga-page">
      <Gallery feedData={floraData} titleFeed="Flora da Restinga" />
    </div>
  );
};

export default IndexRestinga;
