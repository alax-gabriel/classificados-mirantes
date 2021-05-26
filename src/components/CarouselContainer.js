import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Slide } from './../styles'

import image1 from './../assets/images/mgp.jpg'
import image2 from './../assets/images/mdl.jpg'
import image3 from './../assets/images/memp.png'

const CarouselContainer = () => {
    return(
    <Slide>
        <Carousel prevLabel="" nextLabel="" className="carousel-container">
            <Carousel.Item>
                <a href="#" className="carousel-link">
                    <img
                    className="d-blockw-100"
                    src={image1}
                    alt="First slide"
                    />
                </a>
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#" className="carousel-link">
                    <img
                    className="d-blockw-100"
                    src={image2}
                    alt="Second slide"
                    />
                </a>
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#" className="carousel-link">
                    <img
                    className="d-blockw-100"
                    src={image3}
                    alt="Third slide"
                    />
                </a>

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Slide>
    )
}

export default CarouselContainer;


