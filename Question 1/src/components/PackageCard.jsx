import React from 'react';
import { Link } from 'react-router-dom';

function PackageCard({ title, description, price, image }) {
  return (
    <div className="package-card">
      <div className="package-image">
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        ) : (
          <div className="package-image-placeholder">[ Image: {title} ]</div>
        )}
      </div>
      <div className="package-content">
        <h3 className="package-title">{title}</h3>
        <p className="package-desc">{description}</p>
        <div className="package-footer">
          <span className="package-price">₹{price}</span>
          <Link to="/booking" className="btn-book">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
