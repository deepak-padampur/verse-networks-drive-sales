//Add the contacts of persons
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createContact } from '../../store/actions/contactActions';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';


class AddPerson extends Component {
    state = {
        name: '',
        organization: '',
        phoneNumber: '',
        email: '',
        label: ''

    }
    handleChange = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }
    handleSubmit = (e) => {

        e.preventDefault();
        // console.log(this.state);
        this.props.createContact(this.state);


    }
    render() {
        return (
            <Container >
                <Row className="justify-content-md-center">

                    <Col md={6} sm={12} xs={12}>
                        <Card >
                            <Card.Header className="text-center">Add A New Person</Card.Header>
                            <Card.Body>
                                <Form onSubmit={this.handleSubmit} class="form">
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" onChange={this.handleChange} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="organization">
                                            <Form.Label>Organization</Form.Label>
                                            <Form.Control type="text" placeholder="Organization Name" onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="tel" placeholder="Phone Number" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="mail" placeholder="Email" onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Row>


                                        <Form.Group as={Col} controlId="label">
                                            <Form.Label>Label</Form.Label>
                                            <Form.Control as="select" value="Customer" onChange={this.handleChange}>
                                                <option>Customer</option>
                                                <option>Hot Deal</option>
                                            </Form.Control>
                                        </Form.Group>


                                    </Form.Row>



                                    <Button variant="primary" type="submit">
                                        Save
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

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: (contact) => dispatch(createContact(contact))
    }
}

export default connect(null, mapDispatchToProps)(AddPerson)


