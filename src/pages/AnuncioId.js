import React, { Component, useState, useEffect } from 'react';
import Header from '../components/Header';
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
            <div>
                <Header/>
                <h1>{anuncio.title}</h1>
                <h2>{anuncio.description}</h2>
            </div>
        )
    }
    
}

export default AnuncioId;

