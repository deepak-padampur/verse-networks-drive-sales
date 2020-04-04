
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import SignedInLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';


const NavbarLayout = () => {
    return (


        <Navbar bg="dark" variant="light" fixed="top">
            <Navbar.Brand>

                <Link to="/" style={{ textDecoration: "none", color: "white" }}>Drive Sales</Link>
            </Navbar.Brand>
            <Nav className="nav-links">
                <SignedOutLinks />
                <SignedInLinks />

            </Nav>



        </Navbar>

    )
}


export default NavbarLayout
