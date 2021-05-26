import React from 'react';
import { MenuTopo } from './../styles.js';
import { Link } from 'react-router-dom';


const TopBar = () => {
    return(
        <MenuTopo>
            <div>
                <Link to="/" className="titulo">
                    <h1>CLASSIFICADOS</h1>  
                    <h1 className="teste">MIRANTES</h1>
                </Link>
            </div>
                <Link to="/anuncie">Anuncie aqui</Link>
  
        </MenuTopo>                   
    )
}

export default TopBar;