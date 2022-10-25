import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shares/Footer/Footer';
import Header from '../Pages/Shares/Header/Header';
import LeftSideNev from '../Pages/Shares/LeftSideNev/LeftSideNev';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNev></LeftSideNev>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;