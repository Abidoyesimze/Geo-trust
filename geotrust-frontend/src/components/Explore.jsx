
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import 'animate.css'; 
import luxury from "../assets/luxury.jpeg";
import luxury2 from "../assets/luxury2.jpeg";
import luxury3 from "../assets/luxury3.jpeg";
import modern from "../assets/modern.jpeg";
import modern2 from "../assets/modern2.jpeg";
import modern3 from "../assets/modern3.jpeg";
import beach from "../assets/beach.jpeg";
import beach2 from "../assets/beach2.jpeg";
import beach3 from "../assets/beach3.jpeg";

const properties = [
  {
    id: 1,
    name: 'Luxury Villa',
    location: 'Beverly Hills, CA',
    price: '$2,500,000',
    images: [luxury, luxury2, luxury3],
    description: 'A stunning luxury villa with a large swimming pool, garden, and modern architecture. Located in Beverly Hills with a beautiful view.',
  },
  {
    id: 2,
    name: 'Modern Apartment',
    location: 'New York, NY',
    price: '$850,000',
    images: [modern, modern2, modern3],
    description: 'A sleek and modern apartment located in the heart of New York City. Close to major attractions, with breathtaking views of the skyline.',
  },
  {
    id: 3,
    name: 'Beach House',
    location: 'Miami, FL',
    price: '$1,750,000',
    images: [beach, beach2, beach3 ],
    description: 'A beautiful beach house with direct access to the ocean, offering serene sunsets and a peaceful environment in Miami.',
  },
];

const ExploreProperties = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeIn">Explore Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInUp"
          >
            {/* Property Carousel */}
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {property.images.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt={property.name} className="w-full h-64 object-cover" />
                </div>
              ))}
            </Carousel>
            {/* Property Info */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{property.name}</h2>
              <p className="mt-2 text-gray-600">{property.location}</p>
              <p className="mt-2 text-gray-800 font-bold">{property.price}</p>
              <p className="mt-4 text-gray-600">{property.description}</p>
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Buy Land
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProperties;
