import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="galeria">
    <h1>Bem vindo ao Atlas</h1>
    <Link to="/mata-atlantica">
        <img 
          src="/imagens/Mata Atlântica/Planta07-Cravo de defunto Tagetes sp (1).jpg"
          alt="Mata Atlantica" 
        />
        <p>Mata Atlantica</p>
      </Link>
      <br></br>
    <Link to="/restinga">
      <img 
        src="/imagens/Restinga/Caraíva, Porto Seguro4.jpg" 
        alt="Restinga" 
      />
        <p>Restinga</p>
      </Link>
      <br></br>
      <Link to="/talassociclo">
        <img 
          src="/imagens/Talassociclo/Curstáceo serra grande.jpg" 
          alt="Talassociclo" 
        />
        <p>Talassociclo</p>
      </Link>
      <br></br>
  </div>
);

export default Home;
