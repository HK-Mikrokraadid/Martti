import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ marginBottom: '10px' }}>
      <Container>
        <Navbar.Brand as={Link} to='/'>Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
            <Nav.Link as={Link} to='/users'>Users</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            {loggedIn ? (
              <Logout />
            ) : (
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
