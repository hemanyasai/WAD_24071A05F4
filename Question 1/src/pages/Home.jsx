import React from 'react';
import { Link } from 'react-router-dom';
import { img1 } from '../images';

function Home() {
  return (
    <div className="hero-section" style={{ padding: '0', justifyContent: 'center' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>Discover Your Next Adventure</h2>
      <p style={{ marginBottom: '1rem' }}>Explore the world.</p>
      
      <div className="hero-image" style={{ textAlign: 'center', margin: '1rem 0', width: '100%' }}>
        <img src={img1} alt="Stunning Landscape" style={{ width: '100%', height: 'calc(100vh - 380px)', minHeight: '200px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/packages" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2rem' }}>
          Explore Packages
        </Link>
      </div>
    </div>
  );
}

export default Home;
