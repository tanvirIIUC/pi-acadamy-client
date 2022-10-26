import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            {/* <h2> topics : {topic?.length}</h2> */}
           
            {
                topic?.map(top => <TopicsView top={top}></TopicsView>)
            }

            {/* <h2>aaaaa{topicid}</h2> */}
        </div>
    );
};

export default Topics;