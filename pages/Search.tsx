
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { Property } from '../types';

const Search: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>(MOCK_PROPERTIES);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    price: 'any',
    beds: 'any',
    type: 'any'
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = [...MOCK_PROPERTIES];

      // Filter by Type
      if (filters.type !== 'any') {
        filtered = filtered.filter(p => p.type === filters.type);
      }

      // Filter by Beds
      if (filters.beds !== 'any') {
        filtered = filtered.filter(p => p.beds >= parseInt(filters.beds));
      }

      // Filter by Price Range
      if (filters.price !== 'any') {
        if (filters.price === '500000+') {
          filtered = filtered.filter(p => p.price >= 500000);
        } else {
          const [min, max] = filters.price.split('-').map(Number);
          filtered = filtered.filter(p => p.price >= min && p.price <= max);
        }
      }

      setProperties(filtered);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden bg-white">
      {/* Search Header / Filters */}
      <div className="bg-white border-b border-gray-100 p-6 z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 items-center">
          <div className="flex-grow max-w-sm relative group">
            <input
              type="text"
              placeholder="Address, Neighborhood, District..."
              className="w-full pl-10 pr-4 py-3 border-b border-gray-100 focus:border-black outline-none transition-colors font-bold text-sm bg-transparent placeholder:text-gray-300"
            />
            <svg className="absolute left-0 top-3.5 h-4 w-4 text-gray-400 group-focus-within:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          <div className="flex gap-4">
            <select
              className="border-none px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors focus:ring-0"
              onChange={(e) => handleFilterChange('price', e.target.value)}
              value={filters.price}
            >
              <option value="any">Price (Any)</option>
              <option value="0-100000">$0 - $100k</option>
              <option value="100000-500000">$100k - $500k</option>
              <option value="500000+">$500k+</option>
            </select>

            <select
              className="border-none px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors focus:ring-0"
              onChange={(e) => handleFilterChange('beds', e.target.value)}
              value={filters.beds}
            >
              <option value="any">Beds (Any)</option>
              <option value="1">1+ Bed</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
            </select>

            <select
              className="border-none px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] bg-gray-50 rounded-sm cursor-pointer hover:bg-gray-100 transition-colors focus:ring-0"
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="any">Property Type</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
              <option value="Townhome">Townhome</option>
              <option value="Borey">Borey</option>
              <option value="Shophouse">Shophouse</option>
              <option value="Land">Land</option>
            </select>
          </div>

          <div className="ml-auto flex bg-gray-50 p-1 rounded-sm">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${viewMode === 'map' ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
            >
              Map
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* List View */}
        <div className={`${viewMode === 'grid' ? 'w-full lg:w-3/5' : 'hidden lg:block lg:w-2/5'} h-full overflow-y-auto bg-white p-6 lg:p-10 no-scrollbar`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl font-bold text-black">{properties.length} Properties</h2>
                <p className="text-gray-400 text-sm mt-1 font-medium">Available listings in Cambodia</p>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest">
                <span className="text-gray-400">Sort:</span>
                <select className="bg-transparent border-none font-bold text-black focus:ring-0 cursor-pointer p-0">
                  <option>Newest</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-gray-50 rounded-sm h-[450px] animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {properties.length > 0 ? (
                  properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))
                ) : (
                  <div className="col-span-full py-32 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4">No Listings Found</p>
                    <button
                      onClick={() => setFilters({ price: 'any', beds: 'any', type: 'any' })}
                      className="text-black font-bold uppercase tracking-widest text-xs border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Map View Placeholder -> Real Google Map */}
        <div className={`${viewMode === 'map' ? 'w-full lg:w-full' : 'hidden lg:block lg:w-2/5'} relative bg-gray-50 border-l border-gray-100 overflow-hidden`}>
          <div className="absolute inset-0">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Phnom%20Penh,Khmer&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          {/* Real Map Indicator (Optional, but adds to premium feel) */}
          <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-sm border border-gray-100 shadow-2xl max-w-xs">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-1">Interactive Map</h4>
            <p className="text-[9px] text-gray-500 font-medium leading-relaxed">Showing real-time property clusters in Phnom Penh Metropolitan Area.</p>
          </div>

          {/* Mock Map Pins - More Premium Styling */}
          {properties.map(property => (
            <Link
              key={property.id}
              to={`/property/${property.id}`}
              className="absolute cursor-pointer hover:z-20 group"
              style={{
                top: `${15 + (Math.random() * 70)}%`,
                left: `${15 + (Math.random() * 70)}%`
              }}
            >
              <div className="bg-black text-white px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest shadow-xl group-hover:bg-gray-800 transition-all relative">
                ${property.price >= 100000 ? `${(property.price / 1000).toFixed(0)}K` : property.price}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-black group-hover:border-t-gray-800"></div>
              </div>

              {/* Mini Preview on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white p-2 shadow-2xl opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 border border-gray-100 z-30">
                <img src={property.imageUrl} className="w-full h-24 object-cover mb-2 rounded-sm" alt="" />
                <div className="text-[10px] font-bold text-black truncate">{property.title}</div>
                <div className="text-[9px] text-gray-400 font-bold">${property.price.toLocaleString()}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
