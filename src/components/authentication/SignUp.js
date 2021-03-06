import React, { Component } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

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

                    <Col md={6} sm={12} xs={12}>
                        <Card >
                            <Card.Header className="text-center">Sign Up</Card.Header>
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
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" onChange={this.handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" >
                                        SIGNUP
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

export default SignUp
