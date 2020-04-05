import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
//The Editor goes here
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//Side nav with the full info of the person


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ContactDetails = (props) => {
    // console.log(props);
    // const id = props.match.params.id;
    const { contact } = props;
    if (contact) {
        return (<Container>


            <Card className="text-center">
                <Card.Header>Person Name-{contact.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Take a note</Card.Title>
                    <CKEditor editor={ClassicEditor}></CKEditor><br />
                    <Card.Title>Follow Up Date</Card.Title>
                    <Button variant="primary" style={{ marginRight: "10%" }}>Save</Button>
                    <Button variant="primary">Cancel</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <p>organization:{contact.organization}</p>
                    <p>saved followup date from the calender</p><br />
                    <p>By Deepak</p>


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