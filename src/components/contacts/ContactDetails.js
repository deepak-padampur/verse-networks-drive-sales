import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
//The Editor goes here
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//Side nav with the full info of the person

const ContactDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (<Container>


        <Card className="text-center">
            <Card.Header>Person Name-{id}</Card.Header>
            <Card.Body>
                <Card.Title>Take a note</Card.Title>
                <CKEditor editor={ClassicEditor}></CKEditor>
                <Button variant="primary">Save</Button>
                <Button variant="primary">Cancel</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                <p>saved followup date from the calender</p><br />
                <p>By Deepak</p>


            </Card.Footer>
        </Card>

    </Container>)
}

export default ContactDetails;