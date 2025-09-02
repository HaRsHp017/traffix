import React from "react";
import "./App.css";

// You can use a library like 'react-feather' for icons, but for simplicity, we'll use text placeholders.

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
            stroke="#48BB78"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 7L12 12L22 7"
            stroke="#48BB78"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V22"
            stroke="#48BB78"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1>AI TrafficSense</h1>
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#tech">Technology</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h2>The Future of Urban Mobility, Today.</h2>
      <p className="subtitle">
        Harnessing real-time video analytics with <strong>YOLOv8</strong> and{" "}
        <strong>OpenCV</strong> to create smarter, safer, and more efficient
        city streets.
      </p>
      <button className="cta-button">Request a Demo</button>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="features">
    <div className="container">
      <div className="section-title">
        <h3>Core Capabilities</h3>
        <p>An integrated suite of tools for intelligent traffic management.</p>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <h4>Real-Time Analytics</h4>
          <p>
            Monitor live traffic flow, count vehicles by class, and measure
            average speed with unparalleled accuracy from any CCTV stream.
          </p>
        </div>
        <div className="feature-card">
          <h4>AI-Powered Signal Control</h4>
          <p>
            Dynamically adjust traffic signal timings based on real-time vehicle
            density, minimizing congestion and reducing wait times.
          </p>
        </div>
        <div className="feature-card">
          <h4>Traffic Density Heatmaps</h4>
          <p>
            Visualize traffic patterns and identify congestion hotspots across
            the city with intuitive, color-coded heatmaps.
          </p>
        </div>
        <div className="feature-card">
          <h4>Comprehensive Reporting</h4>
          <p>
            Generate detailed reports on traffic volume, peak hours, and
            junction performance to make data-driven infrastructure decisions.
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
        <h3>Powered by Cutting-Edge AI</h3>
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
      <p>&copy; 2025 AI TrafficSense. All Rights Reserved.</p>
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
        <Technology />
      </main>
      <Footer />
    </div>
  );
}

export default App;
