import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="galeria">
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
  </div>
);

export default Home;
