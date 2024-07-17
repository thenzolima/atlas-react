import React from 'react'
import Feed from '../components/Feed.jsx'
import FeedItem from '../components/FeedItem.jsx'

const itemListData = [
    {
        id: "bercario-de-borboletas",
        imageUrl: "http://atlasbioma.regilan.com.br/imagens/Mata%20Atl%C3%A2ntica/ber%C3%A7%C3%A1rio,%20borbolet%C3%A1rio,%20porto%20seguro.jpg",
        alt: "Imagem do Berçário de borboletas",
        cardTitle: "Berçário de borboletas",
    },
    {
        id:"pupa",
        imageUrl: "http://atlasbioma.regilan.com.br/imagens/Mata%20Atl%C3%A2ntica/pupa,%20borbolet%C3%A1rio,%20porto%20seguro.jpg",
        alt: "Imagem da Pupa",
        cardTitle: "Pupa",
    },
    {
        id:"caligo-illioneus",
        imageUrl: "http://atlasbioma.regilan.com.br/imagens/Mata%20Atl%C3%A2ntica/Borboleta,%20Borbolet%C3%A1rio,%20Porto%20Seguro.jpg",
        alt: "Imagem do Caligo illioneus",
        cardTitle: "Caligo illioneus",
    },
    {
        id:"eueides-isabella-dianasa",
        imageUrl: "http://atlasbioma.regilan.com.br/imagens/Mata%20Atl%C3%A2ntica/Borboleta,%20Borbolet%C3%A1rio,%20Porto%20Seguro2.jpg",
        alt: "Imagem do Eueides isabella dianasa",
        cardTitle: "Eueides isabella dianasa",
    },
]

const Home = () => {
    return (
      <Feed titleFeed="Destaques do dia">
        {itemListData.map(item => (
          <FeedItem
            key={item.id}
            id={item.id}
            imageUrl={item.imageUrl}
            alt={item.alt}
            cardTitle={item.cardTitle}
          />
        ))}
      </Feed>
    );
  };
  
  export default Home;