
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_PROPERTIES } from '../constants';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/phnom-penh-skyline.png"
            alt="Phnom Penh Skyline"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          {/* Subtle Light overlay for readability */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl font-bold text-black mb-8 leading-[1.1]">
              Find A House<br />That Suits You
            </h1>
            <p className="text-gray-800 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Want to find a home? We are ready to help you find one that suits your lifestyle and needs in Cambodia.
            </p>

            <div className="flex justify-center space-x-4 mb-20">
              <button
                onClick={() => navigate('/search')}
                className="bg-black text-white px-12 py-5 font-bold rounded-sm hover:bg-gray-800 transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Get Started
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              <div>
                <div className="text-4xl font-bold text-black">1200 <span className="text-blue-600">+</span></div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Listed Properties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black">4500 <span className="text-blue-600">+</span></div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black">100 <span className="text-blue-600">+</span></div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Awards</div>
              </div>
            </div>

            {/* Search Bar Integrated into Hero */}
            <div className="mt-20 w-full max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-sm border border-gray-100 shadow-2xl">
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="relative bg-gray-50 p-3 rounded-sm group hover:bg-gray-100 transition-all border border-gray-100">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block text-left pl-1">Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Phnom Penh"
                        className="w-full bg-transparent border-none text-black focus:outline-none font-bold text-sm placeholder:text-gray-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gray-50 p-3 rounded-sm group hover:bg-gray-100 transition-all border border-gray-100">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block text-left pl-1">Property Type</label>
                    <select className="w-full bg-transparent border-none text-black focus:outline-none font-bold text-sm appearance-none cursor-pointer">
                      <option className="bg-white text-black">Borey / Villa</option>
                      <option className="bg-white text-black">Condo</option>
                      <option className="bg-white text-black">Land</option>
                    </select>
                    <div className="absolute right-3 bottom-4 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                  </div>

                  <div className="relative bg-gray-50 p-3 rounded-sm group hover:bg-gray-100 transition-all border border-gray-100">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block text-left pl-1">Budget</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="$100k - $500k"
                        className="w-full bg-transparent border-none text-black focus:outline-none font-bold text-sm placeholder:text-gray-300"
                      />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.184a4.535 4.535 0 00-1.676.662C6.602 13.234 6 14.009 6 15c0 .99.602 1.765 1.324 2.246A4.535 4.535 0 009 17.908V18a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662c.722-.481 1.324-1.256 1.324-2.246 0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 12.184V11a1 1 0 10-2 0v-.092a4.535 4.535 0 00-1.676-.662C6.602 9.766 6 8.991 6 8c0-.99.602-1.765 1.324-2.246A4.535 4.535 0 009 5.092V5zm2 10c0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all rounded-sm py-4 h-full"
                  >
                    Search Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-[2px] bg-black"></div>
            <span className="text-black text-sm font-bold uppercase tracking-[0.3em]">Popular</span>
          </div>

          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">Our Popular Homes</h2>
            <button
              onClick={() => navigate('/search')}
              className="text-black flex items-center space-x-3 group font-bold tracking-wider"
            >
              <span>Explore All</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOCK_PROPERTIES.slice(0, 3).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-32 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Choose EstateFlow?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We provide a seamless and trustable real estate experience in Cambodia through verified listings and expert local knowledge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-gray-50 rounded-sm group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white">Verified Listings</h3>
              <p className="text-gray-500 group-hover:text-gray-400">Every property on our platform is manually verified by our team to ensure accuracy and authenticity of title deeds.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-sm group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m16-10a4 4 0 01-4 4H9a4 4 0 01-4-4m12 0a4 4 0 00-4-4H9a4 4 0 00-4 4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white">Expert Consultation</h3>
              <p className="text-gray-500 group-hover:text-gray-400">Our local experts provide free consultation to help you navigate legal and financial aspects in the Cambodian market.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-sm group hover:bg-black transition-all duration-500">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white">Secure Transactions</h3>
              <p className="text-gray-500 group-hover:text-gray-400">We partner with leading local banks to ensure your deposits and payments are handled securely through legitimate channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-[2px] bg-black"></div>
                <span className="text-black text-sm font-bold uppercase tracking-[0.3em]">Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">How It Works</h2>

              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center font-bold text-xl text-black shadow-sm">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Search & Explore</h4>
                    <p className="text-gray-500">Browse through hundreds of verified listings in your desired location and budget using our advanced filters.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center font-bold text-xl text-black shadow-sm">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Schedule a Visit</h4>
                    <p className="text-gray-500">Contact our agents directly from the platform to schedule a free physical visit to the property at your convenience.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center font-bold text-xl text-black shadow-sm">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Secure & Close</h4>
                    <p className="text-gray-500">Complete the documentation and payment through our secure legal and banking partners, ensuring title deed transfers are legal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" className="w-full h-80 object-cover rounded-sm shadow-xl" alt="Property" />
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" className="w-full h-80 object-cover rounded-sm mt-12 shadow-xl" alt="Property" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-10 hidden lg:block border border-gray-900 shadow-2xl">
                <p className="text-3xl font-bold italic mb-2">"Transparent & Easy"</p>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Official Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="md:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-[2px] bg-black"></div>
                <span className="text-black text-sm font-bold uppercase tracking-[0.3em]">Experts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">Our Dedicated Team</h2>
            </div>
            <p className="text-gray-500 text-lg md:w-1/3 mb-2">
              Our team consists of seasoned real estate professionals with deep roots in the Cambodian market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/5] rounded-sm">
                <img src="/team/founder.png" alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-black mb-1">Rotha Dalin</h4>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/5] rounded-sm">
                <img src="/team/listings.png" alt="Listing Manager" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-black mb-1">Kong sophanith</h4>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Head of Listings</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 bg-gray-100 aspect-[4/5] rounded-sm">
                <img src="/team/relations.png" alt="Client Relations" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold text-black mb-1">Visal</h4>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Client Relations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sell Your Property CTA */}
      <section className="bg-gray-50 py-40 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Sell or Rent Your <br />Property with Us
              </h2>
              <p className="text-gray-500 text-lg mb-10 max-w-lg">
                Reach thousands of potential buyers and renters in Cambodia. Our platform provides the tools you need to list and manage your properties effectively.
              </p>
              <button
                onClick={() => navigate('/dashboard/listings')}
                className="bg-black text-white px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-all rounded-sm"
              >
                List Your Property
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                  alt="Premium Interior"
                  className="w-full h-[400px] object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-black p-8 hidden md:block border border-gray-900 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-32">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-[1px] bg-gray-300"></div>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Testimonials</span>
              <div className="w-8 h-[1px] bg-gray-300"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Voice of Our Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative p-10 bg-gray-50 rounded-sm">
              <div className="absolute -left-4 -top-6 text-8xl text-black/5 font-serif italic">“</div>
              <p className="text-gray-700 text-xl font-medium leading-relaxed mb-8 relative z-10">
                Finding a legitimate villa in Phnom Penh was stressful until I used EstateFlow. Their team helped me verify the hard title deed and handled the bank transfer securely. Highly recommended!
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=1" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Sovan Reach</h4>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>
            </div>

            <div className="relative p-10 bg-gray-50 rounded-sm">
              <div className="absolute -left-4 -top-6 text-8xl text-black/5 font-serif italic">“</div>
              <p className="text-gray-700 text-xl font-medium leading-relaxed mb-8 relative z-10">
                As an expat, I was worried about the legalities of property rental in Cambodia. EstateFlow provided an expert who spoke perfect English and guided me through the entire process.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=2" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-black">James Wilson</h4>
                  <p className="text-gray-500 text-sm">Real Estate Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="bg-gray-50 py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">Trusted By Leading Institutions</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <span className="text-black font-black text-2xl tracking-tighter mb-1">ABA BANK</span>
              <div className="h-1 w-0 group-hover:w-full bg-blue-600 transition-all"></div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <span className="text-black font-black text-2xl tracking-tighter mb-1">CVEA</span>
              <div className="h-1 w-0 group-hover:w-full bg-red-600 transition-all"></div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <span className="text-black font-black text-2xl tracking-tighter mb-1">CHIP MONG</span>
              <div className="h-1 w-0 group-hover:w-full bg-yellow-500 transition-all"></div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer">
              <span className="text-black font-black text-2xl tracking-tighter mb-1">BRED BANK</span>
              <div className="h-1 w-0 group-hover:w-full bg-purple-600 transition-all"></div>
            </div>
            <div className="flex flex-col items-center justify-center group cursor-pointer lg:col-span-1 col-span-2">
              <span className="text-black font-black text-2xl tracking-tighter mb-1">CANADIA</span>
              <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
