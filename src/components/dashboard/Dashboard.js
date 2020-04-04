import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Notifications from './Notifications';
import ContactList from '../contacts/ContactList';



class Dashboard extends Component {
    render() {
        return (
            <Container className="dashboard">

                <Row>
                    <Col xs={8} sm={8}>

                        <ContactList />



                    </Col>
                    <Col xs={4} sm={4}>
                        <Notifications />
                    </Col>

                </Row>

            </Container>
        )
    }
}

export default Dashboard;