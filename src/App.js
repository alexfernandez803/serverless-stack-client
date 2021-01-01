import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Routes from './Routes';

import './App.css';

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg='light' expand='md' className='mb-3'>
        <LinkContainer to="/">
          <Navbar.Brand className="font-weigth-bold text-muted"> 
              Scratch
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/login">
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>

      </Routes>
    </div>
  );
}

export default App;