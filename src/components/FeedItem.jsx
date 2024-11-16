import React from "react";
import { Link } from "react-router-dom";

export default function FeedItem(props) {
  return (
    <Link to={`/conteudo/${props.topic}/${props.id}`}>
      <article className="card">
        <img src={props.imageUrl} alt="Imagem" />
        <div className="options">
          <p>{props.cardTitle}</p>
        </div>
      </article>
    </Link>
  );
}
