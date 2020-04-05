import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
//The Editor goes here
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//for parsing the editor data
import ReactHtmlParser from 'react-html-parser';
//date picker

import DateTimePicker from 'react-datetime-picker';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ContactDetails = (props) => {
    // console.log(props);
    // const id = props.match.params.id;
    const { contact } = props;
    const [value, setValue] = useState("");
    const [date, setDate] = useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const handleOnChange = (event, editor) => {
        console.log(editor.getData());
        const data = editor.getData();
        setValue(data);
    }
    const handleDateChange = (date) => {
        setDate(date);
    }
    if (contact) {
        return (<Container>


            <Card >
                <Card.Header className="text-center">Person Name-{contact.name}</Card.Header>
                <Card.Body className="text-center">
                    <Card.Title>Take a note</Card.Title>
                    <CKEditor editor={ClassicEditor} onChange={handleOnChange} /><br />
                    <Card.Title>Follow Up Date</Card.Title>
                    <DateTimePicker onChange={handleDateChange} value={date} /><br /><br />
                    <Button variant="primary" style={{ marginRight: "10%" }}>Save</Button>
                    <Button variant="primary">Cancel</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <h3>Notes being saved:</h3>
                    <div>{ReactHtmlParser(value)}</div>

                    <p>organization:{contact.organization}</p>
                    <p>saved followup date from the calender</p><br />



                </Card.Footer>
            </Card>

        </Container>)

    } else {
        return (
            <Container className="text-center">
                <p>Loading Details...</p>

            </Container>
        )

    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const contacts = state.firestore.data.contacts;
    //individual contact
    const contact = contacts ? contacts[id] : null;
    return {

        contact: contact

    }
}

//contact syn with state
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'contacts'
    }])
)(ContactDetails);