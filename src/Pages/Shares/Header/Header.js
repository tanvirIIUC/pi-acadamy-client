import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to='/'>Pi Acadamy</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            
            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/top'>Topics</Link></Nav.Link>
            <Nav.Link href="/top">Blogs</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link> <Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;