import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText, CardFooter } from 'reactstrap'

const ContactList = () => {
    return (
        <div className="contact-list section">
            <div className="contact-summary">
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>CardTitle</CardTitle>
                        <CardText>Card Text</CardText>

                    </CardBody>
                    <CardFooter>Date goes here,2am</CardFooter>
                </Card>
                <Card>
                    <CardHeader>Header</CardHeader>
                    <CardBody>
                        <CardTitle>CardTitle</CardTitle>
                        <CardText>Card Text</CardText>

                    </CardBody>
                    <CardFooter>Date goes here,2am</CardFooter>
                </Card>

            </div>
        </div>
    )
}

export default ContactList;

