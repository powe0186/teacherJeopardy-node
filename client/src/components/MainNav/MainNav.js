import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignInButton from '../SingInButton/SignInButton';

function MainNav( { user, handleLogout } ) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Teacher Jeopardy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="categories" class="logged-in">Categories</Nav.Link>
            <Nav.Link href="mygames" class="logged-in">My Games</Nav.Link>
            <Nav.Link href="clues" class="logged-in">My Clues</Nav.Link>
            <Nav.Link href="CreateClue" class="logged-in">Create Clues</Nav.Link>
            <Nav.Link href="CreateCategory" class="logged-in">Create Category</Nav.Link>
            <Nav.Link href="CreateGame" class="logged-in">Create Game</Nav.Link>
            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            <Nav.Link >
              <SignInButton user={user} handleLogout={handleLogout} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;