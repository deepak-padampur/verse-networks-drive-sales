import React, { Component } from 'react';
import { Container, Card, Form,Button, Row, Col } from 'react-bootstrap';


class SignIn extends Component {
    state = {
        email: '',
        password: ''

    }
    handleChange = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }
    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state);


    }
    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">

                    <Col md={4} sm={12} xs={12}>
                        <Card >
                            <Card.Header className="text-center">Sign In</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />

                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" >
                                        LOGIN
                                      </Button>
                                </Form>
                             


                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

            </Container >
        )
    }
}

export default SignIn
