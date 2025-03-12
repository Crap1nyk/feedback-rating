import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Local loading state
  const [error, setError] = useState(null); // Local error state if you want independent control

  const { handleSignup } = useAuth(); // Just use the method, handle the rest here
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await handleSignup(email, password, name);

      // You can log the response to confirm what's coming back from Firebase
      console.log('Firebase response:', response);

      setSuccess(true);
      setLoading(false);

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error('Signup failed:', err);
      setError(err.message || 'Signup failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <img src="/OIP.jpeg" alt="Logo" className="logo" />
        </div>

        <h2 className="form-title">Create Account</h2>

        {success ? (
          <div className="success-message">
            ✅ Signup successful! Redirecting to login...
          </div>
        ) : (
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {!success && (
          <p className="signup-prompt">
            Already have an account? <a href="/login" className="signup-link">Login</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
