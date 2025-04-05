import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LevelTwoPage() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleLevelThree = () => {
    if (answer.trim().toUpperCase() === 'CYPHER') {
      navigate('/levelthree');
    } else {
      alert('Incorrect! Decode the message carefully, adventurer!');
    }
  };

  return (
    <div className="Page">
      <h1 className="Level-title">🕯️ Level Two 🕯️</h1>

      <div className="Level2-text">
        <p><strong>Encrypted Message:</strong></p>
        <p className="Encoded-text">"Hs csy pmoi Dyqfe, psso yrhiv xli vssqfe!"</p>
        <p className="Hint-text">Hint: Et tu, Brute?</p>
      </div>

      <div className="Level-input-area">
        <input
          type="text"
          placeholder="Type the decoded message..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="Level-input"
        />
      </div>

      <button className="Level-button" onClick={handleLevelThree}>
        Level 3 ➡️
      </button>
    </div>
  );
}

export default LevelTwoPage;
