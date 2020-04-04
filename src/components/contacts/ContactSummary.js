import React from 'react';

import { Card } from 'react-bootstrap';
const ContactSummary = ({ contact }) => {
    return (
        <>

            <Card>
                <Card.Header className="text-center">Header</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Person Name</Card.Title> */}
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>
                        {/* Description */}
                        {contact.notes}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <br />
        </>

    )
}


export default ContactSummary;