import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const LoginForm = () => {
  return (
    <form id="signin" name="signin" method="post" action="/">
      <div className="form-group">
        <label htmlFor="SignInEmail">Email address</label>
        <input type="email" className="form-control" id="SignInEmail" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="SignInPassword">Password</label>
        <input type="password" className="form-control" id="SignInPassword" placeholder="Password" />
      </div>
      <Link to="/home"><button type="submit" className="btn btn-primary" data-dismiss='modal'>Submit</button></Link>
    </form>

  )
}

export default LoginForm;
