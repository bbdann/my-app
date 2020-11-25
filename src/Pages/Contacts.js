import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Container style={{ width:'500px' }}>
                    <h1 className="text-center">Contact Us</h1>
                    <Form>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Email Address</Form.Label>
                            <Form.Control type="email" placeholder="example@mail.com" />
                            <Form.Text>We'll never share your email with enyone else</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Enter your text</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>

                    </Form>
                </Container>
            </div>
        )
    }
}
