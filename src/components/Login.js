import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory

import '../styles/login.css';

export default function Login() {
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const toggleForm = (isRegister) => {
    setIsRegisterActive(isRegister);
  };

  const handleLogin = () => {
    // Perform login logic, then navigate to '/landing'
    navigate('/landing');
  };

  const handleSignup = () => {
    // Perform signup logic, then navigate to '/landing'
    navigate('/landing');
  };

  return (
    <div className={`wrapper ${isRegisterActive ? 'active' : ''}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>
      <div className={`form-box login ${!isRegisterActive ? 'active' : ''}`}>
        <h2 className="animation" style={{ '--i': 0, '--j': 21 }}>Signin</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box animation" style={{ '--i': 1, '--j': 22 }}>
            <input type="text" required />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 2, '--j': 23 }}>
            <input type="password" required />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 }} onClick={handleLogin}>Signin</button>
          <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 }}>
            <p>Don't have an account?<Link to="#" className="register-link" onClick={() => toggleForm(true)}>Signup</Link></p>
          </div>
        </form>
      </div>
      <div className={`form-box register ${isRegisterActive ? 'active' : ''}`}>
        <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
            <input type="text" required />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
            <input type="text" required />
            <label>Email</label>
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box animation" style={{ '--i': 20, '--j': 3 }}>
            <input type="password" required />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 }} onClick={handleSignup}>Signup</button>
          <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
            <p>Already have an account?<Link to="#" className="login-link" onClick={() => toggleForm(false)}>Login</Link></p>
          </div>
        </form>
      </div>
      <div className={`info-text ${isRegisterActive ? 'register' : 'login'}`}>
        <h2 className="animation" style={{ '--i': 0, '--j': 20 }}>Welcome back!</h2>
        <p className="animation" style={{ '--i': 1, '--j': 21 }}>{isRegisterActive ? 'to Health Care.' : 'to Health Care'}</p>
      </div>
    </div>
  );
}
