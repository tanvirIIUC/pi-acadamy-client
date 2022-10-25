import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='' >
                <Container className='text-center py-5'>
                    <div>
                       <h1>Welcome to Pi Acadamy</h1>
                       <Button variant="outline-primary"><Link to='/login'>login</Link> </Button>{' '}
                       <Button variant="outline-primary"><Link to='/register'>Register</Link></Button>{' '}
                    </div>
                    
                </Container>
        </div>
           
           
        
    );
};

export default Home;