import React, { Component } from 'react';
import { Media, Container, Col, Row, ListGroup, Card } from 'react-bootstrap';


export default class Blog extends Component {
    render() {
        return (
              <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://lh3.googleusercontent.com/WrBvOY07H7-s7HBXAjxwftmhbRC9E6U0jFl-84rniR1UIJVDY4V9El19hkEWtA=d"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quam vero magni vitae, 
                                    qui ea unde repellendus voluptatum, itaque soluta vel iure sunt! Minima sapiente quos 
                                    porro voluptates eius at.</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://lh3.googleusercontent.com/WrBvOY07H7-s7HBXAjxwftmhbRC9E6U0jFl-84rniR1UIJVDY4V9El19hkEWtA=d"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quam vero magni vitae, 
                                    qui ea unde repellendus voluptatum, itaque soluta vel iure sunt! Minima sapiente quos 
                                    porro voluptates eius at.</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://lh3.googleusercontent.com/WrBvOY07H7-s7HBXAjxwftmhbRC9E6U0jFl-84rniR1UIJVDY4V9El19hkEWtA=d"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quam vero magni vitae, 
                                    qui ea unde repellendus voluptatum, itaque soluta vel iure sunt! Minima sapiente quos 
                                    porro voluptates eius at.</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://lh3.googleusercontent.com/WrBvOY07H7-s7HBXAjxwftmhbRC9E6U0jFl-84rniR1UIJVDY4V9El19hkEWtA=d"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quam vero magni vitae, 
                                    qui ea unde repellendus voluptatum, itaque soluta vel iure sunt! Minima sapiente quos 
                                    porro voluptates eius at.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam quam vero magni vitae, 
                                    qui ea unde repellendus voluptatum
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
              </Container>
        );
    }
}
