import React from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../Images/Icon/google.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {

    return (
        <div style={{background:"white"}}>
            <Header></Header>
            <div style={{ width: '400px', margin: "20px auto", border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control name='displayName' type="text" placeholder="Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name='phoneNumber' type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Already have <Link> an account
                    </Link>
                </Form>
            </div>
            <div style={{display:"flex",position:"relative",left:"100px"}}>
            <hr style={{width:"50px"}} /> <p>Or</p>  <hr style={{width:"0px"}} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="outline-primary" type="submit">
                    <img style={{ height: '30px', marginRight: '20px' }} src={google} alt="" />
                    Google Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Login;           