
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap'

//output links
const SignedInLinks = () => {
    return (

        <>

            <Nav.Link>
                <NavLink to="/add" style={{ textDecoration: "none" }}>Add Person</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/" style={{ textDecoration: "none" }}>Logout</NavLink>
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/"><Button style={{ borderRadius: "50%" }}> DD</Button></NavLink>
            </Nav.Link>

        </>
    )
}


export default SignedInLinks
