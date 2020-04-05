import React from 'react';

import { Card, Table, Badge } from 'react-bootstrap';
//format date
import moment from 'moment';
//This must be a table row
const ContactSummary = ({ contact }) => {
    return (
        <>

            <Card>
                <Card.Header className="text-center">id-{contact.id}</Card.Header>
                <Card.Body>

                    <Card.Title>{contact.name}<Badge variant="warning">{contact.label}</Badge></Card.Title>
                    <Card.Text>
                        <Table striped bordered hover variant="light" responsive>
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Organization</th>
                                    <th>Phone</th>
                                    <th>Email</th>

                                    <th>Addition Date</th>
                                    <th>Follow Up Date</th>
                                </tr>
                            </thead>
                            <tbody>

                                {/* <ContactList contacts={contacts} /> */}
                                <tr>


                                    <td>{contact.name}</td>
                                    <td>{contact.organization}</td>
                                    <td>{contact.phoneNumber}</td>
                                    <td>{contact.email}</td>

                                    <td>{moment(contact.createdAt.toDate()).calendar()}</td>
                                    <td>{moment(contact.createdAt.toDate()).calendar()}</td>
                                </tr>

                            </tbody>
                        </Table>


                    </Card.Text>
                </Card.Body>
                <Card.Footer>

                    <small className="text-muted">Notes:-{contact.desc}  <Badge pill variant="info">
                        Add a note
  </Badge></small>
                </Card.Footer>
            </Card>
            <br />










        </>

    )
}


export default ContactSummary;