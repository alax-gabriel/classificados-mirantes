import React from 'react';
import { Container } from '../styles';
import Header from '../components/Header';
import MenuAside from '../components/MenuAside';
import AdAside from '../components/AdAside';
import Footer from '../components/Footer';

function Anuncie(){
    return(
        <Container>
            <Header />
            <div>
                Anuncie aqui!
            </div>
            <MenuAside />
            <AdAside />
            <Footer />
        </Container>
    )
}

export default Anuncie;