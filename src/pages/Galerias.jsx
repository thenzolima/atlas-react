import React from 'react'
import { Link } from 'react-router-dom'
const Galerias = () => {
    return (
        <div className="galeria">
            <h3>Galerias</h3>
            <Link to={'/'}>
                <img src="https://www.atlasbioma.regilan.com.br/imagens/Mata%20Atl%C3%A2ntica/Borboleta,%20Borbolet%C3%A1rio,%20Porto%20Seguro8.jpg" alt="" />
            </Link>
            <p>Mata Atlântica</p>
        </div>
    )
}

export default Galerias