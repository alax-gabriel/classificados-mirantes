import React, { Component, useState, useEffect } from 'react';
import TopBar from '../components/TopBar';


class AnuncioId extends Component{ 
    constructor(props){
        super(props);
    }
    
    state = {
        anuncio: "",
    }
    
    
    componentDidMount(){
        const anuncioID = this.props.match.params.anuncioId;
        this.setState({anuncio: anuncioID,})
        console.log("teste de console!");
    }
    render(){
        const { anuncio } = this.state;
        return(
            <div>
                <TopBar />
                <h1>{anuncio}</h1>
            </div>
        )
    }

}
    
export default AnuncioId;

