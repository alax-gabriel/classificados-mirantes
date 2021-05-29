import React from 'react';
import { L_header } from '../styles.js';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <L_header>
            <div className="l_header_menu_button">
                =
            </div>
            <div className="l_header_title">
                <Link to="/"  >
                    <h1>CLASSIFICADOS</h1>  
                    <h1 className="teste">MIRANTES</h1>
                </Link>
            </div>
            <div className="l_header_adup_button">
                <Link to="/anuncie">Anuncie aqui</Link>
            </div>  
        </L_header>                   
    )
}

export default Header;