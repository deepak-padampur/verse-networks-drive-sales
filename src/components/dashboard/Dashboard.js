import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Notifications from './Notifications';
import ContactList from '../contacts/ContactList';
//connect dashboard component with the redux store
import { connect } from 'react-redux';

//Sync data to firestore
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        const { contacts } = this.props
        return (
            <Container className="dashboard">

                <Row>
                    <Col xs={8} sm={8}>

                        <ContactList contacts={contacts} />



                    </Col>
                    <Col xs={4} sm={4}>
                        <Notifications />
                    </Col>

                </Row>

            </Container>
        )
    }
}
//whi accessch property are added to the props of this component so that we can
const mapStateToProps = (state) => {
    console.log(state);
    return {
        contacts: state.firestore.ordered.contacts

    }
}

// export default connect(mapStateToProps)(Dashboard);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'contacts'
    }])
)(Dashboard)