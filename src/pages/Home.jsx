import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="galeria">
      <Link to="/restinga">
        <img src="../imagens/Restinga/Caraíva, Porto Seguro4.jpg" alt="" />
      </Link>
      <p>Restinga</p>
    </div>
  );
};

export default Home;
