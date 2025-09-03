import React from "react";
import "./App.css";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
            stroke="#00C881"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="#00C881"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V22"
            stroke="#00C881"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1>Traffix</h1>
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#challenges">Challenges</a>
        <a href="#tech">Technology</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1 className="hero-headline">The Future of Urban Mobility, Today.</h1>
      <p className="subtitle">
        Harnessing real-time video analytics with <strong>YOLOv8</strong> and{" "}
        <strong>OpenCV</strong> to create smarter, safer, and more efficient
        city streets.
      </p>
      <button className="cta-button">Show Demo</button>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="features">
    <div className="container">
      <div className="section-title">
        <h2>Core Capabilities</h2>
        <p>An integrated suite of tools for intelligent traffic management.</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.61 15.192c.492-1.332.99-2.671 1.388-3.992.399-1.32.79-2.634 1.39-3.992M15.822 6.208c.553.44.553 1.157 0 1.596-.553.44-1.45.44-2.003 0-.553-.44-.553-1.156 0-1.596.553-.44 1.45-.44 2.003 0zM9.03 16.792c.553.44.553 1.156 0 1.596-.553.44-1.45.44-2.003 0-.553-.44-.553-1.157 0-1.596.553-.44 1.45-.44 2.003 0zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            </svg>
          </div>
          <h4>Real-Time Analytics</h4>
          <p>
            Monitor live traffic flow, count vehicles, and measure speed with
            unparalleled accuracy from any CCTV stream.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h4>AI-Powered Signal Control</h4>
          <p>
            Dynamically adjust signal timings based on real-time vehicle
            density, minimizing congestion and wait times.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
          </div>
          <h4>Traffic Density Heatmaps</h4>
          <p>
            Visualize traffic patterns and identify congestion hotspots across
            the city with intuitive, color-coded heatmaps.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <h4>Comprehensive Reporting</h4>
          <p>
            Generate detailed reports on traffic volume and junction performance
            to make data-driven infrastructure decisions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Challenges = () => (
  <section id="challenges" className="challenges">
    <div className="container">
      <div className="section-title">
        <h2>Tackling Urban Gridlock Head-On</h2>
        <p>
          From frustrating delays to environmental impact, we're solving the
          core issues of modern traffic.
        </p>
      </div>
      <div className="challenges-grid">
        <div className="challenge-card">
          <div className="challenge-header">
            <h4>The Challenge: Peak Hour Congestion</h4>
          </div>
          <div className="solution-header">
            <h4>Our Solution: Predictive Signal Timing</h4>
          </div>
          <p>
            Our AI analyzes traffic flow in real-time to dynamically adjust
            signal phases, dissolving bottlenecks before they form and reducing
            average commute times.
          </p>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <h4>The Challenge: Increased Emissions</h4>
          </div>
          <div className="solution-header">
            <h4>Our Solution: Minimized Vehicle Idling</h4>
          </div>
          <p>
            By creating a smoother traffic flow with fewer stops, AI
            TrafficSense directly cuts down on fuel consumption and harmful
            emissions from idling vehicles.
          </p>
        </div>

        <div className="challenge-card">
          <div className="challenge-header">
            <h4>The Challenge: Emergency Response Delays</h4>
          </div>
          <div className="solution-header">
            <h4>Our Solution: Dynamic Green Corridors</h4>
          </div>
          <p>
            The system can create prioritized green-light pathways for emergency
            vehicles, clearing traffic ahead and drastically reducing response
            times when seconds matter most.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Technology = () => (
  <section id="tech" className="technology">
    <div className="container">
      <div className="section-title">
        <h2>Powered by Cutting-Edge AI</h2>
        <p>
          We use state-of-the-art computer vision models for maximum precision.
        </p>
      </div>
      <div className="tech-logos">
        <div className="tech-logo">
          <h4>YOLOv8</h4>
          <span>Object Detection</span>
        </div>
        <div className="tech-logo">
          <h4>OpenCV</h4>
          <span>Computer Vision</span>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="footer">
    <div className="container">
      <p>&copy; 2025 Traffix. All Rights Reserved.</p>
      <p>Revolutionizing traffic, one intersection at a time.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Challenges />
        <Technology />
      </main>
      <Footer />
    </div>
  );
}

export default App;
