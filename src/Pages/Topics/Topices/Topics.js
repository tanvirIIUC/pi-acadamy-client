import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


import TopicsView from '../../TopicsView/TopicsView';
import { FaRegFileAlt } from 'react-icons/fa';
//  import { useLoaderData } from 'react-router-dom';

const Topics = ({ topicid,name }) => {

    const [topic, setTopic] = useState([])

    useEffect(() => {
        fetch(`https://pi-acadamy-server.vercel.app/course/${topicid}`)
            .then(res => res.json())
            .then(data => setTopic(data))
    }, topicid)
     
    
    const ref= useRef()

    return (
        <div>
            <div className='d-flex '>
                <h2>{name}</h2>
                
                <ReactToPrint trigger={() => <Button className='ms-2' >Download</Button>} content={()=>ref.current}/>
            </div>
           
             
            <Row ref={ref} className='row row-cols-lg-2'>
                
                {
                topic?.map(top => <TopicsView top={top}></TopicsView>)
                }
              
            </Row>
           
            

            
        </div>
    );
};

export default Topics;