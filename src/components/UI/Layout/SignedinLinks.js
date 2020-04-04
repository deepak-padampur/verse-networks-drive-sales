
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

//output links
const SignedInLinks = () => {
    return (

        <>

            <Nav.Link>
                <NavLink to="/">Add Person</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/">Logout</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/">Profile</NavLink>
            </Nav.Link>

        </>
    )
}


export default SignedInLinks
