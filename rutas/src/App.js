import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
return (<h1>Welcome User {params.username }</h1>)
}

function App() {

  const [state, setState] = useState(false);

  const loginHandle = () =>{
    setState(prevState =>({ 
      loggedIn: !prevState.loggedIn})
    )}
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              {color: "green" }}>
                Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" exact activeStyle={
              {color: "green" }}>
                About
            </NavLink>
          </li>

          <li>
            <NavLink to="/user/Yusbel" exact activeStyle={
              {color: "green" }}>
                User Yusbel
            </NavLink>
          </li>

          <li>
            <NavLink to="/user/Tao" exact activeStyle={
              {color: "green" }}>
               User Tao
            </NavLink>
          </li>
        </ul>
        <input type="button" value={state.loggedIn ? ("Log out") : ("Log in")} onClick={loginHandle} />
        <Route path="/" exact render={
          () => {
            return (<h1>Welcome Home</h1>)
          }
        } />

        <Route path="/about" exact render={
          () => {
            return (<h1>Welcome About</h1>)
          }
        } />

        <Route path="/user/:username" render={({match})=>(
          state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/" />)
        )} />
      
      </div>
    </Router>
  );
}

export default App;
