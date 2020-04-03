import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Container, Row, Col, Button } from 'reactstrap';

const SignedInLinks = () => {
    return (
        <Nav>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <NavItem>
                            <NavLink to='/'><Button>AddContact</Button></NavLink>
                        </NavItem>
                    </Col>
                    <Col md={4}>
                        <NavItem>
                            <NavLink to='/'><Button>Logout</Button></NavLink>
                        </NavItem>
                    </Col>
                    <Col md={4} >
                        <NavItem>
                            <NavLink to='/'><Button>Profile</Button></NavLink>
                        </NavItem>
                    </Col>

                </Row>
            </Container>

        </Nav>

    )
}

export default SignedInLinks;