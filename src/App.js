import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import NavbarLayout from './components/UI/Layout/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarLayout />
      </div>

    </BrowserRouter>
  );
}

export default App;
