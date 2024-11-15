import React from "react";
import { useParams } from "react-router-dom";

function ContentPage({ item }) {
  const { id } = useParams(); // Pegando o id da URL
  const itemDetails = item.find((i) => i.id === id); // Encontrando o item pelo id

  if (!itemDetails) {
    return <p>Item não encontrado</p>; // Caso o item não seja encontrado
  }

  return (
    <div className="contentPage">
      <img src={itemDetails.imagens} alt={itemDetails.titulo} />
      <h2>{itemDetails.titulo}</h2>
      <p>{itemDetails.content}</p>
      <span>📷 {itemDetails.local}</span>
      <span className="curiosidade">
        <h4>Curiosidade</h4>
        {itemDetails.curiosidade}
      </span>
    </div>
  );
}

export default ContentPage;
