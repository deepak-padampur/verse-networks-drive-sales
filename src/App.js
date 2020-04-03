import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavbarLayout from './components/UI/Layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarLayout />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
