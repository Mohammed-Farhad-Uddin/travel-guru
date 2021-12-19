import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../Images/Icon/google.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase-config';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';




const Login = () => {
    const app = initializeApp(firebaseConfig);
    const [anAccount, setAnAccount] = useState(false)
    const [loginUser, setLoginUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                // console.log(user);
                const { displayName, email, phoneNumber } = result.user
                setLoginUser({
                    isSignIn: true,
                    displayName,
                    email,
                    phoneNumber,
                })

                history.replace(from)
                fetch('http://localhost:5000/loginUser', {
                    method: 'POST',
                    body: JSON.stringify(loginUser),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                // .then((response) => response.json())
                // .then((json) => console.log(json));

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    //  const handleSignOut = () => {
    //         const auth = getAuth();
    //         signOut(auth)
    //         .then(() => {
    //                 setLoginUser({
    //                     isSignIn: false,
    //                     displayName: '',
    //                     email: '',
    //                     password: '',
    //                     phoneNumber: '',
    //                     account: false,
    //                     errorMsg: ''
    //                 })
    //                 history.replace(from)
    //             }).catch((error) => {
    //                 // An error happened.
    //             });
    //     }


    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === "email") {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = emailRegex.test(String(e.target.value).toLowerCase())
            // console.log(isValid)
            // console.log(e.target.value)
        }
        if (e.target.name === "password") {
            isValid = e.target.value.length > 5 && /\d{1}/.test(e.target.value)
            // console.log(isValid)
            // console.log(e.target.value)
        }
        if (isValid) {
            let newUser = { ...loginUser }
            newUser[e.target.name] = e.target.value
            setLoginUser(newUser)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginUser.displayName && loginUser.email && loginUser.password && loginUser.phoneNumber) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user)
                    verifyEmail();
                    updateUserName(loginUser.displayName, loginUser.phoneNumber)
                    const newIsSignInUser = { ...loginUser }
                    newIsSignInUser.isSignIn = true;
                    newIsSignInUser.account = false;
                    setLoginUser(newIsSignInUser)
                    // console.log(loginUser)
                    history.replace(from)
                    fetch('http://localhost:5000/loginUser', {
                        method: 'POST',
                        body: JSON.stringify(loginUser),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                })
                .catch((error) => {
                    if (error) {
                        const haveAccount = { ...loginUser }
                        haveAccount.account = true;
                        haveAccount.errorMsg = error.message
                        setLoginUser(haveAccount)
                    }
                });
        }

        if (anAccount && loginUser.email && loginUser.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    const newIsSignInUser = { ...loginUser }
                    newIsSignInUser.displayName = user.displayName;
                    newIsSignInUser.phoneNumber = user.phoneNumber;
                    newIsSignInUser.isSignIn = true;
                    newIsSignInUser.account = false;
                    setLoginUser(newIsSignInUser)
                    // console.log(loginUser)

                    history.replace(from)
                
                    fetch('http://localhost:5000/loginUser', {
                        method: 'POST',
                        body: JSON.stringify(loginUser),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                })
                .catch((error) => {
                    if (error) {
                        const haveAccount = { ...loginUser }
                        haveAccount.account = true;
                        haveAccount.errorMsg = error.message
                        setLoginUser(haveAccount)
                    }
                });
        }
    }

    const updateUserName = (name, phone) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: phone
        }).then(() => {
            // Profile updated!
            console.log('Profile Updated')
        }).catch((error) => {
            console.log(error)
        });
    }
    const verifyEmail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
            });
    }

    return (
        <div style={{ background: "white" }}>
            <Header></Header>
            <div style={{ width: '400px', margin: "20px auto", border: '1px solid gray', padding: '20px', borderRadius: '10px' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group style={{ display: anAccount ? "none" : "block" }} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your FullName</Form.Label>
                        <Form.Control onBlur={handleBlur} name='displayName' type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleBlur} name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handleBlur} name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group style={{ display: anAccount ? "none" : "block" }} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control onBlur={handleBlur} name='phoneNumber' type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree terms and condition" required />
                    </Form.Group>
                    {
                        anAccount ? <Button variant="primary" type="submit"> Log In </Button> : <Button variant="primary" type="submit"> Sign Up </Button>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Already have <Link onClick={() => setAnAccount(!anAccount)}> an account
                    </Link>
                </Form>
                <div style={{ textAlign: "center", marginTop: "20px", fontSize: "15px" }}>
                    {
                        loginUser.account && <p style={{ color: "red" }}>{loginUser.errorMsg}</p>
                    }
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button style={{ marginBottom: "20px" }} onClick={handleGoogleSignIn} variant="outline-primary" type="submit">
                    <img style={{ height: '30px', marginRight: '20px' }} src={google} alt="" />
                    Google Sign Up
                </Button>
            </div>

        </div>
    );
};

export default Login;           