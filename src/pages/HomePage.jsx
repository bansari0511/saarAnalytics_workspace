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
          <p className="hero-subtitle">Discover the insights with advanced analytics</p>
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

      {/* Contact Info Section */}
      <div className="contact-info">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have questions or need support? Reach out to us, and we’ll get back to you as soon as possible.
        </p>
        <div className="contact-details">
          <p><strong>Email:</strong> support@saaranalytics.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Data Street, Tech City, 4567</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
