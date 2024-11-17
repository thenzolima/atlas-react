import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import conteudos from "../data/conteudos";

const ContentPage = () => {
  const { topic, id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const conteudoAtual = conteudos[topic] || [];
    const item = conteudoAtual.find((i) => i.id === id);
    setItemDetails(item);
  }, [topic, id]);

  if (!itemDetails) {
    return <div className="error-message">Item não encontrado</div>;
  }

  const { imagens, titulo, content, local, curiosidade } = itemDetails;

  return (
    <article className="contentPage">
      <img src={imagens} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{content}</p>
      <span>📷 {local}</span>
      {curiosidade && (
        <div className="curiosidade">
          <h4>Curiosidade</h4>
          <p>{curiosidade}</p>
        </div>
      )}
    </article>
  );
};

export default ContentPage;