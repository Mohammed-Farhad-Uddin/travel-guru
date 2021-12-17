import React from 'react';
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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/book">
          <Book></Book>
        </PrivateRoute> */}
          <Route exact path='/book'>
            <Book></Book>
          </Route>

          <Route exact path='/info'>
            <Info></Info>
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;
