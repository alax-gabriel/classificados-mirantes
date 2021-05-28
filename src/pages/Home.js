import React from 'react';
import { Container } from '../styles';
import Header from '../components/Header';
import Main from '../components/Main';
import MenuAside from '../components/MenuAside';
import AdAside from '../components/AdAside';
import Footer from '../components/Footer';

function Home(){
    return(
        <Container>
            <Header />
            <Main />
            <MenuAside />
            <AdAside />
            <Footer />
        </Container>
    )
}

export default Home;