import React, { Component } from 'react';
import api from '../api.js';
import { L_main, Grade } from '../styles.js';
import { Link } from 'react-router-dom';
import CarouselContainer from './CarouselContainer'


class Main extends Component{

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
            <L_main>
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
            </L_main>
        )
    }

};

export default Main;