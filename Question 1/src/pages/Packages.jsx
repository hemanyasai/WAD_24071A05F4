import React from 'react';
import PackageCard from '../components/PackageCard';
import { imagesArray } from '../images';

function Packages() {
  const tours = [
    {
      id: 1,
      title: 'Tropical Paradise',
      description: 'Relax in maldives.',
      price: 1299,
      image: imagesArray[1]
    },
    {
      id: 2,
      title: 'Grand Tour',
      description: 'Explore the historic streets.',
      price: 2450,
      image: imagesArray[2]
    },
    {
      id: 3,
      title: 'Himalayan Trek',
      description: 'Treak in mountains.',
      price: 899,
      image: imagesArray[3]
    },
    {
      id: 4,
      title: 'African Safari',
      description: 'Watch Animals and Nature.',
      price: 3100,
      image: imagesArray[4]
    }
  ];

  return (
    <div>
      <div className="page-header">
        <h2>Our Tour Packages</h2>
        <p>Find the perfect getaway from our carefully curated selection</p>
      </div>

      <div className="packages-grid">
        {tours.map(tour => (
          <PackageCard 
            key={tour.id}
            title={tour.title}
            description={tour.description}
            price={tour.price}
            image={tour.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Packages;
