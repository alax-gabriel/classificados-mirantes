import React from 'react';
import { L_header } from '../styles.js';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <L_header>
            <div>
                <Link to="/" className="titulo">
                    <h1>CLASSIFICADOS</h1>  
                    <h1 className="teste">MIRANTES</h1>
                </Link>
            </div>
                <Link to="/anuncie">Anuncie aqui</Link>
  
        </L_header>                   
    )
}

export default Header;