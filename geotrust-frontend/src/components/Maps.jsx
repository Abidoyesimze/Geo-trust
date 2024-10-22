import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Sample property data with coordinates
const properties = [
  { id: 1, name: 'Luxury Villa', lat: 34.0522, lng: -118.2437, description: 'A beautiful luxury villa with ocean views.' },
  { id: 2, name: 'Cozy Cabin', lat: 34.0522, lng: -118.2537, description: 'A cozy cabin surrounded by nature.' },
  { id: 3, name: 'Modern Apartment', lat: 34.0622, lng: -118.2637, description: 'A stylish apartment in the city center.' },
];

// Fix for marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});

const MapPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Property Map</h1>
        <MapContainer center={[34.0522, -118.2437]} zoom={13} className="h-96">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {properties.map((property) => (
            <Marker key={property.id} position={[property.lat, property.lng]}>
              <Popup>
                <strong>{property.name}</strong><br />
                {property.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
