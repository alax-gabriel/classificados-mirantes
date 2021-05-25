import React, { Component } from 'react';
import api from '../api.js';
import { Grade } from './../styles.js';
import { Link } from 'react-router-dom';

class NavBar extends Component{

    state = {
        anuncios: [],
    }

    async componentDidMount(){
        const response = await api.get('/');
        this.setState({anuncios: response.data});
    }

    render(){
        const { anuncios } = this.state; 
        return(
            <Grade>
                <ul>
                    {anuncios.map(anuncio => (
                        <li key={anuncio._id}>
                            <Link to={`/anuncio/${anuncio._id}`}>{anuncio.title}</Link>
                        </li>
                    ))}
                </ul>
            </Grade>
        )
    }

};

export default NavBar;