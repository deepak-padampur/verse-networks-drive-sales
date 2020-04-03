import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Notifications from './Notifications';
import ContactList from '../contacts/ContactList';

class Dashboard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <ContactList />

                    </Col>
                    <Col sm={12} md={6} >
                        <Notifications />

                    </Col>
                </Row>

            </Container >
        )
    }
}

export default Dashboard;