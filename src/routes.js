import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Anuncie from './pages/Anuncie';
import AnuncioId from './pages/AnuncioId';


// const RotaDinamica = ({ path: PathDinamico, ...rest}) => (
//     <Route path=`${}`/>
// );

class Routes extends Component{
    render(){
        const buscaID = (props) =>{
            return <AnuncioId {...props}/> 
        }
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/anuncie" component={Anuncie} />
                    <Route path="/anuncio/:anuncioId" render={buscaID} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;