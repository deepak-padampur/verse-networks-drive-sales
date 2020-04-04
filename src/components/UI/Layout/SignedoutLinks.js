
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

//output links
const SignedOutLinks = () => {
    return (

        <>

            <Nav.Link>
                <NavLink to="/">Signup</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/">Login</NavLink>
            </Nav.Link>


        </>
    )
}


export default SignedOutLinks
