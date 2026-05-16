import React from 'react';
import { imagesArray } from '../images';

function Gallery() {
  const images = [
    { id: 1, caption: 'Sunset' },
    { id: 2, caption: 'Eiffel Tower, Paris' },
    { id: 3, caption: 'Japan' },
    { id: 4, caption: 'Alps' },
    { id: 5, caption: 'Bungalows' },
    { id: 6, caption: 'Peru' },
    { id: 7, caption: 'Safari' },
    { id: 8, caption: 'Northern Lights' }
  ];

  return (
    <div>
      <div className="page-header">
        <h2>Travel Gallery</h2>
        <p>Get inspired by these breathtaking destinations</p>
      </div>

      <div className="gallery-grid">
        {images.map(img => (
          <div key={img.id} className="gallery-item">
            <div className="gallery-image" style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img 
                src={imagesArray[(img.id - 1) % imagesArray.length]} 
                alt={img.caption} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div className="gallery-caption">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
