import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();

    const { image_url, title, details } = topic;


    return (
        <div className='text-center m-5' >
            <Container className='text-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default TopicDetails;