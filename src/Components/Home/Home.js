import React, { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button, Col, Container,  Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Header from '../Header/Header';
import SwiperPicture from '../Swiper/SwiperPicture';



const Home = () => {
    const history = useHistory();

    const handleBooking = () => {
        history.push("/book")

    }

    return (
        <>
            <Container fluid className='background'>
                <Header></Header>

                <Row>
                    <Col sm={6} md={4}>
                        <div className="booking">
                            <h1>COX'S BAZAR</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex id minima reiciendis dolorem hic</p>
                            <Button onClick={handleBooking} variant="warning">Booking<ArrowRightAltIcon></ArrowRightAltIcon> </Button>{' '}
                        </div>
                    </Col>

                    <Col sm={6} md={8}>
                        <SwiperPicture></SwiperPicture>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Home;







