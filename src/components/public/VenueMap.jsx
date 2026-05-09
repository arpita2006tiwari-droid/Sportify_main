import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'framer-motion';
import { Star, MapPin, Navigation } from 'lucide-react';
import { venues } from '../../data/dummyData';

// Fix for default marker icon in Leaflet + React
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

// Custom Blue Marker for Sportify
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Add realistic coordinates to venues
const venuesWithCoords = venues.map((v, i) => {
  const coords = [
    [19.2312, 72.9714], // Thane
    [18.9986, 72.8258], // Worli
    [19.0178, 72.8584], // Wadala
    [19.2183, 72.9845], // Hiranandani Thane
    [19.1634, 72.8512], // Goregaon
    [19.1136, 72.8697], // Andheri
    [19.1726, 72.9425], // Mulund
    [19.1036, 72.9248]  // Vikhroli
  ];
  return {
    ...v,
    coords: coords[i] || [19.0760, 72.8777]
  };
});


const VenueMap = () => {
  const [activeVenue, setActiveVenue] = useState(null);

  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-text-main"
          >
            Find Venues <span className="gradient-text-blue">Near You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Explore our interactive map to discover premium sports facilities across Mumbai.
          </motion.p>
        </div>

        <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-[var(--border-color)]">
          <MapContainer 
            center={[19.0760, 72.8777]} 
            zoom={11} 
            scrollWheelZoom={false}
            className="h-full w-full z-10"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {venuesWithCoords.map((venue) => (
              <Marker 
                key={venue.id} 
                position={venue.coords} 
                icon={customIcon}
                eventHandlers={{
                  click: () => setActiveVenue(venue),
                }}
              >
                <Popup className="premium-popup">
                  <div className="w-64 overflow-hidden rounded-xl bg-background text-text-main">
                    <img src={venue.image} alt={venue.name} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg leading-tight text-text-main">{venue.name}</h4>
                        <span className="flex items-center gap-1 text-xs font-bold text-accent-500">
                          <Star size={12} className="fill-accent-500" />
                          {venue.rating}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted mb-4 flex items-center gap-1">
                        <MapPin size={12} className="text-primary-500" />
                        {venue.location}
                      </p>
                      <button className="w-full btn-primary py-2 text-xs">
                        Book Now
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Map Overlay Controls */}
          <div className="absolute bottom-10 left-10 z-20 space-y-4">
            <button className="glass-card-premium p-4 flex items-center gap-3 hover:bg-primary-500 hover:text-white transition-all group">
              <Navigation size={20} />
              <span className="font-bold text-sm">Locate Me</span>
            </button>
          </div>

          <div className="absolute top-10 right-10 z-20 hidden md:block">
            <div className="glass-card-premium p-6 w-64">
              <h4 className="font-black text-sm uppercase tracking-widest mb-4 text-text-main">Legend</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <span className="text-sm font-medium text-text-secondary">Basketball Courts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <span className="text-sm font-medium text-text-secondary">Gymnastics Centers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-sm font-medium text-text-secondary">Swimming Pools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
