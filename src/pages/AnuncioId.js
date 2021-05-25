import React, { Component, useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import api from './../api';


class AnuncioId extends Component{ 
    constructor(props){
        super(props);
    }
    
    state = {
        anuncio: {}
    }
        
    // componentDidMount(){
    //     const anuncioID = this.props.match.params.anuncioId;
    //     this.setState({anuncio: anuncioID,})
    // }

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
                <TopBar />
                <h1>{anuncio.title}</h1>
            </div>
        )
    }
    
}

export default AnuncioId;

