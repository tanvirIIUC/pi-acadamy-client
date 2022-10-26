import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Shares/Footer/Footer';
import Header from '../Pages/Shares/Header/Header';
import LeftSideNev from '../Pages/Shares/LeftSideNev/LeftSideNev';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default Main;