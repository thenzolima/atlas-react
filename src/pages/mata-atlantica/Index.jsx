import React from "react";
import Gallery from "../../components/Gallery";
import conteudos from "../../data/conteudos";

const IndexMataAtlantica = () => {
  const faunaData = conteudos.mataAtlanticaFauna.map(item => ({
    id: item.id,
    imageUrl: item.imagens,
    cardTitle: item.titulo,
    topic: "mataAtlanticaFauna"
  }));

  const floraData = conteudos.mataAtlanticaFlora.map(item => ({
    id: item.id,
    imageUrl: item.imagens,
    cardTitle: item.titulo,
    topic: "mataAtlanticaFlora"
  }));

  return (
    <div>
      <div className="restinga-page">
        <Gallery feedData={faunaData} titleFeed="Fauna da Mata Atlântica" />
      </div>
      <br></br>
      <div className="restinga-page">
        <Gallery feedData={floraData} titleFeed="Flora da Mata Atlântica" />
      </div>
    </div>
  );
};

export default IndexMataAtlantica;
