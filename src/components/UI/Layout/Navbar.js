import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';
import SignedInLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';
const NavbarLayout = () => {
    return (

        <Navbar color="dark" dark expand="md">
            <Container>
                <NavbarBrand color="light">
                    <Link to="/">Drive Sales</Link>
                </NavbarBrand>
                <SignedOutLinks />
                <SignedInLinks />

            </Container>

        </Navbar>

    )
}

export default NavbarLayout;