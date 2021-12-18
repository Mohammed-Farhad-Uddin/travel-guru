import React, { useContext, useState } from 'react';
import logo from '../../Images/Logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { Button,Form, FormControl } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Header = () => {
 const [loginUser,setLoginUser]=useContext(UserContext)
 let history = useHistory();
 let location = useLocation();
 let { from } = location.state || { from: { pathname: "/" } };
 const handleSignOut=()=>{
     setLoginUser({
        isSignIn: false,
        displayName: '',
        email: '',
        password: '',
        phoneNumber: '',
        account:false
     })
     history.replace(from)
 }
    return (

        <nav>
            <ul>
                <li>
                    <Link to='/home'>
                        <img style={{ height: "80px" }} src={logo} alt="" />
                    </Link>
                </li>
                <li>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/'>News</Link>
                </li>
                <li>
                    <Link to='/'>Destination</Link>
                </li>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
                <li>
                    {
                        loginUser.isSignIn ? <Link to="/login"> <Button variant="danger" onClick={handleSignOut}>{loginUser.displayName}</Button></Link>  : <Link to='/login'><Button variant="warning">Login</Button>{' '}</Link> 
                    }
                </li>
            </ul>
        </nav>

    );
};

export default Header;