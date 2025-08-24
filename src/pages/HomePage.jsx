import '@/assets/css/LandingPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function HomePage() {
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const handleClick = () => {
    navigate("/dashboard3"); // Navigate to the dashboard page
  };

  return (
      <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to SaarAnalytics</h1>
          <p className="hero-subtitle">
            Discover the insights.
          </p>
          <div className="cta-buttons">
            <button className="cta-button" type="button" onClick={handleClick}>
              Explore 
            </button>          
          </div>
        </div>
      </div>

      {/* Animation and Visuals */}
      <div className="visuals">
        <div className="background-animation"/>
      </div>
    </div>
  );
}

export default HomePage;