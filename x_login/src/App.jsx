import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in both fields');
      return;
    }

    if (username === 'user' && password === 'password') {
      setMessage('Welcome, ' + username);
      setError('');
      setSubmitted(true);
    } else {
      setMessage('');
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {!submitted ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          <div className="error">{error}</div>
        </form>
      ) : (
        <div>
          <div className="message">{message}</div>
        </div>
      )}
    </div>
  );
}

export default App;
