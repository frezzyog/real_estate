
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        src="/about-office.png"
                        alt="La Maison Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-[0.2em]">Our Story</h1>
                    <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Redefining the real estate experience in Cambodia with transparency, elegance, and local expertise.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-[2px] bg-black"></div>
                            <span className="text-black text-sm font-bold uppercase tracking-[0.3em]">Our Mission</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight">
                            Elevating Living Standards Through Exceptional Property Services
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Founded in 2020, La Maison started with a simple belief: finding a home should be a journey of excitement, not stress. We've combined deep local knowledge with international standards to provide a seamless property ecosystem.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Whether you're looking for a luxury villa in BKK1, a modern condo in Diamond Island, or an investment opportunity in the growing outskirts of Phnom Penh, our team is committed to finding your perfect match.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                            <div className="text-3xl font-bold text-black mb-2">99%</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Client Satisfaction</div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                            <div className="text-3xl font-bold text-black mb-2">5+</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Years Excellence</div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                            <div className="text-3xl font-bold text-black mb-2">1.2k+</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Properties Managed</div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                            <div className="text-3xl font-bold text-black mb-2">24/7</div>
                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Dedicated Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-24 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-4 mb-6">
                        <div className="w-8 h-[1px] bg-black"></div>
                        <span className="text-black text-[10px] font-bold uppercase tracking-[0.4em]">Leadership</span>
                        <div className="w-8 h-[1px] bg-black"></div>
                    </div>
                    <h2 className="text-3xl font-bold text-black mb-16 uppercase tracking-widest">The Minds Behind La Maison</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: 'Rotha Dalin', role: 'Founder & CEO', img: '/team/founder.png' },
                            { name: 'Kong Sophanith', role: 'Head of Listings', img: '/team/listings.png' },
                            { name: 'Nhem Panhavisal', role: 'Customer Relations', img: '/team/relations.png' }
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="relative overflow-hidden mb-6 rounded-sm aspect-[4/5]">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" />
                                </div>
                                <h3 className="text-lg font-bold text-black uppercase tracking-widest mb-1">{member.name}</h3>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-black mb-8 leading-tight uppercase tracking-widest">Ready to find your dream home?</h2>
                    <p className="text-gray-500 mb-10 text-lg">Our experts are waiting to guide you through the process.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-gray-800 transition-all">Contact Us</button>
                        <button className="border border-black text-black px-10 py-4 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all">Browse Properties</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
