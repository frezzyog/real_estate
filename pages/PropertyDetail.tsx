
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PROPERTIES } from '../constants';
import { Property, User } from '../types';

interface PropertyDetailProps {
  user: User | null;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const found = MOCK_PROPERTIES.find(p => p.id === id);
    if (found) {
      setProperty(found);
    } else {
      navigate('/search');
    }
  }, [id, navigate]);

  if (!property) return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-black"></div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 pb-4 border-b border-gray-50">
          <button onClick={() => navigate('/')} className="hover:text-black transition-colors">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/search')} className="hover:text-black transition-colors">Properties</button>
          <span>/</span>
          <span className="text-black">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Images and Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Image and Thumbnails */}
            <div className="space-y-6">
              <div className="relative rounded-sm overflow-hidden aspect-[16/10] bg-gray-50 group">
                <img src={property.images[activeImage]} alt={property.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute bottom-6 right-6 bg-black text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-2xl">
                  {activeImage + 1} / {property.images.length}
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`flex-shrink-0 w-32 h-20 rounded-sm overflow-hidden border transition-all ${activeImage === idx ? 'border-black scale-105' : 'border-gray-100 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Stats Header */}
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-2">{property.title}</h1>
                  <p className="text-gray-400 text-lg font-medium">{property.address}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-black mb-1">${property.price.toLocaleString()}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fixed Price</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-100">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bedrooms</p>
                  <p className="text-2xl font-bold text-black">{property.beds}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bathrooms</p>
                  <p className="text-2xl font-bold text-black">{property.baths}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Square Area</p>
                  <p className="text-2xl font-bold text-black">{property.sqft.toLocaleString()} <span className="text-xs">m</span></p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Year Built</p>
                  <p className="text-2xl font-bold text-black">{property.yearBuilt}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-black uppercase tracking-widest">Description</h2>
                <p className="text-gray-500 text-lg leading-[1.8] font-medium max-w-3xl">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-bold text-black uppercase tracking-widest">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real Google Map Section */}
              <div className="space-y-6 pt-12 border-t border-gray-50">
                <h2 className="text-xl font-bold text-black uppercase tracking-widest">Location</h2>
                <div className="w-full h-[400px] rounded-sm overflow-hidden border border-gray-100 shadow-sm relative group">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1)' }}
                    loading="lazy"
                    allowFullScreen
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(property.address + ', Cambodia')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  ></iframe>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <span>Coordinates: {property.lat.toFixed(4)}, {property.lng.toFixed(4)}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.address + ', Cambodia')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Enhanced Detailed Features Grid */}
              <div className="space-y-8 pt-12 border-t border-gray-50">
                <h2 className="text-xl font-bold text-black uppercase tracking-widest">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">Available for {property.listingType === 'Sale' ? 'Purchase' : 'Rent'}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property ID</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">EF-{property.id.padStart(5, '0')}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price per m²</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">${Math.round(property.price / property.sqft).toLocaleString()}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Furnishing</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">Fully Furnished</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Parking</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">2 Private Spaces</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View</p>
                    <p className="text-sm font-bold text-black uppercase tracking-widest">Skyline & River View</p>
                  </div>
                </div>
              </div>

              {/* Sales & Financial Details */}
              <div className="space-y-8 pt-12 border-t border-gray-50">
                <h2 className="text-xl font-bold text-black uppercase tracking-widest">Pricing Details</h2>
                <div className="bg-gray-50 p-10 rounded-sm border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Investment</p>
                      <p className="text-4xl font-bold text-black">${property.price.toLocaleString()}</p>
                      <p className="text-xs text-gray-400 font-medium">Inclusive of all local transfer taxes and professional fees.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Tax</p>
                        <p className="text-sm font-bold text-black">0.1% Annually</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Service Fee</p>
                        <p className="text-sm font-bold text-black">$1.5/m² Monthly</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ownership</p>
                        <p className="text-sm font-bold text-black">Hard Title / Freehold</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transfer Fee</p>
                        <p className="text-sm font-bold text-black">4% Standard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-32 bg-gray-50 p-8 rounded-sm border border-gray-100 shadow-2xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-black text-white rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xl uppercase tracking-widest">
                  {property.agentName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-black uppercase tracking-widest mb-1">{property.agentName}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Exclusive Luxury Agent</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors font-bold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors font-bold text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    defaultValue={`I'm interested in ${property.title}.`}
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-black outline-none transition-colors font-bold text-sm"
                  />
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl mt-4">
                  Enquire Now
                </button>
              </form>

              <p className="mt-8 text-[10px] text-gray-300 text-center leading-relaxed font-bold uppercase tracking-widest">
                By submitting, you agree to our <br />Private Membership Terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
