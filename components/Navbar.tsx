
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm mr-2 transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-black tracking-widest uppercase">La Maison</span>
            </Link>
            <div className="hidden sm:ml-12 sm:flex sm:space-x-10">
              <Link to="/" className="text-black hover:text-gray-500 px-3 py-2 text-sm font-bold transition-colors uppercase tracking-[0.2em]">Home</Link>
              <Link to="/about" className="text-black hover:text-gray-500 px-3 py-2 text-sm font-bold transition-colors uppercase tracking-[0.2em]">About Us</Link>
              <Link to="/search" className="text-black hover:text-gray-500 px-3 py-2 text-sm font-bold transition-colors uppercase tracking-[0.2em]">Properties</Link>
              <Link to="/agents" className="text-black hover:text-gray-500 px-3 py-2 text-sm font-bold transition-colors uppercase tracking-[0.2em]">Agents</Link>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            </button>
            {user ? (
              <div className="flex items-center space-x-6">
                <Link to="/dashboard" className="flex items-center group">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border border-gray-100 group-hover:border-black transition-colors"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:border-black transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                  )}
                  <span className="ml-3 text-black font-bold uppercase tracking-widest text-[10px] hidden lg:block">{user.name}</span>
                </Link>
                <button
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-500 font-bold uppercase tracking-widest text-[10px] transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-8">
                <Link to="/auth" className="text-black font-bold uppercase tracking-widest text-[10px] hover:text-gray-600 transition-colors">Sign In</Link>
                <Link
                  to="/search"
                  className="inline-flex items-center px-8 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 rounded-sm"
                >
                  Find A House
                </Link>
              </div>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-t border-gray-50`}>
        <div className="pt-2 pb-6 space-y-1 px-4">
          <Link to="/" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Home</Link>
          <Link to="/about" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">About Us</Link>
          <Link to="/search" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Properties</Link>
          <Link to="/agents" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Agents</Link>
          <div className="mt-4 pt-4 border-t border-gray-50">
            {user ? (
              <Link to="/dashboard" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Dashboard</Link>
            ) : (
              <Link to="/auth" className="block py-4 text-xs font-bold uppercase tracking-[0.2em] text-black hover:text-gray-500 transition-colors">Sign In</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
