import React from 'react';

import { Card } from 'react-bootstrap';
//format date
import moment from 'moment';
//This must be a table row
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

                    <small className="text-muted">{moment(contact.createdAt.toDate()).calendar()}</small>
                </Card.Footer>
            </Card>
            <br />
        </>

    )
}


export default ContactSummary;