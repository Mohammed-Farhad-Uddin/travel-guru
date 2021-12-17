import React from 'react';
import img1 from '../../Images/Image/Rectangle 26.png'
import img2 from '../../Images/Image/Rectangle 27.png'
import img3 from '../../Images/Image/Rectangle 28.png'
import star from '../../Images/Icon/star_1_.png'
import './Info.css'
import { Link } from 'react-router-dom';
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap';
import logo from '../../Images/Logo.png';
import Header from '../Header/Header';


const Info = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header></Header>
            <hr style={{ border: '1px solid gray' }} />
            <h5 style={{ marginLeft: '20px' }}>Lorem ipsum dolor sit amet.</h5>
            <h2 style={{ marginLeft: '20px', marginBottom: "20px" }}>Stay's in Cox's Bazar</h2>

            <Row>
                <Col sm={12} md={7}>
                    <div className='info'>
                        <div>
                            <img className='img' src={img1} alt="" />
                        </div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p style={{ color: 'black', fontWeight: 'lighter' }}>Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet.</p>
                            <p><span><img style={{ height: '20px' }} src={star} alt="" /></span>&nbsp; <small style={{ color: 'black' }}>4.9(20)</small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'black' }}>$34/night</span></p>
                        </div>
                    </div>
                    <div className='info'>
                        <div>
                            <img className='img' src={img2} alt="" />
                        </div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>

                            <p style={{ color: 'black', fontWeight: 'lighter' }}>Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet.</p>
                            <p><span><img style={{ height: '20px' }} src={star} alt="" /></span> &nbsp;<small style={{ color: 'black' }}>4.9(20)</small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'black' }}>$34/night</span></p>
                        </div>
                    </div>
                    <div className='info'>
                        <div >
                            <img className='img' src={img3} alt="" />
                        </div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>

                            <p style={{ color: 'black', fontWeight: 'lighter' }}>Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet. <br />
                                Lorem ipsum dolor sit amet.</p>
                            <p><span><img style={{ height: '20px' }} src={star} alt="" /></span>&nbsp; <small style={{ color: 'black' }}>4.9(20)</small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'black' }}>$34/night</span></p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={5} >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                        style={{
                            width: "700px",
                            height: "500px",
                            frameBorder: "0",
                            border: "0",
                            allowFullScreen: "",
                            
                            tabIndex: "0",
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Info;