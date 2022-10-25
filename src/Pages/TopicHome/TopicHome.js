import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNev from '../Shares/LeftSideNev/LeftSideNev';
import Topics from '../Topics/Topices/Topics';

const TopicHome = () => {
    return (
        <div>
             <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNev></LeftSideNev>
                       
                    </Col>
                    <Col lg="8">
                        <Topics></Topics>
                    <Outlet></Outlet>
                    </Col>
                </Row>
                
            </Container>

        </div>
    );
};

export default TopicHome;