import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (username && password) {
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Signup successful! Please login.');
      navigate('/login');
    } else {
      alert('Please enter username and password!');
    }
  };

  return (
    <div className="Page">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="Input"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="Input"
      />
      <br />
      <button className="App-button" onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignupPage;
