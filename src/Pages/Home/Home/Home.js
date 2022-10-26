import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='py-5' >
            <Container className='text-center py-5'>
                <div className='mx-5'>
                    <h1>Welcome to Pi Acadamy</h1>
                    <p>This is Learning Website.Its has six Topics . There are C Programing, C++ Programing, Python Programing,
                        Java Programing, Php Programing, and MathLab Programing.
                    </p>
                    <small>If You want to see Courses Please Log in </small>
                    <div className='py-5'>
                        <Button variant="outline-primary"><Link to='/login'>login</Link> </Button>{' '}
                        <Button variant="outline-primary"><Link to='/register'>Register</Link></Button>{' '}
                    </div>
                </div>


            </Container>
        </div>



    );
};

export default Home;