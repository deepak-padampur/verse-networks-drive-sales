
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import SignedInLinks from './SignedinLinks';
import SignedOutLinks from './SignedoutLinks';

import { connect } from 'react-redux';


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

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}
export default connect(mapStateToProps)(NavbarLayout)
