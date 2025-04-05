// src/components/WelcomePage.js

import { useNavigate } from 'react-router-dom';
import backgroundImage from '../pictures/backgroundCodeCamp.png'; // <-- IMPORT the image

function WelcomePage() {
  const navigate = useNavigate();

  const goToLevelOne = () => {
    navigate('/levelone');
  };

  const pageStyle = {
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'contain', /* <= CONTAIN instead of cover */
    backgroundPosition: 'top center', /* <= Focus top center */
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black', /* fallback if image doesn't cover whole screen */
    textAlign: 'center',
    padding: '3rem 2rem',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  

  return (
    <div style={pageStyle}>
  <div className="scroll-box">
    <div className="scroll-content">
      {/* <h1 className="Quest-title">🏰 COOVER QUEST 🏰</h1> */}
      <p className="Quest-intro">Brave adventurers, hearken to the rules of this sacred journey:</p>

      <ul className="Quest-rules">
        <li>📜 PWEASE do not use the scrolls of the Internet.</li>
        <li>🎉 Revel in merriment and have fun!</li>
        <li>🏰 Stay within the mighty halls of Coover.</li>
        <li>🛡️ Quest alone or unite in noble teams.</li>
      </ul>

      <p className="Quest-footer">If you lose your lives, we are not responsible! Terms and conditions apply.</p>
      <button className="Quest-button" onClick={goToLevelOne}>⚔️ Begin Level 1 ⚔️</button>
    </div>
  </div>
</div>


  );
}

export default WelcomePage;
