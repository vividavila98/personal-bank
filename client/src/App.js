import './App.css';
import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Register from './Pages/Register/Register.js';
import Login from './Pages/Login/Login.js';
import Profile from './Pages/Profile/Profile.js';
import NotFound from './Pages/NotFound/NotFound';
import { UserContext } from "./Helper/UserContext.js";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return ( 
    <Router>
      <UserContext.Provider value={value}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/account/register" exact component={Register}/>
        <Route path="/account/login" exact component={Login}/>
        <Route path="/account/profile" exact component={Profile}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
      </UserContext.Provider>
    </Router>
  );
}



export default App;
