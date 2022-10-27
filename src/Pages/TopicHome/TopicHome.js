import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';


import Topics from '../Topics/Topices/Topics';

const TopicHome = () => {

    const [topics, setTopics] = useState([]);

    const [topicid, setTopicid] = useState(null);
    const [topicname,settopicname] = useState('')


    useEffect(() => {
        fetch('https://pi-acadamy-server.vercel.app/topics')
            .then(res => res.json())
            .then(data => setTopics(data))
    }, [])

    
   
    return (
        <div className='p-5'>
            <Container>
                <Row>
                    <Col lg="4">
                        

                       
                        <div>
                            <h1  className='text-primary '>All Topics</h1>
                            <div>
                                {
                                    topics.map(topic => <p key={topic.id}>
                                        <ButtonGroup vertical>

                                        

                                        </ButtonGroup>
                                        <Button style={{ width: '18rem'}} onClick={() => 
                                            {
                                                setTopicid(topic.id)
                                                settopicname(topic.name)
                                            }
                                            
                                            }> {topic.name} </Button>

                                        
                                    </p>)
                                }
                                
                            </div>

                        </div>

                    </Col>
                    <Col lg="8">
                        <Topics topicid={topicid} name={topicname}></Topics>

                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default TopicHome;