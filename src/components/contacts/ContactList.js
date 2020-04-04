import React from 'react';
// import { Card } from 'react-bootstrap';
import ContactSummary from './ContactSummary';
//Tabel can be made here
const ContactList = ({ contacts }) => {
    return (
        <>

            {/* <ContactSummary />
            <ContactSummary />
            <ContactSummary />
            <ContactSummary />
            <ContactSummary />
            <ContactSummary /> */}
            {/* map through the contacts details */}
            {contacts && contacts.map(contact => {
                return (
                    <ContactSummary contact={contact} key={contact.id} />
                )

            })}

        </>


    )
}

export default ContactList;