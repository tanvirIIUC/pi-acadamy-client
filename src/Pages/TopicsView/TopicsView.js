import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillEye, AiFillStar } from "react-icons/ai";


const TopicsView = ({ top }) => {
    const {title,image_url,rating,total_view}=top
    console.log(top)
    return (
        <div >
            
             
                
                <Card className='my-3 ' style={{ width: '18rem',height:'500px'}}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                       <p><small><AiFillStar /> {rating.number}</small> </p> 
                       <p> <small><AiFillEye/> {total_view}</small></p>
                       
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
               
            
         
        </div>
    );
};

export default TopicsView;