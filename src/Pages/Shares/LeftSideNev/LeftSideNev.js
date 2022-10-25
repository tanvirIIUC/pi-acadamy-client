import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNev = () => {
    const [topics,setTopics]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/topics')
        .then(res => res.json())
        .then(data=>setTopics(data))
    },[])
    return (
        <div>
            <h1>all topics : {topics.length}</h1>
            <div>
                {
                    topics.map(topic=> <p key={topic.id}>

                    <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftSideNev;