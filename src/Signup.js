import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Manual timeout before redirecting (example: 3 seconds)
    setTimeout(() => {
      navigate('/login');
    }, 3000); // Change 3000 to 0 if you want instant redirect
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img src="/OIP.jpeg" alt="Logo" className="logo" />
        </div>

        <h2 className="form-title">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="input-group">
            <label htmlFor="name" className="input-label">Name</label>
            <input
              type="text"
              id="name"
              className="input-field"
              placeholder="Enter your name"
              disabled={loading}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email" className="input-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              disabled={loading}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter your password"
              disabled={loading}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >
            {loading ? 'Redirecting...' : 'Sign Up'}
          </button>
        </form>

        <p className="signup-prompt">
          Already have an account?{' '}
          <a href="/login" className="signup-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
