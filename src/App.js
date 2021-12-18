import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Info from './Components/Info/Info';

export const UserContext = createContext()


function App() {
  const [loginUser, setLoginUser] = useState({
    isSignIn: false,
    displayName: '',
    email: '',
    password: '',
    phoneNumber: '',
    account:false,
    errorMsg:''
  })


  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/info">
            <Info></Info>
          </PrivateRoute>
          <Route exact path='/book'>
            <Book></Book>
          </Route>
          <Route exact path='/info'>
            <Info></Info>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
