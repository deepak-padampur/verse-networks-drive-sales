import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Container, Row, Col, Button } from 'reactstrap';

const SignedOutLinks = () => {
    return (
        <Nav>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <NavItem>
                            <NavLink to='/'><Button>Signup</Button></NavLink>
                        </NavItem>
                    </Col>
                    <Col md={6}>
                        <NavItem>
                            <NavLink to='/'><Button>Login</Button></NavLink>
                        </NavItem>
                    </Col>


                </Row>
            </Container>

        </Nav>

    )
}

export default SignedOutLinks;