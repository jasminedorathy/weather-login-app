// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Weather App Login</h2>
      <input placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Sign In</button>
      <button className="guest" onClick={() => navigate('/dashboard')}>Continue as Guest</button>
    </div>
  );
}
export default Login;
