import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firstImage from '../pictures/level3hint.png'; // <-- your first image
import secondImage from '../pictures/level3.png'; // <-- your second image

function LevelThreePage() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleLevelFour = () => {
    if (answer.trim().toUpperCase() === '1041ECPE') {
      navigate('/levelfour');
    } else {
      alert('Incorrect! Seek deeper into the clues, brave adventurer!');
    }
  };

  return (
    <div className="Page">
      <h1 className="Level-title">🕯️ Level Three 🕯️</h1>

      <div className="Level3-images">
        <img src={firstImage} alt="Level Three Clue 1" className="Level3-image" />
        <img src={secondImage} alt="Level Three Clue 2" className="Level3-image" />
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

      <button className="Level-button" onClick={handleLevelFour}>
        Level 4 ➡️
      </button>
    </div>
  );
}

export default LevelThreePage;
