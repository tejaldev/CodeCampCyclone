import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import levelOneImage from '../pictures/level1.png'; // make sure it's .png, not .ong typo
import backgroundImage from '../pictures/backgroundLVL1.jpg';
import pivotImage from '../pictures/level1pivotimg.jpg'; // Your pivoting image


function LevelOnePage() {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleLevelTwo = () => {
    if (answer.trim().toUpperCase() === 'CARDINAL') {
      navigate('/leveltwo');
    } else {
      alert('Incorrect! Seek harder, adventurer!');
    }
  };

  const pageStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    textAlign: 'center',
    color: 'white',
  };
  

  return (
    <div style={pageStyle}>
  <img src={pivotImage} alt="Flipping Image" className="Pivot-image" />

  <h1 className="Level-title"> 🏰 Level One 🏰 </h1>

  <img src={levelOneImage} alt="Level One Clue" className="Level-image" />

  <div className="Level-input-area">
    <input
      type="text"
      placeholder="Type your answer..."
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      className="Level-input"
    />
  </div>

  <button className="Level-button" onClick={handleLevelTwo}>
    Level 2 ➡️
  </button>
</div>

  );
}

export default LevelOnePage;
