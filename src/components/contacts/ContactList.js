import React from 'react';

import ContactSummary from './ContactSummary';
import { Link } from 'react-router-dom';
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

                    <Link to={'/contact/' + contact.id} style={{ textDecoration: "none" }}>
                        <ContactSummary contact={contact} key={contact.id} />
                    </Link>

                )

            })}

        </>


    )
}

export default ContactList;