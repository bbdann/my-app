import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/3.jpg';
import Img4 from '../assets/4.jpg';
import Img5 from '../assets/5.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image                    
                    className="d-block w-100"
                    src={ Img1 }
                    height="600px"
                    alt="Img1"
                />
                <Carousel.Caption>
                    <h3>Best Image 1</h3>
                    <p>Best text ever 1</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    className="d-block w-100"
                    src={ Img2 }
                    height="600px"
                    alt="Img2"
                />
                <Carousel.Caption>
                    <h3>Best Image 2</h3>
                    <p>Best text ever 2</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    className="d-block w-100"
                    src={ Img3 }
                    height="600px"
                    alt="Img3"
                />
                <Carousel.Caption>
                    <h3>Best Image 3</h3>
                    <p>Best text ever 3</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    className="d-block w-100"
                    src={ Img4 }
                    height="600px"
                    alt="Img4"
                />
                <Carousel.Caption>
                    <h3>Best Image 4</h3>
                    <p>Best text ever 4</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image 
                    className="d-block w-100"
                    src={ Img5 }
                    height="600px"
                    alt="Img5"
                />
                <Carousel.Caption>
                    <h3>Best Image 5</h3>
                    <p>Best text ever 5</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
    
  }
}
