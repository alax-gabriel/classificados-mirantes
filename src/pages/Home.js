import React from 'react';
import TopBar from './../components/TopBar'
import CarouselContainer from './../components/CarouselContainer'
import NavBar from './../components/NavBar'

function Home(){
    return(
        <div>
            <TopBar />
            <CarouselContainer />
            <NavBar />
        </div>
    )
}

export default Home;