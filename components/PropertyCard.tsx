
import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  compact?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, compact }) => {
  return (
    <div className="bg-white group transition-all duration-500 hover:-translate-y-2">
      <Link to={`/property/${property.id}`} className="block relative overflow-hidden rounded-sm aspect-[4/3]">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black shadow-sm">
          {property.listingType === 'Sale' ? 'Private Sale' : 'Exclusive Lease'}
        </div>
      </Link>

      <div className="py-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center text-gray-300">
            <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] transition-colors group-hover:text-gray-500">{property.address}</span>
          </div>
          <Link to={`/property/${property.id}`}>
            <h3 className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors truncate">{property.title}</h3>
          </Link>
        </div>

        <div className="flex items-center space-x-6 pb-2 border-b border-gray-50">
          <div className="flex items-center border-r border-gray-100 pr-5">
            <span className="text-sm font-bold text-black">{property.beds}</span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest ml-2">Beds</span>
          </div>
          <div className="flex items-center border-r border-gray-100 pr-5">
            <span className="text-sm font-bold text-black">{property.baths}</span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest ml-2">Baths</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-bold text-black">{property.sqft}</span>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest ml-2">m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-bold text-black">
            ${property.price.toLocaleString()}
          </div>
          <Link
            to={`/property/${property.id}`}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
          >
            View Dossier
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
