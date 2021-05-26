import React, { Component } from 'react';
import api from '../api.js';
import { Grade } from './../styles.js';
import { Link } from 'react-router-dom';
import CarouselContainer from './../components/CarouselContainer'


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
            <div>
                <CarouselContainer />
                <Grade>
                <ul>
                    {anuncios.map(anuncio => (
                        <li key={anuncio._id}>
                            <Link to={`/anuncio/${anuncio._id}`}><img src={`${anuncio.image}`} /></Link>
                        </li>
                    ))}
                </ul>
            </Grade>
            </div>
        )
    }

};

export default NavBar;