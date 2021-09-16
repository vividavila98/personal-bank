import './App.css';
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import NotFound from './pages/NotFound.js';
import PrivateRoute from './hooks/PrivateRoute';
import { UserContext } from "./hooks/UserContext.js";
import useFindUser from './hooks/useFindUser';

function App() {

  const { user, setUser } = useFindUser();

  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return ( 
    <Router>
      <UserContext.Provider value={value}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/account/register" exact component={Register}/>
        <Route path="/account/login" exact component={Login}/>
        <Route path="/account/profile" exact component={Profile}/>
        {/* <PrivateRoute path="/account/profile" component={Profile}/> */}
        
        <Route path="*" exact component={NotFound}/>
      </Switch>
      </UserContext.Provider>
    </Router>
  );
}



export default App;
