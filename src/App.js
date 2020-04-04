import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarLayout from './components/UI/Layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ContactDetails from './components/contacts/ContactDetails';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import AddPerson from './components/contacts/AddContact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarLayout />
        <br /><br /><br />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/add" component={AddPerson} />

        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
