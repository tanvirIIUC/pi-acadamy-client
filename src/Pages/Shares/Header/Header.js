import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { FaUserAlt } from 'react-icons/fa';
import ReactHover from 'react-hover/dist/ReactHover';
import { Trigger } from 'react-hover';
import Hover from 'react-hover/dist/lib/Hover';



const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate();
  // console.log(user)


  const signOut = () => {
    logOut()
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='bg-dark' variant="dark">
        <Container>
          <img className='me-2'
            src="favicon.ico"
            width="30"
            height="30"

            alt="React Bootstrap logo"
          />
          <Navbar.Brand ><Link to='/'>Pi Acadamy</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


              <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
              <Nav.Link> <Link to='/blogs'>Blogs</Link></Nav.Link>
              <Nav.Link> <Link to='/faq'>FAQ</Link></Nav.Link>
              <Nav.Link>
                <DarkModeToggle
                  onChange={setIsDarkMode}
                  checked={isDarkMode}
                  size={40}
                />
              </Nav.Link>

            </Nav>
            <Nav>
              {/* <Nav.Link> <Link to='/login'>Login</Link></Nav.Link> */}
              <Nav.Link eventKey={2} href="#memes" className='text-red' >
                {
                  user && user.uid ?
                    <>
                      <Link className='me-2' to='/top'>Courses</Link>

                      <span className='me-2' > {user?.displayName}</span>
                      {/* <Button onClick={signOut} variant="outline-primary">Logout </Button>{' '} */}
                      <Link className='me-2' onClick={signOut}> Logout</Link>

                      {/* <button onClick={signOut}>logout</button> */}
                    </>
                    :
                    <>
                      <Link className='me-2' to='/login'>Login</Link>
                    </>
                }
                {/* <span> {user?.displayName} <button onClick={signOut}>logout</button></span> */}

              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className='text-red' >

                <ReactHover >
                  <Trigger type="trigger">
                    
                {
                  user && user.photoURL ?
                    <Image

                      className='me-2'
                      style={{ height: '30px' }} roundedCircle
                      src={user.photoURL}></Image>
                    : <FaUserAlt />
                }
         
                  </Trigger>
                  <Hover type="hover">
                    <h5 className='text-primary'>{user?.displayName}</h5>
                  </Hover>
                </ReactHover>
               

              {/*   {
                  user && user.photoURL ?
                    <Image

                      className='me-2'
                      style={{ height: '30px' }} roundedCircle
                      src={user.photoURL}></Image>
                    : <FaUserAlt />
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