import React from "react";
import Gallery from "../../components/Gallery";
import conteudos from "../../data/conteudos";

const IndexTalassociclo = () => {
  const faunaData = conteudos.talassocicloFauna.map(item => ({
    id: item.id,
    imageUrl: item.imagens,
    cardTitle: item.titulo,
    topic: "talassocicloFauna"
  }));

  const floraData = conteudos.talassocicloFlora.map(item => ({
    id: item.id,
    imageUrl: item.imagens,
    cardTitle: item.titulo,
    topic: "talassocicloFlora"
  }));

  return (
    <div>
      <div className="restinga-page">
        <Gallery feedData={faunaData} titleFeed="Fauna da Talassociclo" />
      </div>
      <br></br>
      <div className="restinga-page">
        <Gallery feedData={floraData} titleFeed="Flora da Talassociclo" />
      </div>
    </div>
  );
};

export default IndexTalassociclo;
