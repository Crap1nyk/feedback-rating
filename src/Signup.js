import React, { useState } from 'react';
import { useAuth } from './AuthContext'; // Assumed you have context for auth
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Styling

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignup, loading, error } = useAuth(); // AuthContext handles signup
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup(email, password, name); // Pass the name too
    if (!error) {
      navigate('/login'); // After signup, move to login page
    }
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <p className="signup-prompt">
          Already have an account? <a href="/login" className="signup-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
