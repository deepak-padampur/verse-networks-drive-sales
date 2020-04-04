
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

//output links
const SignedOutLinks = () => {
    return (

        <>

            <Nav.Link>
                <NavLink to="/signup" style={{ textDecoration: "none" }}>Signup</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/signin" style={{ textDecoration: "none" }}>Login</NavLink>
            </Nav.Link>


        </>
    )
}


export default SignedOutLinks
