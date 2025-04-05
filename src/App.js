import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginForm';
import SignupPage from './components/SignupForm';
import WelcomePage from './pages/WelcomePage'; // <-- Import WelcomePage
import LevelOnePage from './pages/LevelOnePage';
import LevelTwoPage from './pages/LevelTwoPage';
import LevelThreePage from './pages/LevelThreePage'; 
import LevelFourPage from './pages/LevelFourPage';
import FinalPage from './pages/finalPage';

function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <header className="App-header">
              <h1 className="App-title">CooverQuest</h1>
              <p className="App-subtitle">Unravel mysteries across ISU... Are you ready?</p>

              <div className="App-buttons">
                <button className="App-button" onClick={handleLogin}>Login</button>
                <button className="App-button" onClick={handleSignup}>Sign Up</button>
              </div>
            </header>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/welcome" element={<WelcomePage />} /> {/* <-- Add WelcomePage route */}
        <Route path="/levelone" element={<LevelOnePage />} />
        <Route path="/leveltwo" element={<LevelTwoPage />} />
        <Route path="/levelthree" element={<LevelThreePage />} />
        <Route path="/levelfour" element={<LevelFourPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </div>
  );
}

export default App;
