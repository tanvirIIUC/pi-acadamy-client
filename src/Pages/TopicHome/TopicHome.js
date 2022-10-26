import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import LeftSideNev from '../Shares/LeftSideNev/LeftSideNev';
import Topics from '../Topics/Topices/Topics';

const TopicHome = () => {

    const [topics,setTopics]= useState([]);

    const [topicid,setTopicid]= useState(null);

    
    useEffect(()=>{
        fetch('http://localhost:5000/topics')
        .then(res => res.json())
        .then(data=>setTopics(data))
    },[])
    return (
        <div className='p-5'>
             <Container>
                <Row>
                    <Col lg="4">
                        {/* <LeftSideNev></LeftSideNev> */}

                        {/* <Outlet></Outlet> */}
                        <div>
            <h1>all topics : {topics.length}</h1>
            <div>
                {
                    topics.map(topic=> <p key={topic.id}>
                        <button onClick={()=>setTopicid(topic.id)}> {topic.name} </button>

                    {/* <Link to={`/topics/${topic.id}`}>{topic.name}</Link> */}
                    </p>)
                }
            </div>

        </div>
                       
                    </Col>
                    <Col lg="8">
                        <Topics topicid={topicid}></Topics>
                       
                    </Col>
                </Row>
                
            </Container>

        </div>
    );
};

export default TopicHome;