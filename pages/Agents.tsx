
import React, { useState } from 'react';
import { MOCK_AGENTS } from '../constants';
import { Agent } from '../types';

const Agents: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAgents = MOCK_AGENTS.filter(agent =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-black py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-widest">Our Professionals</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Meet the experts who make luxury real estate in Cambodia effortless and secure.
                    </p>
                </div>
            </section>

            {/* Explorer Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 pb-12 border-b border-gray-50">
                    <div>
                        <h2 className="text-3xl font-bold text-black uppercase tracking-widest">Agent Directory</h2>
                        <p className="text-gray-400 text-sm mt-2 font-bold uppercase tracking-widest">Showing {filteredAgents.length} verified professionals</p>
                    </div>
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search by name or specialty..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border-b-2 border-gray-100 py-4 outline-none focus:border-black transition-colors font-bold text-sm uppercase tracking-widest"
                        />
                        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredAgents.map(agent => (
                        <div key={agent.id} className="group bg-white border border-gray-50 p-8 hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <div className="relative mb-8 overflow-hidden aspect-square bg-gray-50">
                                <img
                                    src={agent.avatar}
                                    alt={agent.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                    {agent.experienceYears}+ Yrs Exp
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-1">{agent.name}</h3>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{agent.role}</p>
                                </div>

                                <div className="pt-4 border-t border-gray-50 space-y-3">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-gray-400">Specialty</span>
                                        <span className="text-black">{agent.specialty}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-gray-400">Listings</span>
                                        <span className="text-black font-black">{agent.propertiesCount} Properties</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                                        <span className="text-gray-400">Languages</span>
                                        <div className="flex gap-2">
                                            {agent.languages.map((lang, i) => (
                                                <span key={i} className="text-black">{lang}{i < agent.languages.length - 1 ? ',' : ''}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex gap-4">
                                    <button className="flex-grow bg-black text-white py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95">
                                        Contact Agent
                                    </button>
                                    <button className="w-14 aspect-square border-2 border-gray-100 flex items-center justify-center hover:border-black transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 01-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredAgents.length === 0 && (
                    <div className="text-center py-40">
                        <div className="text-gray-200 text-6xl mb-6">∅</div>
                        <h3 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">No agents found matching your criteria</h3>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-6 text-black font-bold uppercase tracking-widest text-xs hover:underline"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </section>

            {/* Partner CTA */}
            <section className="bg-gray-50 py-32 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 uppercase tracking-widest leading-tight">Join Our Global <br />Network of Experts</h2>
                    <p className="text-gray-500 text-lg mb-12">
                        Are you a licensed real estate professional in Cambodia? Partner with EstateFlow and gain access to high-value leads and premium listings.
                    </p>
                    <button className="bg-white border-2 border-black text-black px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-xl">
                        Apply to Join
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Agents;
