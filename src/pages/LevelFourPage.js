import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import levelFourImage from '../pictures/level4.png';
function LevelFourPage() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleFinish = () => {
    if (answer.trim().toUpperCase() === 'CODE') {
      navigate('/final');
    } else {
      alert('Incorrect! Think about binary codes, adventurer!');
    }
  };

  return (
    <div className="Page">
      <h1 className="Level-title">🛡️ Level Four 🛡️</h1>

      <div className="Level4-text">
        <p><strong>Question:</strong></p>
        <p className="Binary-text">00011 11111 00001 00011</p>
      </div>

      <div className="Level4-images">
        <img src={levelFourImage} alt="Level Four Clue 1" className="Level4-image" />
        
      </div>

      <div className="Level-input-area">
        <input
          type="text"
          placeholder="Type your answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="Level-input"
        />
      </div>

      <button className="Level-button" onClick={handleFinish}>
        🎉 Finish Quest 🎉
      </button>
    </div>
  );
}

export default LevelFourPage;
