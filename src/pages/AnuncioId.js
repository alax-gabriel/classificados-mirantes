import React, { Component, useState, useEffect } from 'react';
import { Container } from '../styles';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import AdAside from '../components/AdAside';
import Footer from '../components/Footer';
import api from './../api';


class AnuncioId extends Component{ 
    constructor(props){
        super(props);
    }
    
    state = {
        anuncio: {}
    }

    async componentDidMount(){
        const id = this.props.match.params.anuncioId;
        console.log(id)
    
        const response = await api.get(`/anuncio/${id}`);
        this.setState({anuncio: response.data,});
    }

    render(){
        const { anuncio } = this.state;
        return(
            <Container>
                <Header/>
                <div>
                    <h1>{anuncio.title}</h1>
                    <h2>{anuncio.description}</h2>
                </div>
                <MenuAside />
                <AdAside />
                <Footer />
            </Container>
        )
    }
    
}

export default AnuncioId;

