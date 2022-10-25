import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { MDBIcon }from 'mdb-react-ui-kit';


const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark">
      <Container>
        <Navbar.Brand ><Link to='/'>Pi Acadamy</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            
            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
            <Nav.Link> <Link to='/top'>Topics</Link></Nav.Link>
            <Nav.Link href="">Blogs</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link> <Link to='/login'>Login</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-red' >
              {user?.displayName}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='text-red' >
             {/*  {
                user.photoURL ?
                <Image
                style={{height:'30px'}} roundedCircle
                src={user.photoURL}></Image>
                : <MDBIcon fab icon='github' size="lg"/>
              } */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;