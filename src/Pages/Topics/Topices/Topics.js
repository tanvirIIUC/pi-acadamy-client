import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import TopicsView from '../../TopicsView/TopicsView';
// import { useLoaderData } from 'react-router-dom';

const Topics = ({ topicid }) => {

    const [topic, setTopic] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/course/${topicid}`)
            .then(res => res.json())
            .then(data => setTopic(data))
    }, topicid)

    return (
        <div>
            <h2> Topic View</h2>
            <Row className='row row-cols-lg-2'>
                
                {
                topic?.map(top => <TopicsView top={top}></TopicsView>)
                }
              
            </Row>
           
            

            
        </div>
    );
};

export default Topics;