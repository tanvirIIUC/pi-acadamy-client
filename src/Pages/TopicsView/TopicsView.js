import React from 'react';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import TopicDetails from '../TopicDetails/TopicDetails';





const TopicsView = ({ top }) => {
    const { title, image_url, rating, total_view, details, _id } = top

    
    

    return (
        <div >



            <Card className='my-3 ' style={{ width: '18rem', height: '550px' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <>{details.slice(0, 100) + '...'} </>
                                :
                                details
                        }
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <p><small><AiFillStar /> {rating.number}</small> </p>
                        <p> <small><AiFillEye /> {total_view}</small></p>

                    </div>
                    <div className='text-center'>
                       
                        
                        <Link className='fw-bold' to={`/details/${_id}`} >
                            see details
                        </Link>
                    </div>
                     
                </Card.Body>
            </Card>


            
        </div>
    );
};

export default TopicsView;