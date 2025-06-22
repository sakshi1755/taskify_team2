import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <h1 style={{ fontFamily: 'bree serif' }}>Taskify</h1>
      <h2>Sign in to your account</h2>
      <p>Or <Link to="/register">register for a new account</Link></p>
      <form>
        <input type="email" placeholder="Email address" required /><br />
        <input type="password" placeholder="Password" required />
        <div className="class">
          <span style={{ textAlign: 'center' }}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </span>
          <a href="#" style={{ textAlign: 'center', marginLeft: '9%' }}>
            Forgot your password?
          </a>
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
