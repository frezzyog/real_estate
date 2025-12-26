
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center group mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center rounded-sm mr-2">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-black tracking-widest uppercase">La Maison</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Providing premium real estate services in Cambodia since 2020. Your dream home is just a click away.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300 mb-8">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-bold">Home</Link></li>
              <li><Link to="/search" className="text-sm text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-bold">Properties</Link></li>
              <li><Link to="/search" className="text-sm text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-bold">About Us</Link></li>
              <li><Link to="/search" className="text-sm text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-bold">Agents</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300 mb-8">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <li>Phnom Penh, Cambodia</li>
              <li>+855 12 345 678</li>
              <li>info@lamaison.kh</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300 mb-8">Social</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-black transition-colors"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg></a>
              <a href="#" className="text-gray-300 hover:text-black transition-colors"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.012 3.855.064 1.419.064 2.162.301 2.677.501a4.84 4.84 0 011.83 1.19 4.84 4.84 0 011.19 1.83c.2.515.437 1.258.501 2.677.052 1.071.064 1.425.064 3.855s-.012 2.784-.064 3.855c-.064 1.419-.301 2.162-.501 2.677a4.84 4.84 0 01-1.19 1.83 4.84 4.84 0 01-1.83 1.19c-.515.2-1.258.437-2.677.501-1.071.052-1.425.064-3.855.064s-2.784-.012-3.855-.064c-1.419-.064-2.162-.301-2.677-.501a4.84 4.84 0 01-1.83-1.19 4.84 4.84 0 01-1.19-1.83c-.2-.515-.437-1.258-.501-2.677a3.91 3.91 0 01-.1-.3c-.052-1.071-.064-1.425-.064-3.855s.012-2.784.064-3.855c.064-1.419.301-2.162.501-2.677a4.84 4.84 0 011.19-1.83 4.84 4.84 0 011.83-1.19c.515-.2 1.258-.437 2.677-.501 1.071-.052 1.425-.064 3.855-.064zm0 2.235c-2.43 0-2.744.012-3.82.064-1.27.064-1.887.214-2.314.388a2.64 2.64 0 00-1.036.673 2.64 2.64 0 00-.673 1.036c-.174.427-.324 1.044-.388 2.314-.052 1.076-.064 1.39-.064 3.82s.012 2.744.064 3.82c.064 1.27.214 1.887.388 2.314a2.64 2.64 0 00.673 1.036 2.64 2.64 0 001.036.673c.427.174 1.044.324 2.314.388 1.076.052 1.39.064 3.82.064s2.744-.012 3.82-.064c1.27-.064 1.887-.214 2.314-.388a2.64 2.64 0 001.036-.673 2.64 2.64 0 00.673-1.036c.174-.427.324-1.044.388-2.314.052-1.076.064-1.39.064-3.82s-.012-2.744-.064-3.82c-.064-1.27-.214-1.887-.388-2.314a2.64 2.64 0 00-.673-1.036 2.64 2.64 0 00-1.036-.673c-.427-.174-1.044-.324-2.314-.388-1.076-.052-1.39-.064-3.82-.064zM12 5.865a6.135 6.135 0 100 12.27 6.135 6.135 0 000-12.27zM12 15.9a3.765 3.765 0 110-7.53 3.765 3.765 0 010 7.53zm5.79-10.038a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /></svg></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
          <p>&copy; 2024 La Maison Private Ltd. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
